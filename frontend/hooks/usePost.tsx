import {
  CREATE_POST,
  GET_POSTS,
  GET_POST_BY_ID,
  SEARCH_POSTS,
  SEARCH_TAGS,
  UPDATE_POST,
} from "@/gql/posts";
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
import {
  FormRendererProps,
  Schema,
  componentTypes,
} from "@data-driven-forms/react-form-renderer";
import { FormLabel } from "@mui/material";
import { useState } from "react";

export type InitialValues = {
  tags: string[];
  // body: string;
  // title: string;
  // id?: string;
  products: (Line_Items_Insert_Input & { __typename?: string })[];
  customer_facing_po_document: string;
  proof_of_delivery_document: string;
  customer_facing_po_document_file: {
    inputValue: string;
    inputFiles: File[];
  };
  proof_of_delivery_document_file: {
    inputValue: string;
    inputFiles: File[];
  };
} & GetPostsQuery["posts"]["0"];

export type UsePostProps = {
  type?: "New" | "Edit";
  formRenderProps?: Omit<
    FormRendererProps<InitialValues, Partial<InitialValues>>,
    "schema" | "componentMapper"
  >;
  after?: () => void;
};

export const usePost = ({
  type,
  after,
  formRenderProps,
}: Partial<UsePostProps>) => {
  const initialValues = formRenderProps?.initialValues;
  const { userId, orgId } = useAuth();

  const [loading, setLoading] = useState(false);

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
    Exclude<InitialValues, undefined>
  >["onSubmit"] = async (
    {
      tags,
      body,
      title,
      id,
      products,
      customer_facing_po_document_file,
      customer_facing_po_document,
      ...rest
    },
    api,
  ) => {
    setLoading(true);

    try {
      let poDocUrl = customer_facing_po_document;
      let podDocUrl = rest.proof_of_delivery_document || "";

      const poDoc = customer_facing_po_document_file?.inputFiles?.[0];
      const podDoc = rest.proof_of_delivery_document_file?.inputFiles?.[0];
      /**Returns the blos url */
      const uploadFile = async (file: File) => {
        const response = await fetch(`/api/upload?filename=${file.name}`, {
          method: "POST",
          body: file,
        });
        const data = await response.json();
        return data.url;
      };

      if (poDoc) {
        poDocUrl = await uploadFile(poDoc);
      }
      if (podDoc) {
        podDocUrl = await uploadFile(podDoc);
      }

      const commonVariables = {
        ...rest,
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
        customer_facing_po_document: poDocUrl,
        proof_of_delivery_document: podDocUrl,
      };

      type === "New"
        ? await createPost({
            variables: {
              ...commonVariables,
              creator_id: userId,
              org_id: orgId || userId,
              tags_data:
                tags?.map((tag) => ({
                  tag_id: tag,
                })) || [],
              line_items_data: products.map((p) => {
                delete p.id;
                return { ...p, created_by: userId };
              }),
            },
            refetchQueries: [GET_POSTS, GET_POST_BY_ID, SEARCH_POSTS],
            onError: (e) => console.error(e),
          })
        : await updatePost({
            variables: {
              ...commonVariables,
              id,
              tags:
                tags?.map((tag) => ({
                  tag_id: tag,
                  post_id: id,
                })) || [],
              line_items_data: products.map((p) => {
                delete p.__typename;
                delete p.id;
                return { ...p, post_id: id, created_by: userId };
              }),
            },
            refetchQueries: [GET_POSTS, GET_POST_BY_ID, SEARCH_POSTS],
            onError: (e) => console.error(e),
          });
    } catch (e) {
      console.error(e);
    }

    after && after();
    setLoading(false);
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
        FormFieldGridProps: { mb: 2 },
        name: "products",
        label: "Product section",
        validate: [{ type: "required" }],
        RemoveButtonProps: { sx: { mb: 3.5 }, variant: "outlined" },
        AddButtonProps: { sx: { mb: 1, ml: 2 }, variant: "outlined" },
        initialValue: [""],
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
            disabled: true,
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
        FormFieldGridProps: { mb: 2 },

        name: "delivery_date",
        label: "requested_delivery_date",
        validate: [{ type: "required" }],
      },
      {
        component: componentTypes.TEXT_FIELD,
        FormFieldGridProps: { mb: 2 },
        name: "psr",
        label: "psr",
        validate: [{ type: "required" }],
      },
      {
        component: componentTypes.TEXTAREA,
        FormFieldGridProps: { mb: 2 },
        name: "pickup_address",
        label: "pickup_address",
        validate: [{ type: "required" }],
      },
      {
        component: componentTypes.TEXTAREA,
        FormFieldGridProps: { mb: 2 },
        name: "destination_address",
        label: "destination_address",
        validate: [{ type: "required" }],
      },
      {
        component: componentTypes.TEXTAREA,
        FormFieldGridProps: { mb: 2 },
        name: "destination_poc",
        label: "destination_poc",
        validate: [{ type: "required" }],
      },
      {
        component: componentTypes.TEXTAREA,
        FormFieldGridProps: { mb: 2 },
        name: "delivery_instructions",
        label: "delivery_instructions",
        validate: [{ type: "required" }],
        helperText: "Loading dock needed, white glove, clear the debris, etc. ",
      },
      {
        component: componentTypes.TEXTAREA,
        FormFieldGridProps: { mb: 2 },
        name: "billing_so",
        label: "billing_so",
        validate: [{ type: "required" }],
      },
      {
        component: componentTypes.TEXTAREA,
        FormFieldGridProps: { mb: 2 },
        name: "ior_compliance_resale",
        label: "ior_compliance_resale",
        type: "number",
        helperText:
          "Please provide the resale values for the IOR & intenational FRT lines.  The estimated costs for these lines can be found on the GIDS quote.",
      },
      {
        component: componentTypes.TEXTAREA,
        FormFieldGridProps: { mb: 2 },
        name: "international_frt_resale",
        label: "international_frt_resale",
        type: "number",
      },
      {
        component: "file-upload",
        FormFieldGridProps: { mb: 2 },
        validate: initialValues?.customer_facing_po_document
          ? undefined
          : [{ type: "required" }],
        name: "customer_facing_po_document_file",
        label: "customer_facing_po_document_file",
        type: "file",
      },
      {
        component: "field-listener",
        name: "listener",
        hideField: true,
      },
      {
        component: componentTypes.TEXT_FIELD,
        FormFieldGridProps: { mb: 2 },
        name: "tracking_number",
        label: "tracking_number",
      },
      {
        component: componentTypes.TEXT_FIELD,
        FormFieldGridProps: { mb: 2 },
        name: "carrier",
        label: "carrier",
      },
      {
        component: componentTypes.DATE_PICKER,
        FormFieldGridProps: { mb: 2 },
        name: "actual_delivery_date",
        label: "actual_delivery_date",
      },
      {
        component: componentTypes.TEXTAREA,
        FormFieldGridProps: { mb: 2 },
        name: "ticket_number",
        label: "ticket_number",
        type: "number",
      },
      {
        component: "file-upload",
        FormFieldGridProps: { mb: 2 },
        name: "proof_of_delivery_document_file",
        label: "proof_of_delivery_document_file",
        type: "file",
      },
      // {
      //   component: componentTypes.SELECT,
      //   FormFieldGridProps: { mb: 2 },
      //   noOptionsMessage: "No results",
      //   options: [],
      //   loadOptions: getTags,
      //   name: "tags",
      //   label: "tags",
      //   helperText: "tags",
      //   isMulti: true,
      //   isSearchable: true,
      //   isClearable: true,
      //   menuIsPortal: true,
      // },
    ],
  };

  return {
    userId,
    updatePost,
    onSubmit,
    schema,
    loading: loading || posting || updating,
  };
};
