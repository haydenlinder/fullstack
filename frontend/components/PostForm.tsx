import {
  FormRenderer,
  componentTypes,
  Schema,
  FormRendererProps,
  useFormApi,
  useFieldApi,
  UseFieldApiConfig,
  ValidatorFunction,
} from "@data-driven-forms/react-form-renderer";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";

import { componentMapper as componentMapperI } from "@data-driven-forms/mui-component-mapper";
import { Button, Card, FormLabel, IconButton } from "@mui/material";
import FormTemplateCommonProps from "@data-driven-forms/common/form-template";
import FormSpy from "@data-driven-forms/react-form-renderer/form-spy";

import {
  ChangeEventHandler,
  ComponentType,
  EventHandler,
  useEffect,
  useState,
} from "react";
import { UsePostProps, usePost } from "@/hooks/usePost";

const FileUploadComponent = (props: UseFieldApiConfig) => {
  const { input, label } = useFieldApi(props);
  const { change, getState } = useFormApi();

  const state = getState();

  const [file, setFile] = useState<File | null>(null);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0] || null;
    setFile(file);
    change("customer_facing_po_document", file?.name);
  };

  return (
    <div className="mb-8">
      <FormLabel className="mr-2" htmlFor={"customer_facing_po_new"}>
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
        {/* Empty initial value is required */}
        <input
          type="file"
          accept="application/pdf, .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          id={"customer_facing_po_new"}
          onChange={onChange}
          className="hidden"
        />
        <input
          id={input.name}
          {...{ value: file?.name || "" }}
          className="hidden"
        />
      </Button>
      {state.errors?.["customer_facing_po_document"] && (
        <div>
          <span style={{ color: "red" }}>
            {state.errors?.["customer_facing_po_document"]}
          </span>
        </div>
      )}
      {file && (
        <>
          {file?.name}
          <IconButton onClick={() => setFile(null)}>
            <CloseIcon />
          </IconButton>
        </>
      )}
    </div>
  );
};

const componentMapper = {
  ...componentMapperI,
  "file-upload": FileUploadComponent,
};

export const PostForm = ({
  type = "New",
  initialValues,
  after,
}: UsePostProps) => {
  const { posting, schema, onSubmit, updating } = usePost({
    type,
    after,
  });

  return (
    <Card className="flex justify-center p-10 my-10 w-full">
      <FormRenderer
        {...{
          FormTemplate: (props) => (
            <FormTemplate
              after={after}
              submitting={posting || updating}
              {...props}
            />
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
  const { handleSubmit, getState } = useFormApi();

  const s = getState();

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      {schema.title}
      <>{formFields}</>
      <FormSpy subscription={{ values: true }}>
        {(r) => {
          return (
            <>
              <Button
                style={{ marginRight: "15px" }}
                disabled={submitting}
                type="submit"
                variant="contained"
              >
                Submit
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
