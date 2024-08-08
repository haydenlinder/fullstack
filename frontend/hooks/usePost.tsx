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
  // products: (Line_Items_Insert_Input & { __typename?: string })[];
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
      // products,
      customer_facing_po_document,
      proof_of_delivery_document,
    },
    api,
  ) => {
    setLoading(true);

    try {
      let poDocUrl = customer_facing_po_document;
      let podDocUrl = proof_of_delivery_document || "";

      const commonVariables = {
        // ...rest,
        title,
        body,
        customer_facing_po_document: poDocUrl,
        proof_of_delivery_document: podDocUrl,
      };
      console.log({ title });

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
              // line_items_data: products.map((p) => {
              //   delete p.id;
              //   return { ...p, created_by: userId };
              // }),
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
              // line_items_data: products.map((p) => {
              //   delete p.__typename;
              //   delete p.id;
              //   return { ...p, post_id: id, created_by: userId };
              // }),
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
        component: componentTypes.TEXT_FIELD,
        FormFieldGridProps: { mb: 2 },
        name: "title",
        label: "title",
        validate: [{ type: "required" }],
      },
      {
        component: componentTypes.TEXTAREA,
        FormFieldGridProps: { mb: 2 },
        isRequired: true,
        name: "body",
        label: "body",
        validate: [{ type: "required" }],
      },
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
