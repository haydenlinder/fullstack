import {
  FormRenderer,
  useFormApi,
  useFieldApi,
  UseFieldApiConfig,
} from "@data-driven-forms/react-form-renderer";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { componentMapper as componentMapperI } from "@data-driven-forms/mui-component-mapper";
import {
  Button,
  Card,
  CircularProgress,
  FormLabel,
  IconButton,
} from "@mui/material";
import FormTemplateCommonProps from "@data-driven-forms/common/form-template";
import FormSpy from "@data-driven-forms/react-form-renderer/form-spy";

import { ChangeEventHandler, ComponentType, useEffect, useState } from "react";
import { UsePostProps, usePost } from "@/hooks/usePost";
import { Line_Items } from "@/src/gql/graphql";

const FieldListener = () => {
  const { getState, change } = useFormApi();
  const { products } = getState().values as { products?: Line_Items[] };
  let total = 0;
  products?.forEach(
    (p) => (total += Number(p?.quantity) + Number(p?.unit_resell)),
    0,
  );

  useEffect(() => {
    products?.forEach((p, i) => {
      change(
        `products[${i}].extended_resell`,
        Number(p?.unit_resell || 0) * Number(p?.quantity || 0),
      );
    });
  }, [total]);

  return null;
};

const FieldListenerWrapper = () => (
  <FormSpy subscription={{ values: true }}>{() => <FieldListener />}</FormSpy>
);

const FileUploadComponent = (props: UseFieldApiConfig) => {
  const { input, label, meta } = useFieldApi(props);
  const { change, getState, ...api } = useFormApi();

  const state = getState();

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0] || null;
    change("customer_facing_po_document_file", { inputFiles: [file] });
  };

  const file = state.values.customer_facing_po_document_file?.inputFiles?.[0];
  const currentFile = state.values.customer_facing_po_document;

  return (
    <div className="mb-8">
      <FormLabel className="mr-2" htmlFor={input.name}>
        {label}
      </FormLabel>
      <Button
        sx={{ mr: 1 }}
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
      >
        <CloudUploadIcon />
        {/* Empty initial value is required to prevent error. Handle change manually */}
        <input
          accept="application/pdf, .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          id={input.name}
          {...{ ...input, value: "", onChange }}
          // onChange={onChange}
          className="hidden"
        />
      </Button>
      {meta.error && (
        <div>
          <span style={{ color: "red" }}>{meta.error}</span>
        </div>
      )}
      {file && (
        <>
          {file?.name}
          <IconButton onClick={() => change(input.name, null)}>
            <CloseIcon />
          </IconButton>
        </>
      )}
      {currentFile && !file && (
        <a
          className="text-blue-300 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          href={currentFile}
        >
          View Current Document <OpenInNewIcon fontSize="inherit" />
        </a>
      )}
    </div>
  );
};

const componentMapper = {
  ...componentMapperI,
  "file-upload": FileUploadComponent,
  "field-listener": FieldListenerWrapper,
};

export const PostForm = ({
  type = "New",
  initialValues,
  after,
}: UsePostProps) => {
  const { schema, onSubmit, loading } = usePost({
    type,
    after,
    initialValues,
  });

  return (
    <Card className="flex justify-center p-10 my-10 w-full">
      <FormRenderer
        {...{
          FormTemplate: (props) => (
            <FormTemplate after={after} submitting={loading} {...props} />
          ),
          componentMapper,
          schema,
          onSubmit,
          initialValues,
        }}
      />
    </Card>
  );
};

const FormTemplate: ComponentType<
  FormTemplateCommonProps & { submitting: boolean; after?: () => void }
> = ({ schema, formFields, submitting, after }) => {
  const { handleSubmit } = useFormApi();

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      {schema.title}
      <>{formFields}</>
      <FormSpy subscription={{ values: true }}>
        {(r) => {
          return (
            <>
              <FieldListener />
              <Button
                style={{ marginRight: "15px" }}
                disabled={submitting}
                type="submit"
                variant="contained"
              >
                {submitting ? (
                  <>
                    <CircularProgress /> Saving
                  </>
                ) : (
                  "Save"
                )}
              </Button>
              {after && (
                <Button onClick={after} variant="contained">
                  Cancel
                </Button>
              )}
            </>
          );
        }}
      </FormSpy>
    </form>
  );
};
