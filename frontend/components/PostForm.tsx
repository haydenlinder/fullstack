import {
  FormRenderer,
  componentTypes,
  Schema,
  FormRendererProps,
  useFormApi,
} from "@data-driven-forms/react-form-renderer";
import { componentMapper } from "@data-driven-forms/mui-component-mapper";
import { Button, Card, FormLabel } from "@mui/material";
import FormTemplateCommonProps from "@data-driven-forms/common/form-template";
import FormSpy from "@data-driven-forms/react-form-renderer/form-spy";
import {
  CreatePostMutation,
  CreatePostMutationVariables,
  GetPostsQuery,
  Line_Items_Insert_Input,
  UpdatePostMutation,
  UpdatePostMutationVariables,
} from "@/src/gql/graphql";
import { useApolloClient, useMutation } from "@apollo/client";
import { useAuth } from "@clerk/nextjs";
import { CREATE_POST, GET_POSTS, SEARCH_TAGS, UPDATE_POST } from "@/gql/posts";
import { ComponentType } from "react";

export const PostForm = ({ type = "New", initialValues, after }: Props) => {
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
      <FormSpy>
        {(r) => {
          return (
            <>
              <Button
                style={{ marginRight: "15px" }}
                disabled={submitting || !s.valid}
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

type Props = {
  type?: "New" | "Edit";
  initialValues?: {
    body?: string;
    id?: string;
    title?: string;
    tags?: string[];
  };
  after?: () => void;
};

const usePost = ({ type, after, initialValues }: Props) => {
  const { userId, orgId } = useAuth();

  const [createPost, { loading: posting }] = useMutation<
    CreatePostMutation,
    CreatePostMutationVariables
  >(CREATE_POST);

  const [updatePost, { loading: updating }] = useMutation<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >(UPDATE_POST);

  const client = useApolloClient();

  const getTags = async (search: string) => {
    const res = await client.query({
      query: SEARCH_TAGS,
      variables: { _regex: search },
    });
    const ar = res?.data?.tags.map((t) => ({
      label: t.id,
      value: t.id,
      key: t.id,
    }));
    return ar || [];
  };

  const onSubmit: FormRendererProps<
    {
      tags?: string[];
      body: string;
      title: string;
      id?: string;
      products: (Line_Items_Insert_Input & { __typename?: string })[];
    } & GetPostsQuery["posts"]["0"]
  >["onSubmit"] = async ({ tags, body, title, id, products, ...rest }, api) => {
    // return
    const lineItemsData = products.map((p) => {
      delete p.id;
      return { ...p, created_by: userId };
    });
    console.log(rest);
    console.log(rest);

    const variables = {
      pickup_address: rest.pickup_address,
      delivery_date: rest.delivery_date,
      psr: rest.psr,
      destination_address: rest.destination_address,
      destination_poc: rest.destination_poc,
      delivery_instructions: rest.delivery_instructions,
      billing_so: rest.billing_so,
      ior_compliance_resale: rest.ior_compliance_resale,
      international_frt_resale: rest.international_frt_resale,
      body,
      title,
      id,
      tags:
        tags?.map((tag) => ({
          tag_id: tag,
          post_id: id,
        })) || [],
      line_items_data: lineItemsData.map((i) => {
        delete i.__typename;
        return { ...i, post_id: id };
      }),
    };
    console.log(variables);
    try {
      type === "New"
        ? await createPost({
            variables: {
              creator_id: userId,
              pickup_address: rest.pickup_address,
              delivery_date: rest.delivery_date,
              psr: rest.psr,
              destination_address: rest.destination_address,
              destination_poc: rest.destination_poc,
              delivery_instructions: rest.delivery_instructions,
              billing_so: rest.billing_so,
              ior_compliance_resale: rest.ior_compliance_resale,
              international_frt_resale: rest.international_frt_resale,
              org_id: orgId || userId,
              body,
              title,
              tags_data:
                tags?.map((tag) => ({
                  tag_id: tag,
                })) || [],
              line_items_data: lineItemsData,
            },
            refetchQueries: [GET_POSTS],
            onCompleted: () => api.reset(),
            onError: (e) => console.error(e),
          })
        : await updatePost({
            variables,
            refetchQueries: [GET_POSTS],
          });
    } catch (e) {
      console.error(e);
    }
    after && after();
  };

  const schema: Schema = {
    title: (
      <div className="mb-5">
        <FormLabel>{type} Post</FormLabel>
      </div>
    ),
    fields: [
      {
        component: "field-array",
        class: "mb-8",
        name: "products",
        label: "Product section",
        validate: [{ type: "required" }],
        initialValue: [""],
        FieldContainerProps: { spacing: 0 },
        GridContainerProps: { spacing: 0 },
        BodyGridProps: { spacing: 0 },
        fields: [
          {
            FormFieldGridProps: { xs: 2.4 },
            component: "text-field",
            name: "part_number",
            label: "part_number",
            placeholder: "part_number",
            isRequired: true,
            validate: [
              {
                type: "required",
              },
            ],
          },
          {
            FormFieldGridProps: { xs: 2.4 },
            isRequired: true,
            validate: [
              {
                type: "required",
              },
            ],
            component: "textarea",
            name: "description",
            label: "Description",
            placeholder: "Description",
          },
          {
            FormFieldGridProps: { xs: 2.4 },
            isRequired: true,
            validate: [
              {
                type: "required",
              },
            ],
            component: "text-field",
            type: "number",
            name: "quantity",
            label: "quantity",
            placeholder: "quantity",
          },
          {
            FormFieldGridProps: { xs: 2.4 },
            isRequired: true,
            validate: [
              {
                type: "required",
              },
            ],
            component: "text-field",
            name: "customer_po",
            label: "customer_po",
            placeholder: "customer_po",
          },
          {
            FormFieldGridProps: { xs: 2.4 },
            isRequired: true,
            validate: [
              {
                type: "required",
              },
            ],
            component: "text-field",
            type: "number",
            name: "unit_resell",
            label: "unit_resell",
            placeholder: "unit_resell",
          },
          {
            FormFieldGridProps: { xs: 2.4 },
            isRequired: true,
            validate: [
              {
                type: "required",
              },
            ],
            component: "text-field",
            type: "number",
            name: "extended_resell",
            label: "extended_resell",
            placeholder: "extended_resell",
          },
          {
            FormFieldGridProps: { xs: 2.4 },
            isRequired: true,
            validate: [
              {
                type: "required",
              },
            ],
            component: "text-field",
            name: "manufacturer",
            label: "manufacturer",
            placeholder: "manufacturer",
          },
          {
            FormFieldGridProps: { xs: 2.4 },
            isRequired: true,
            validate: [
              {
                type: "required",
              },
            ],
            component: "text-field",
            name: "so",
            label: "so",
            placeholder: "so",
          },
          {
            FormFieldGridProps: { xs: 2.4 },
            isRequired: true,
            validate: [
              {
                type: "required",
              },
            ],
            component: "text-field",
            name: "po",
            label: "po",
            placeholder: "po",
          },
          {
            FormFieldGridProps: { xs: 2.4 },
            DatePickerProps: { sx: { m: 0 } },
            isRequired: true,
            validate: [
              {
                type: "required",
              },
            ],
            component: componentTypes.DATE_PICKER,
            name: "whs_delivery_date",
            label: "whs_delivery_date",
            placeholder: "whs_delivery_date",
          },
        ],
      },
      {
        component: componentTypes.DATE_PICKER,
        class: "mb-8",
        FormFieldGridProps: { xs: 6, mb: 3 },
        name: "delivery_date",
        label: "delivery_date",
        validate: [{ type: "required" }],
      },
      {
        component: componentTypes.TEXT_FIELD,
        class: "mb-8",
        name: "psr",
        label: "psr",
        validate: [{ type: "required" }],
        FormFieldGridProps: { xs: 6 },
      },
      {
        component: componentTypes.TEXTAREA,
        class: "mb-8",
        name: "pickup_address",
        label: "pickup_address",
        validate: [{ type: "required" }],
      },
      {
        component: componentTypes.TEXTAREA,
        class: "mb-8",
        name: "destination_address",
        label: "destination_address",
        validate: [{ type: "required" }],
      },
      {
        component: componentTypes.TEXTAREA,
        class: "mb-8",
        name: "destination_poc",
        label: "destination_poc",
        validate: [{ type: "required" }],
      },
      {
        component: componentTypes.TEXTAREA,
        class: "mb-8",
        name: "delivery_instructions",
        label: "delivery_instructions",
        validate: [{ type: "required" }],
        helperText:
          "Ticket #, loading dock needed, white glove, clear the debris, etc. ",
      },
      {
        component: componentTypes.TEXTAREA,
        class: "mb-8",
        name: "billing_so",
        label: "billing_so",
        validate: [{ type: "required" }],
      },
      {
        component: componentTypes.TEXTAREA,
        class: "mb-8",
        name: "ior_compliance_resale",
        label: "ior_compliance_resale",
        helperText:
          "Please provide the resale values for the IOR & intenational FRT lines.  The estimated costs for these lines can be found on the GIDS quote.",
      },
      {
        component: componentTypes.TEXTAREA,
        class: "mb-8",
        name: "international_frt_resale",
        label: "international_frt_resale",
      },
      {
        component: componentTypes.SELECT,
        class: "mb-8",
        noOptionsMessage: "No results",
        options: [],
        loadOptions: getTags,
        name: "tags",
        label: "tags",
        helperText: "tags",
        isMulti: true,
        isSearchable: true,
        isClearable: true,
        menuIsPortal: true,
      },
    ],
  };

  return { userId, updatePost, updating, posting, onSubmit, schema };
};
