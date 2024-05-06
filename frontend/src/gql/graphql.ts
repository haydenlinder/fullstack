/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "line_items" */
export type Line_Items = {
  __typename?: 'line_items';
  created_at: Scalars['timestamptz']['output'];
  created_by: Scalars['String']['output'];
  customer_po: Scalars['String']['output'];
  description: Scalars['String']['output'];
  extended_resell: Scalars['numeric']['output'];
  id: Scalars['Int']['output'];
  manufacturer: Scalars['String']['output'];
  part_number: Scalars['String']['output'];
  po: Scalars['String']['output'];
  /** An object relationship */
  post?: Maybe<Posts>;
  post_id: Scalars['uuid']['output'];
  quantity: Scalars['Int']['output'];
  so: Scalars['String']['output'];
  unit_resell: Scalars['numeric']['output'];
  whs_delivery_date?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "line_items" */
export type Line_Items_Aggregate = {
  __typename?: 'line_items_aggregate';
  aggregate?: Maybe<Line_Items_Aggregate_Fields>;
  nodes: Array<Line_Items>;
};

export type Line_Items_Aggregate_Bool_Exp = {
  count?: InputMaybe<Line_Items_Aggregate_Bool_Exp_Count>;
};

export type Line_Items_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Line_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Line_Items_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "line_items" */
export type Line_Items_Aggregate_Fields = {
  __typename?: 'line_items_aggregate_fields';
  avg?: Maybe<Line_Items_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Line_Items_Max_Fields>;
  min?: Maybe<Line_Items_Min_Fields>;
  stddev?: Maybe<Line_Items_Stddev_Fields>;
  stddev_pop?: Maybe<Line_Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Line_Items_Stddev_Samp_Fields>;
  sum?: Maybe<Line_Items_Sum_Fields>;
  var_pop?: Maybe<Line_Items_Var_Pop_Fields>;
  var_samp?: Maybe<Line_Items_Var_Samp_Fields>;
  variance?: Maybe<Line_Items_Variance_Fields>;
};


/** aggregate fields of "line_items" */
export type Line_Items_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Line_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "line_items" */
export type Line_Items_Aggregate_Order_By = {
  avg?: InputMaybe<Line_Items_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Line_Items_Max_Order_By>;
  min?: InputMaybe<Line_Items_Min_Order_By>;
  stddev?: InputMaybe<Line_Items_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Line_Items_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Line_Items_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Line_Items_Sum_Order_By>;
  var_pop?: InputMaybe<Line_Items_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Line_Items_Var_Samp_Order_By>;
  variance?: InputMaybe<Line_Items_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "line_items" */
export type Line_Items_Arr_Rel_Insert_Input = {
  data: Array<Line_Items_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Line_Items_On_Conflict>;
};

/** aggregate avg on columns */
export type Line_Items_Avg_Fields = {
  __typename?: 'line_items_avg_fields';
  extended_resell?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  unit_resell?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "line_items" */
export type Line_Items_Avg_Order_By = {
  extended_resell?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  unit_resell?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "line_items". All fields are combined with a logical 'AND'. */
export type Line_Items_Bool_Exp = {
  _and?: InputMaybe<Array<Line_Items_Bool_Exp>>;
  _not?: InputMaybe<Line_Items_Bool_Exp>;
  _or?: InputMaybe<Array<Line_Items_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<String_Comparison_Exp>;
  customer_po?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  extended_resell?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  manufacturer?: InputMaybe<String_Comparison_Exp>;
  part_number?: InputMaybe<String_Comparison_Exp>;
  po?: InputMaybe<String_Comparison_Exp>;
  post?: InputMaybe<Posts_Bool_Exp>;
  post_id?: InputMaybe<Uuid_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  so?: InputMaybe<String_Comparison_Exp>;
  unit_resell?: InputMaybe<Numeric_Comparison_Exp>;
  whs_delivery_date?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "line_items" */
export enum Line_Items_Constraint {
  /** unique or primary key constraint on columns "id" */
  LineItemsPkey = 'line_items_pkey'
}

/** input type for incrementing numeric columns in table "line_items" */
export type Line_Items_Inc_Input = {
  extended_resell?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  unit_resell?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "line_items" */
export type Line_Items_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  customer_po?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  extended_resell?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  part_number?: InputMaybe<Scalars['String']['input']>;
  po?: InputMaybe<Scalars['String']['input']>;
  post?: InputMaybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  so?: InputMaybe<Scalars['String']['input']>;
  unit_resell?: InputMaybe<Scalars['numeric']['input']>;
  whs_delivery_date?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Line_Items_Max_Fields = {
  __typename?: 'line_items_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  customer_po?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extended_resell?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  part_number?: Maybe<Scalars['String']['output']>;
  po?: Maybe<Scalars['String']['output']>;
  post_id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  so?: Maybe<Scalars['String']['output']>;
  unit_resell?: Maybe<Scalars['numeric']['output']>;
  whs_delivery_date?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "line_items" */
export type Line_Items_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  customer_po?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  extended_resell?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  manufacturer?: InputMaybe<Order_By>;
  part_number?: InputMaybe<Order_By>;
  po?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  so?: InputMaybe<Order_By>;
  unit_resell?: InputMaybe<Order_By>;
  whs_delivery_date?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Line_Items_Min_Fields = {
  __typename?: 'line_items_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  customer_po?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extended_resell?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  part_number?: Maybe<Scalars['String']['output']>;
  po?: Maybe<Scalars['String']['output']>;
  post_id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  so?: Maybe<Scalars['String']['output']>;
  unit_resell?: Maybe<Scalars['numeric']['output']>;
  whs_delivery_date?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "line_items" */
export type Line_Items_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  customer_po?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  extended_resell?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  manufacturer?: InputMaybe<Order_By>;
  part_number?: InputMaybe<Order_By>;
  po?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  so?: InputMaybe<Order_By>;
  unit_resell?: InputMaybe<Order_By>;
  whs_delivery_date?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "line_items" */
export type Line_Items_Mutation_Response = {
  __typename?: 'line_items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Line_Items>;
};

/** on_conflict condition type for table "line_items" */
export type Line_Items_On_Conflict = {
  constraint: Line_Items_Constraint;
  update_columns?: Array<Line_Items_Update_Column>;
  where?: InputMaybe<Line_Items_Bool_Exp>;
};

/** Ordering options when selecting data from "line_items". */
export type Line_Items_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  customer_po?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  extended_resell?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  manufacturer?: InputMaybe<Order_By>;
  part_number?: InputMaybe<Order_By>;
  po?: InputMaybe<Order_By>;
  post?: InputMaybe<Posts_Order_By>;
  post_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  so?: InputMaybe<Order_By>;
  unit_resell?: InputMaybe<Order_By>;
  whs_delivery_date?: InputMaybe<Order_By>;
};

/** primary key columns input for table: line_items */
export type Line_Items_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "line_items" */
export enum Line_Items_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  CustomerPo = 'customer_po',
  /** column name */
  Description = 'description',
  /** column name */
  ExtendedResell = 'extended_resell',
  /** column name */
  Id = 'id',
  /** column name */
  Manufacturer = 'manufacturer',
  /** column name */
  PartNumber = 'part_number',
  /** column name */
  Po = 'po',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  So = 'so',
  /** column name */
  UnitResell = 'unit_resell',
  /** column name */
  WhsDeliveryDate = 'whs_delivery_date'
}

/** input type for updating data in table "line_items" */
export type Line_Items_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  customer_po?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  extended_resell?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  part_number?: InputMaybe<Scalars['String']['input']>;
  po?: InputMaybe<Scalars['String']['input']>;
  post_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  so?: InputMaybe<Scalars['String']['input']>;
  unit_resell?: InputMaybe<Scalars['numeric']['input']>;
  whs_delivery_date?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Line_Items_Stddev_Fields = {
  __typename?: 'line_items_stddev_fields';
  extended_resell?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  unit_resell?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "line_items" */
export type Line_Items_Stddev_Order_By = {
  extended_resell?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  unit_resell?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Line_Items_Stddev_Pop_Fields = {
  __typename?: 'line_items_stddev_pop_fields';
  extended_resell?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  unit_resell?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "line_items" */
export type Line_Items_Stddev_Pop_Order_By = {
  extended_resell?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  unit_resell?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Line_Items_Stddev_Samp_Fields = {
  __typename?: 'line_items_stddev_samp_fields';
  extended_resell?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  unit_resell?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "line_items" */
export type Line_Items_Stddev_Samp_Order_By = {
  extended_resell?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  unit_resell?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "line_items" */
export type Line_Items_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Line_Items_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Line_Items_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  customer_po?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  extended_resell?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  part_number?: InputMaybe<Scalars['String']['input']>;
  po?: InputMaybe<Scalars['String']['input']>;
  post_id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  so?: InputMaybe<Scalars['String']['input']>;
  unit_resell?: InputMaybe<Scalars['numeric']['input']>;
  whs_delivery_date?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Line_Items_Sum_Fields = {
  __typename?: 'line_items_sum_fields';
  extended_resell?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  unit_resell?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "line_items" */
export type Line_Items_Sum_Order_By = {
  extended_resell?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  unit_resell?: InputMaybe<Order_By>;
};

/** update columns of table "line_items" */
export enum Line_Items_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  CustomerPo = 'customer_po',
  /** column name */
  Description = 'description',
  /** column name */
  ExtendedResell = 'extended_resell',
  /** column name */
  Id = 'id',
  /** column name */
  Manufacturer = 'manufacturer',
  /** column name */
  PartNumber = 'part_number',
  /** column name */
  Po = 'po',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  So = 'so',
  /** column name */
  UnitResell = 'unit_resell',
  /** column name */
  WhsDeliveryDate = 'whs_delivery_date'
}

export type Line_Items_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Line_Items_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Line_Items_Set_Input>;
  /** filter the rows which have to be updated */
  where: Line_Items_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Line_Items_Var_Pop_Fields = {
  __typename?: 'line_items_var_pop_fields';
  extended_resell?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  unit_resell?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "line_items" */
export type Line_Items_Var_Pop_Order_By = {
  extended_resell?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  unit_resell?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Line_Items_Var_Samp_Fields = {
  __typename?: 'line_items_var_samp_fields';
  extended_resell?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  unit_resell?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "line_items" */
export type Line_Items_Var_Samp_Order_By = {
  extended_resell?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  unit_resell?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Line_Items_Variance_Fields = {
  __typename?: 'line_items_variance_fields';
  extended_resell?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
  unit_resell?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "line_items" */
export type Line_Items_Variance_Order_By = {
  extended_resell?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  unit_resell?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "line_items" */
  delete_line_items?: Maybe<Line_Items_Mutation_Response>;
  /** delete single row from the table: "line_items" */
  delete_line_items_by_pk?: Maybe<Line_Items>;
  /** delete data from the table: "organization_users" */
  delete_organization_users?: Maybe<Organization_Users_Mutation_Response>;
  /** delete single row from the table: "organization_users" */
  delete_organization_users_by_pk?: Maybe<Organization_Users>;
  /** delete data from the table: "organizations" */
  delete_organizations?: Maybe<Organizations_Mutation_Response>;
  /** delete single row from the table: "organizations" */
  delete_organizations_by_pk?: Maybe<Organizations>;
  /** delete data from the table: "post_reaction_types" */
  delete_post_reaction_types?: Maybe<Post_Reaction_Types_Mutation_Response>;
  /** delete single row from the table: "post_reaction_types" */
  delete_post_reaction_types_by_pk?: Maybe<Post_Reaction_Types>;
  /** delete data from the table: "post_reactions" */
  delete_post_reactions?: Maybe<Post_Reactions_Mutation_Response>;
  /** delete single row from the table: "post_reactions" */
  delete_post_reactions_by_pk?: Maybe<Post_Reactions>;
  /** delete data from the table: "post_tags" */
  delete_post_tags?: Maybe<Post_Tags_Mutation_Response>;
  /** delete single row from the table: "post_tags" */
  delete_post_tags_by_pk?: Maybe<Post_Tags>;
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>;
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>;
  /** delete data from the table: "status_types" */
  delete_status_types?: Maybe<Status_Types_Mutation_Response>;
  /** delete single row from the table: "status_types" */
  delete_status_types_by_pk?: Maybe<Status_Types>;
  /** delete data from the table: "tags" */
  delete_tags?: Maybe<Tags_Mutation_Response>;
  /** delete single row from the table: "tags" */
  delete_tags_by_pk?: Maybe<Tags>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "line_items" */
  insert_line_items?: Maybe<Line_Items_Mutation_Response>;
  /** insert a single row into the table: "line_items" */
  insert_line_items_one?: Maybe<Line_Items>;
  /** insert data into the table: "organization_users" */
  insert_organization_users?: Maybe<Organization_Users_Mutation_Response>;
  /** insert a single row into the table: "organization_users" */
  insert_organization_users_one?: Maybe<Organization_Users>;
  /** insert data into the table: "organizations" */
  insert_organizations?: Maybe<Organizations_Mutation_Response>;
  /** insert a single row into the table: "organizations" */
  insert_organizations_one?: Maybe<Organizations>;
  /** insert data into the table: "post_reaction_types" */
  insert_post_reaction_types?: Maybe<Post_Reaction_Types_Mutation_Response>;
  /** insert a single row into the table: "post_reaction_types" */
  insert_post_reaction_types_one?: Maybe<Post_Reaction_Types>;
  /** insert data into the table: "post_reactions" */
  insert_post_reactions?: Maybe<Post_Reactions_Mutation_Response>;
  /** insert a single row into the table: "post_reactions" */
  insert_post_reactions_one?: Maybe<Post_Reactions>;
  /** insert data into the table: "post_tags" */
  insert_post_tags?: Maybe<Post_Tags_Mutation_Response>;
  /** insert a single row into the table: "post_tags" */
  insert_post_tags_one?: Maybe<Post_Tags>;
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>;
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>;
  /** insert data into the table: "status_types" */
  insert_status_types?: Maybe<Status_Types_Mutation_Response>;
  /** insert a single row into the table: "status_types" */
  insert_status_types_one?: Maybe<Status_Types>;
  /** insert data into the table: "tags" */
  insert_tags?: Maybe<Tags_Mutation_Response>;
  /** insert a single row into the table: "tags" */
  insert_tags_one?: Maybe<Tags>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "line_items" */
  update_line_items?: Maybe<Line_Items_Mutation_Response>;
  /** update single row of the table: "line_items" */
  update_line_items_by_pk?: Maybe<Line_Items>;
  /** update multiples rows of table: "line_items" */
  update_line_items_many?: Maybe<Array<Maybe<Line_Items_Mutation_Response>>>;
  /** update data of the table: "organization_users" */
  update_organization_users?: Maybe<Organization_Users_Mutation_Response>;
  /** update single row of the table: "organization_users" */
  update_organization_users_by_pk?: Maybe<Organization_Users>;
  /** update multiples rows of table: "organization_users" */
  update_organization_users_many?: Maybe<Array<Maybe<Organization_Users_Mutation_Response>>>;
  /** update data of the table: "organizations" */
  update_organizations?: Maybe<Organizations_Mutation_Response>;
  /** update single row of the table: "organizations" */
  update_organizations_by_pk?: Maybe<Organizations>;
  /** update multiples rows of table: "organizations" */
  update_organizations_many?: Maybe<Array<Maybe<Organizations_Mutation_Response>>>;
  /** update data of the table: "post_reaction_types" */
  update_post_reaction_types?: Maybe<Post_Reaction_Types_Mutation_Response>;
  /** update single row of the table: "post_reaction_types" */
  update_post_reaction_types_by_pk?: Maybe<Post_Reaction_Types>;
  /** update multiples rows of table: "post_reaction_types" */
  update_post_reaction_types_many?: Maybe<Array<Maybe<Post_Reaction_Types_Mutation_Response>>>;
  /** update data of the table: "post_reactions" */
  update_post_reactions?: Maybe<Post_Reactions_Mutation_Response>;
  /** update single row of the table: "post_reactions" */
  update_post_reactions_by_pk?: Maybe<Post_Reactions>;
  /** update multiples rows of table: "post_reactions" */
  update_post_reactions_many?: Maybe<Array<Maybe<Post_Reactions_Mutation_Response>>>;
  /** update data of the table: "post_tags" */
  update_post_tags?: Maybe<Post_Tags_Mutation_Response>;
  /** update single row of the table: "post_tags" */
  update_post_tags_by_pk?: Maybe<Post_Tags>;
  /** update multiples rows of table: "post_tags" */
  update_post_tags_many?: Maybe<Array<Maybe<Post_Tags_Mutation_Response>>>;
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>;
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>;
  /** update multiples rows of table: "posts" */
  update_posts_many?: Maybe<Array<Maybe<Posts_Mutation_Response>>>;
  /** update data of the table: "status_types" */
  update_status_types?: Maybe<Status_Types_Mutation_Response>;
  /** update single row of the table: "status_types" */
  update_status_types_by_pk?: Maybe<Status_Types>;
  /** update multiples rows of table: "status_types" */
  update_status_types_many?: Maybe<Array<Maybe<Status_Types_Mutation_Response>>>;
  /** update data of the table: "tags" */
  update_tags?: Maybe<Tags_Mutation_Response>;
  /** update single row of the table: "tags" */
  update_tags_by_pk?: Maybe<Tags>;
  /** update multiples rows of table: "tags" */
  update_tags_many?: Maybe<Array<Maybe<Tags_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Line_ItemsArgs = {
  where: Line_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Line_Items_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Organization_UsersArgs = {
  where: Organization_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OrganizationsArgs = {
  where: Organizations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organizations_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Post_Reaction_TypesArgs = {
  where: Post_Reaction_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Reaction_Types_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Post_ReactionsArgs = {
  where: Post_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Reactions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Post_TagsArgs = {
  where: Post_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Tags_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Posts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Status_TypesArgs = {
  where: Status_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Status_Types_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TagsArgs = {
  where: Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tags_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Line_ItemsArgs = {
  objects: Array<Line_Items_Insert_Input>;
  on_conflict?: InputMaybe<Line_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Line_Items_OneArgs = {
  object: Line_Items_Insert_Input;
  on_conflict?: InputMaybe<Line_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_UsersArgs = {
  objects: Array<Organization_Users_Insert_Input>;
  on_conflict?: InputMaybe<Organization_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_Users_OneArgs = {
  object: Organization_Users_Insert_Input;
  on_conflict?: InputMaybe<Organization_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrganizationsArgs = {
  objects: Array<Organizations_Insert_Input>;
  on_conflict?: InputMaybe<Organizations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organizations_OneArgs = {
  object: Organizations_Insert_Input;
  on_conflict?: InputMaybe<Organizations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Reaction_TypesArgs = {
  objects: Array<Post_Reaction_Types_Insert_Input>;
  on_conflict?: InputMaybe<Post_Reaction_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Reaction_Types_OneArgs = {
  object: Post_Reaction_Types_Insert_Input;
  on_conflict?: InputMaybe<Post_Reaction_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_ReactionsArgs = {
  objects: Array<Post_Reactions_Insert_Input>;
  on_conflict?: InputMaybe<Post_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Reactions_OneArgs = {
  object: Post_Reactions_Insert_Input;
  on_conflict?: InputMaybe<Post_Reactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_TagsArgs = {
  objects: Array<Post_Tags_Insert_Input>;
  on_conflict?: InputMaybe<Post_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Tags_OneArgs = {
  object: Post_Tags_Insert_Input;
  on_conflict?: InputMaybe<Post_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>;
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Posts_OneArgs = {
  object: Posts_Insert_Input;
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Status_TypesArgs = {
  objects: Array<Status_Types_Insert_Input>;
  on_conflict?: InputMaybe<Status_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Status_Types_OneArgs = {
  object: Status_Types_Insert_Input;
  on_conflict?: InputMaybe<Status_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TagsArgs = {
  objects: Array<Tags_Insert_Input>;
  on_conflict?: InputMaybe<Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tags_OneArgs = {
  object: Tags_Insert_Input;
  on_conflict?: InputMaybe<Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Line_ItemsArgs = {
  _inc?: InputMaybe<Line_Items_Inc_Input>;
  _set?: InputMaybe<Line_Items_Set_Input>;
  where: Line_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Line_Items_By_PkArgs = {
  _inc?: InputMaybe<Line_Items_Inc_Input>;
  _set?: InputMaybe<Line_Items_Set_Input>;
  pk_columns: Line_Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Line_Items_ManyArgs = {
  updates: Array<Line_Items_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_UsersArgs = {
  _set?: InputMaybe<Organization_Users_Set_Input>;
  where: Organization_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Users_By_PkArgs = {
  _set?: InputMaybe<Organization_Users_Set_Input>;
  pk_columns: Organization_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_Users_ManyArgs = {
  updates: Array<Organization_Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrganizationsArgs = {
  _set?: InputMaybe<Organizations_Set_Input>;
  where: Organizations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organizations_By_PkArgs = {
  _set?: InputMaybe<Organizations_Set_Input>;
  pk_columns: Organizations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organizations_ManyArgs = {
  updates: Array<Organizations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Reaction_TypesArgs = {
  _set?: InputMaybe<Post_Reaction_Types_Set_Input>;
  where: Post_Reaction_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Reaction_Types_By_PkArgs = {
  _set?: InputMaybe<Post_Reaction_Types_Set_Input>;
  pk_columns: Post_Reaction_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Reaction_Types_ManyArgs = {
  updates: Array<Post_Reaction_Types_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Post_ReactionsArgs = {
  _set?: InputMaybe<Post_Reactions_Set_Input>;
  where: Post_Reactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Reactions_By_PkArgs = {
  _set?: InputMaybe<Post_Reactions_Set_Input>;
  pk_columns: Post_Reactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Reactions_ManyArgs = {
  updates: Array<Post_Reactions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Post_TagsArgs = {
  _set?: InputMaybe<Post_Tags_Set_Input>;
  where: Post_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Tags_By_PkArgs = {
  _set?: InputMaybe<Post_Tags_Set_Input>;
  pk_columns: Post_Tags_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Tags_ManyArgs = {
  updates: Array<Post_Tags_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
  _inc?: InputMaybe<Posts_Inc_Input>;
  _set?: InputMaybe<Posts_Set_Input>;
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Posts_By_PkArgs = {
  _inc?: InputMaybe<Posts_Inc_Input>;
  _set?: InputMaybe<Posts_Set_Input>;
  pk_columns: Posts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Posts_ManyArgs = {
  updates: Array<Posts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Status_TypesArgs = {
  _set?: InputMaybe<Status_Types_Set_Input>;
  where: Status_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Status_Types_By_PkArgs = {
  _set?: InputMaybe<Status_Types_Set_Input>;
  pk_columns: Status_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Status_Types_ManyArgs = {
  updates: Array<Status_Types_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TagsArgs = {
  _set?: InputMaybe<Tags_Set_Input>;
  where: Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tags_By_PkArgs = {
  _set?: InputMaybe<Tags_Set_Input>;
  pk_columns: Tags_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tags_ManyArgs = {
  updates: Array<Tags_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "organization_users" */
export type Organization_Users = {
  __typename?: 'organization_users';
  id: Scalars['uuid']['output'];
  /** An array relationship */
  members: Array<Users>;
  /** An aggregate relationship */
  members_aggregate: Users_Aggregate;
  organization_id: Scalars['String']['output'];
  user_id: Scalars['String']['output'];
};


/** columns and relationships of "organization_users" */
export type Organization_UsersMembersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "organization_users" */
export type Organization_UsersMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "organization_users" */
export type Organization_Users_Aggregate = {
  __typename?: 'organization_users_aggregate';
  aggregate?: Maybe<Organization_Users_Aggregate_Fields>;
  nodes: Array<Organization_Users>;
};

/** aggregate fields of "organization_users" */
export type Organization_Users_Aggregate_Fields = {
  __typename?: 'organization_users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Organization_Users_Max_Fields>;
  min?: Maybe<Organization_Users_Min_Fields>;
};


/** aggregate fields of "organization_users" */
export type Organization_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "organization_users". All fields are combined with a logical 'AND'. */
export type Organization_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Users_Bool_Exp>>;
  _not?: InputMaybe<Organization_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Users_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  members?: InputMaybe<Users_Bool_Exp>;
  members_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
  organization_id?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization_users" */
export enum Organization_Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  TeamUsersPkey = 'team_users_pkey'
}

/** input type for inserting data into table "organization_users" */
export type Organization_Users_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  members?: InputMaybe<Users_Arr_Rel_Insert_Input>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Organization_Users_Max_Fields = {
  __typename?: 'organization_users_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Organization_Users_Min_Fields = {
  __typename?: 'organization_users_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "organization_users" */
export type Organization_Users_Mutation_Response = {
  __typename?: 'organization_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization_Users>;
};

/** input type for inserting object relation for remote table "organization_users" */
export type Organization_Users_Obj_Rel_Insert_Input = {
  data: Organization_Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Organization_Users_On_Conflict>;
};

/** on_conflict condition type for table "organization_users" */
export type Organization_Users_On_Conflict = {
  constraint: Organization_Users_Constraint;
  update_columns?: Array<Organization_Users_Update_Column>;
  where?: InputMaybe<Organization_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "organization_users". */
export type Organization_Users_Order_By = {
  id?: InputMaybe<Order_By>;
  members_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
  organization_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organization_users */
export type Organization_Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "organization_users" */
export enum Organization_Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "organization_users" */
export type Organization_Users_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "organization_users" */
export type Organization_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Users_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "organization_users" */
export enum Organization_Users_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  UserId = 'user_id'
}

export type Organization_Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Users_Bool_Exp;
};

/** columns and relationships of "organizations" */
export type Organizations = {
  __typename?: 'organizations';
  created_at: Scalars['timestamptz']['output'];
  created_by: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  organization_users?: Maybe<Organization_Users>;
};

/** aggregated selection of "organizations" */
export type Organizations_Aggregate = {
  __typename?: 'organizations_aggregate';
  aggregate?: Maybe<Organizations_Aggregate_Fields>;
  nodes: Array<Organizations>;
};

export type Organizations_Aggregate_Bool_Exp = {
  count?: InputMaybe<Organizations_Aggregate_Bool_Exp_Count>;
};

export type Organizations_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Organizations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Organizations_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "organizations" */
export type Organizations_Aggregate_Fields = {
  __typename?: 'organizations_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Organizations_Max_Fields>;
  min?: Maybe<Organizations_Min_Fields>;
};


/** aggregate fields of "organizations" */
export type Organizations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organizations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "organizations" */
export type Organizations_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Organizations_Max_Order_By>;
  min?: InputMaybe<Organizations_Min_Order_By>;
};

/** input type for inserting array relation for remote table "organizations" */
export type Organizations_Arr_Rel_Insert_Input = {
  data: Array<Organizations_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Organizations_On_Conflict>;
};

/** Boolean expression to filter rows from the table "organizations". All fields are combined with a logical 'AND'. */
export type Organizations_Bool_Exp = {
  _and?: InputMaybe<Array<Organizations_Bool_Exp>>;
  _not?: InputMaybe<Organizations_Bool_Exp>;
  _or?: InputMaybe<Array<Organizations_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organization_users?: InputMaybe<Organization_Users_Bool_Exp>;
};

/** unique or primary key constraints on table "organizations" */
export enum Organizations_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrganizationsPkey = 'organizations_pkey'
}

/** input type for inserting data into table "organizations" */
export type Organizations_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization_users?: InputMaybe<Organization_Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Organizations_Max_Fields = {
  __typename?: 'organizations_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "organizations" */
export type Organizations_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Organizations_Min_Fields = {
  __typename?: 'organizations_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "organizations" */
export type Organizations_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "organizations" */
export type Organizations_Mutation_Response = {
  __typename?: 'organizations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organizations>;
};

/** input type for inserting object relation for remote table "organizations" */
export type Organizations_Obj_Rel_Insert_Input = {
  data: Organizations_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Organizations_On_Conflict>;
};

/** on_conflict condition type for table "organizations" */
export type Organizations_On_Conflict = {
  constraint: Organizations_Constraint;
  update_columns?: Array<Organizations_Update_Column>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};

/** Ordering options when selecting data from "organizations". */
export type Organizations_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organization_users?: InputMaybe<Organization_Users_Order_By>;
};

/** primary key columns input for table: organizations */
export type Organizations_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "organizations" */
export enum Organizations_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "organizations" */
export type Organizations_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "organizations" */
export type Organizations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organizations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organizations_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "organizations" */
export enum Organizations_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Organizations_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organizations_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organizations_Bool_Exp;
};

/** columns and relationships of "post_reaction_types" */
export type Post_Reaction_Types = {
  __typename?: 'post_reaction_types';
  id: Scalars['String']['output'];
  /** An array relationship */
  post_reactions: Array<Post_Reactions>;
  /** An aggregate relationship */
  post_reactions_aggregate: Post_Reactions_Aggregate;
};


/** columns and relationships of "post_reaction_types" */
export type Post_Reaction_TypesPost_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<Post_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Reactions_Order_By>>;
  where?: InputMaybe<Post_Reactions_Bool_Exp>;
};


/** columns and relationships of "post_reaction_types" */
export type Post_Reaction_TypesPost_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Reactions_Order_By>>;
  where?: InputMaybe<Post_Reactions_Bool_Exp>;
};

/** aggregated selection of "post_reaction_types" */
export type Post_Reaction_Types_Aggregate = {
  __typename?: 'post_reaction_types_aggregate';
  aggregate?: Maybe<Post_Reaction_Types_Aggregate_Fields>;
  nodes: Array<Post_Reaction_Types>;
};

/** aggregate fields of "post_reaction_types" */
export type Post_Reaction_Types_Aggregate_Fields = {
  __typename?: 'post_reaction_types_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Post_Reaction_Types_Max_Fields>;
  min?: Maybe<Post_Reaction_Types_Min_Fields>;
};


/** aggregate fields of "post_reaction_types" */
export type Post_Reaction_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Post_Reaction_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "post_reaction_types". All fields are combined with a logical 'AND'. */
export type Post_Reaction_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Post_Reaction_Types_Bool_Exp>>;
  _not?: InputMaybe<Post_Reaction_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Reaction_Types_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  post_reactions?: InputMaybe<Post_Reactions_Bool_Exp>;
  post_reactions_aggregate?: InputMaybe<Post_Reactions_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "post_reaction_types" */
export enum Post_Reaction_Types_Constraint {
  /** unique or primary key constraint on columns "id" */
  PostReactionTypesPkey = 'post_reaction_types_pkey'
}

export enum Post_Reaction_Types_Enum {
  ThumbsDown = 'THUMBS_DOWN',
  ThumbsUp = 'THUMBS_UP'
}

/** Boolean expression to compare columns of type "post_reaction_types_enum". All fields are combined with logical 'AND'. */
export type Post_Reaction_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Post_Reaction_Types_Enum>;
  _in?: InputMaybe<Array<Post_Reaction_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Post_Reaction_Types_Enum>;
  _nin?: InputMaybe<Array<Post_Reaction_Types_Enum>>;
};

/** input type for inserting data into table "post_reaction_types" */
export type Post_Reaction_Types_Insert_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  post_reactions?: InputMaybe<Post_Reactions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Post_Reaction_Types_Max_Fields = {
  __typename?: 'post_reaction_types_max_fields';
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Post_Reaction_Types_Min_Fields = {
  __typename?: 'post_reaction_types_min_fields';
  id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "post_reaction_types" */
export type Post_Reaction_Types_Mutation_Response = {
  __typename?: 'post_reaction_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Post_Reaction_Types>;
};

/** input type for inserting object relation for remote table "post_reaction_types" */
export type Post_Reaction_Types_Obj_Rel_Insert_Input = {
  data: Post_Reaction_Types_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_Reaction_Types_On_Conflict>;
};

/** on_conflict condition type for table "post_reaction_types" */
export type Post_Reaction_Types_On_Conflict = {
  constraint: Post_Reaction_Types_Constraint;
  update_columns?: Array<Post_Reaction_Types_Update_Column>;
  where?: InputMaybe<Post_Reaction_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "post_reaction_types". */
export type Post_Reaction_Types_Order_By = {
  id?: InputMaybe<Order_By>;
  post_reactions_aggregate?: InputMaybe<Post_Reactions_Aggregate_Order_By>;
};

/** primary key columns input for table: post_reaction_types */
export type Post_Reaction_Types_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "post_reaction_types" */
export enum Post_Reaction_Types_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "post_reaction_types" */
export type Post_Reaction_Types_Set_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "post_reaction_types" */
export type Post_Reaction_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Post_Reaction_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Post_Reaction_Types_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "post_reaction_types" */
export enum Post_Reaction_Types_Update_Column {
  /** column name */
  Id = 'id'
}

export type Post_Reaction_Types_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Reaction_Types_Set_Input>;
  /** filter the rows which have to be updated */
  where: Post_Reaction_Types_Bool_Exp;
};

/** columns and relationships of "post_reactions" */
export type Post_Reactions = {
  __typename?: 'post_reactions';
  author_id: Scalars['String']['output'];
  /** An object relationship */
  creator?: Maybe<Users>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  post?: Maybe<Posts>;
  post_id: Scalars['uuid']['output'];
  /** An object relationship */
  reaction_type?: Maybe<Post_Reaction_Types>;
  type: Post_Reaction_Types_Enum;
};

/** aggregated selection of "post_reactions" */
export type Post_Reactions_Aggregate = {
  __typename?: 'post_reactions_aggregate';
  aggregate?: Maybe<Post_Reactions_Aggregate_Fields>;
  nodes: Array<Post_Reactions>;
};

export type Post_Reactions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Post_Reactions_Aggregate_Bool_Exp_Count>;
};

export type Post_Reactions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Post_Reactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Post_Reactions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "post_reactions" */
export type Post_Reactions_Aggregate_Fields = {
  __typename?: 'post_reactions_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Post_Reactions_Max_Fields>;
  min?: Maybe<Post_Reactions_Min_Fields>;
};


/** aggregate fields of "post_reactions" */
export type Post_Reactions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Post_Reactions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "post_reactions" */
export type Post_Reactions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Post_Reactions_Max_Order_By>;
  min?: InputMaybe<Post_Reactions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "post_reactions" */
export type Post_Reactions_Arr_Rel_Insert_Input = {
  data: Array<Post_Reactions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_Reactions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "post_reactions". All fields are combined with a logical 'AND'. */
export type Post_Reactions_Bool_Exp = {
  _and?: InputMaybe<Array<Post_Reactions_Bool_Exp>>;
  _not?: InputMaybe<Post_Reactions_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Reactions_Bool_Exp>>;
  author_id?: InputMaybe<String_Comparison_Exp>;
  creator?: InputMaybe<Users_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  post?: InputMaybe<Posts_Bool_Exp>;
  post_id?: InputMaybe<Uuid_Comparison_Exp>;
  reaction_type?: InputMaybe<Post_Reaction_Types_Bool_Exp>;
  type?: InputMaybe<Post_Reaction_Types_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "post_reactions" */
export enum Post_Reactions_Constraint {
  /** unique or primary key constraint on columns "post_id", "author_id" */
  PostReactionsAuthorIdPostIdKey = 'post_reactions_author_id_post_id_key',
  /** unique or primary key constraint on columns "id" */
  PostReactionsPkey = 'post_reactions_pkey'
}

/** input type for inserting data into table "post_reactions" */
export type Post_Reactions_Insert_Input = {
  author_id?: InputMaybe<Scalars['String']['input']>;
  creator?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  post?: InputMaybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: InputMaybe<Scalars['uuid']['input']>;
  reaction_type?: InputMaybe<Post_Reaction_Types_Obj_Rel_Insert_Input>;
  type?: InputMaybe<Post_Reaction_Types_Enum>;
};

/** aggregate max on columns */
export type Post_Reactions_Max_Fields = {
  __typename?: 'post_reactions_max_fields';
  author_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  post_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "post_reactions" */
export type Post_Reactions_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Reactions_Min_Fields = {
  __typename?: 'post_reactions_min_fields';
  author_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  post_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "post_reactions" */
export type Post_Reactions_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "post_reactions" */
export type Post_Reactions_Mutation_Response = {
  __typename?: 'post_reactions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Post_Reactions>;
};

/** on_conflict condition type for table "post_reactions" */
export type Post_Reactions_On_Conflict = {
  constraint: Post_Reactions_Constraint;
  update_columns?: Array<Post_Reactions_Update_Column>;
  where?: InputMaybe<Post_Reactions_Bool_Exp>;
};

/** Ordering options when selecting data from "post_reactions". */
export type Post_Reactions_Order_By = {
  author_id?: InputMaybe<Order_By>;
  creator?: InputMaybe<Users_Order_By>;
  id?: InputMaybe<Order_By>;
  post?: InputMaybe<Posts_Order_By>;
  post_id?: InputMaybe<Order_By>;
  reaction_type?: InputMaybe<Post_Reaction_Types_Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: post_reactions */
export type Post_Reactions_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "post_reactions" */
export enum Post_Reactions_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "post_reactions" */
export type Post_Reactions_Set_Input = {
  author_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  post_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Post_Reaction_Types_Enum>;
};

/** Streaming cursor of the table "post_reactions" */
export type Post_Reactions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Post_Reactions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Post_Reactions_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  post_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Post_Reaction_Types_Enum>;
};

/** update columns of table "post_reactions" */
export enum Post_Reactions_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Type = 'type'
}

export type Post_Reactions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Reactions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Post_Reactions_Bool_Exp;
};

/** columns and relationships of "post_tags" */
export type Post_Tags = {
  __typename?: 'post_tags';
  id: Scalars['uuid']['output'];
  /** An object relationship */
  post: Posts;
  post_id: Scalars['uuid']['output'];
  /** An object relationship */
  tag: Tags;
  tag_id: Scalars['String']['output'];
};

/** aggregated selection of "post_tags" */
export type Post_Tags_Aggregate = {
  __typename?: 'post_tags_aggregate';
  aggregate?: Maybe<Post_Tags_Aggregate_Fields>;
  nodes: Array<Post_Tags>;
};

export type Post_Tags_Aggregate_Bool_Exp = {
  count?: InputMaybe<Post_Tags_Aggregate_Bool_Exp_Count>;
};

export type Post_Tags_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Post_Tags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Post_Tags_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "post_tags" */
export type Post_Tags_Aggregate_Fields = {
  __typename?: 'post_tags_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Post_Tags_Max_Fields>;
  min?: Maybe<Post_Tags_Min_Fields>;
};


/** aggregate fields of "post_tags" */
export type Post_Tags_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Post_Tags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "post_tags" */
export type Post_Tags_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Post_Tags_Max_Order_By>;
  min?: InputMaybe<Post_Tags_Min_Order_By>;
};

/** input type for inserting array relation for remote table "post_tags" */
export type Post_Tags_Arr_Rel_Insert_Input = {
  data: Array<Post_Tags_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_Tags_On_Conflict>;
};

/** Boolean expression to filter rows from the table "post_tags". All fields are combined with a logical 'AND'. */
export type Post_Tags_Bool_Exp = {
  _and?: InputMaybe<Array<Post_Tags_Bool_Exp>>;
  _not?: InputMaybe<Post_Tags_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Tags_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  post?: InputMaybe<Posts_Bool_Exp>;
  post_id?: InputMaybe<Uuid_Comparison_Exp>;
  tag?: InputMaybe<Tags_Bool_Exp>;
  tag_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "post_tags" */
export enum Post_Tags_Constraint {
  /** unique or primary key constraint on columns "id" */
  PostTagsPkey = 'post_tags_pkey'
}

/** input type for inserting data into table "post_tags" */
export type Post_Tags_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  post?: InputMaybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: InputMaybe<Scalars['uuid']['input']>;
  tag?: InputMaybe<Tags_Obj_Rel_Insert_Input>;
  tag_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Post_Tags_Max_Fields = {
  __typename?: 'post_tags_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  post_id?: Maybe<Scalars['uuid']['output']>;
  tag_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "post_tags" */
export type Post_Tags_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Tags_Min_Fields = {
  __typename?: 'post_tags_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  post_id?: Maybe<Scalars['uuid']['output']>;
  tag_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "post_tags" */
export type Post_Tags_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "post_tags" */
export type Post_Tags_Mutation_Response = {
  __typename?: 'post_tags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Post_Tags>;
};

/** on_conflict condition type for table "post_tags" */
export type Post_Tags_On_Conflict = {
  constraint: Post_Tags_Constraint;
  update_columns?: Array<Post_Tags_Update_Column>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};

/** Ordering options when selecting data from "post_tags". */
export type Post_Tags_Order_By = {
  id?: InputMaybe<Order_By>;
  post?: InputMaybe<Posts_Order_By>;
  post_id?: InputMaybe<Order_By>;
  tag?: InputMaybe<Tags_Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: post_tags */
export type Post_Tags_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "post_tags" */
export enum Post_Tags_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  TagId = 'tag_id'
}

/** input type for updating data in table "post_tags" */
export type Post_Tags_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  post_id?: InputMaybe<Scalars['uuid']['input']>;
  tag_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "post_tags" */
export type Post_Tags_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Post_Tags_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Post_Tags_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  post_id?: InputMaybe<Scalars['uuid']['input']>;
  tag_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "post_tags" */
export enum Post_Tags_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  TagId = 'tag_id'
}

export type Post_Tags_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Tags_Set_Input>;
  /** filter the rows which have to be updated */
  where: Post_Tags_Bool_Exp;
};

/** columns and relationships of "posts" */
export type Posts = {
  __typename?: 'posts';
  actual_delivery_date?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  author?: Maybe<Users>;
  billing_so?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  carrier?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  creator_id: Scalars['String']['output'];
  customer_facing_po_document?: Maybe<Scalars['String']['output']>;
  delivery_date?: Maybe<Scalars['timestamptz']['output']>;
  delivery_instructions?: Maybe<Scalars['String']['output']>;
  destination_address?: Maybe<Scalars['String']['output']>;
  destination_poc?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  international_frt_resale?: Maybe<Scalars['numeric']['output']>;
  ior_compliance_resale?: Maybe<Scalars['numeric']['output']>;
  /** An array relationship */
  line_items: Array<Line_Items>;
  /** An aggregate relationship */
  line_items_aggregate: Line_Items_Aggregate;
  org_id: Scalars['String']['output'];
  /** An object relationship */
  organization?: Maybe<Organizations>;
  pickup_address?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  post_reactions: Array<Post_Reactions>;
  /** An aggregate relationship */
  post_reactions_aggregate: Post_Reactions_Aggregate;
  /** An array relationship */
  post_tags: Array<Post_Tags>;
  /** An aggregate relationship */
  post_tags_aggregate: Post_Tags_Aggregate;
  proof_of_delivery_document?: Maybe<Scalars['String']['output']>;
  psr?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status_Types_Enum>;
  ticket_number?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  tracking_number?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "posts" */
export type PostsLine_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Line_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Line_Items_Order_By>>;
  where?: InputMaybe<Line_Items_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsLine_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Line_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Line_Items_Order_By>>;
  where?: InputMaybe<Line_Items_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsPost_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<Post_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Reactions_Order_By>>;
  where?: InputMaybe<Post_Reactions_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsPost_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Reactions_Order_By>>;
  where?: InputMaybe<Post_Reactions_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsPost_TagsArgs = {
  distinct_on?: InputMaybe<Array<Post_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Tags_Order_By>>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsPost_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Tags_Order_By>>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
  __typename?: 'posts_aggregate';
  aggregate?: Maybe<Posts_Aggregate_Fields>;
  nodes: Array<Posts>;
};

export type Posts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Posts_Aggregate_Bool_Exp_Count>;
};

export type Posts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Posts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "posts" */
export type Posts_Aggregate_Fields = {
  __typename?: 'posts_aggregate_fields';
  avg?: Maybe<Posts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Posts_Max_Fields>;
  min?: Maybe<Posts_Min_Fields>;
  stddev?: Maybe<Posts_Stddev_Fields>;
  stddev_pop?: Maybe<Posts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Posts_Stddev_Samp_Fields>;
  sum?: Maybe<Posts_Sum_Fields>;
  var_pop?: Maybe<Posts_Var_Pop_Fields>;
  var_samp?: Maybe<Posts_Var_Samp_Fields>;
  variance?: Maybe<Posts_Variance_Fields>;
};


/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "posts" */
export type Posts_Aggregate_Order_By = {
  avg?: InputMaybe<Posts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Posts_Max_Order_By>;
  min?: InputMaybe<Posts_Min_Order_By>;
  stddev?: InputMaybe<Posts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Posts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Posts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Posts_Sum_Order_By>;
  var_pop?: InputMaybe<Posts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Posts_Var_Samp_Order_By>;
  variance?: InputMaybe<Posts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "posts" */
export type Posts_Arr_Rel_Insert_Input = {
  data: Array<Posts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};

/** aggregate avg on columns */
export type Posts_Avg_Fields = {
  __typename?: 'posts_avg_fields';
  international_frt_resale?: Maybe<Scalars['Float']['output']>;
  ior_compliance_resale?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "posts" */
export type Posts_Avg_Order_By = {
  international_frt_resale?: InputMaybe<Order_By>;
  ior_compliance_resale?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: InputMaybe<Array<Posts_Bool_Exp>>;
  _not?: InputMaybe<Posts_Bool_Exp>;
  _or?: InputMaybe<Array<Posts_Bool_Exp>>;
  actual_delivery_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  author?: InputMaybe<Users_Bool_Exp>;
  billing_so?: InputMaybe<String_Comparison_Exp>;
  body?: InputMaybe<String_Comparison_Exp>;
  carrier?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  creator_id?: InputMaybe<String_Comparison_Exp>;
  customer_facing_po_document?: InputMaybe<String_Comparison_Exp>;
  delivery_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  delivery_instructions?: InputMaybe<String_Comparison_Exp>;
  destination_address?: InputMaybe<String_Comparison_Exp>;
  destination_poc?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  international_frt_resale?: InputMaybe<Numeric_Comparison_Exp>;
  ior_compliance_resale?: InputMaybe<Numeric_Comparison_Exp>;
  line_items?: InputMaybe<Line_Items_Bool_Exp>;
  line_items_aggregate?: InputMaybe<Line_Items_Aggregate_Bool_Exp>;
  org_id?: InputMaybe<String_Comparison_Exp>;
  organization?: InputMaybe<Organizations_Bool_Exp>;
  pickup_address?: InputMaybe<String_Comparison_Exp>;
  post_reactions?: InputMaybe<Post_Reactions_Bool_Exp>;
  post_reactions_aggregate?: InputMaybe<Post_Reactions_Aggregate_Bool_Exp>;
  post_tags?: InputMaybe<Post_Tags_Bool_Exp>;
  post_tags_aggregate?: InputMaybe<Post_Tags_Aggregate_Bool_Exp>;
  proof_of_delivery_document?: InputMaybe<String_Comparison_Exp>;
  psr?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Status_Types_Enum_Comparison_Exp>;
  ticket_number?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  tracking_number?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint on columns "id" */
  PostsPkey = 'posts_pkey'
}

/** input type for incrementing numeric columns in table "posts" */
export type Posts_Inc_Input = {
  international_frt_resale?: InputMaybe<Scalars['numeric']['input']>;
  ior_compliance_resale?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  actual_delivery_date?: InputMaybe<Scalars['timestamptz']['input']>;
  author?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  billing_so?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  carrier?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  creator_id?: InputMaybe<Scalars['String']['input']>;
  customer_facing_po_document?: InputMaybe<Scalars['String']['input']>;
  delivery_date?: InputMaybe<Scalars['timestamptz']['input']>;
  delivery_instructions?: InputMaybe<Scalars['String']['input']>;
  destination_address?: InputMaybe<Scalars['String']['input']>;
  destination_poc?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  international_frt_resale?: InputMaybe<Scalars['numeric']['input']>;
  ior_compliance_resale?: InputMaybe<Scalars['numeric']['input']>;
  line_items?: InputMaybe<Line_Items_Arr_Rel_Insert_Input>;
  org_id?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Organizations_Obj_Rel_Insert_Input>;
  pickup_address?: InputMaybe<Scalars['String']['input']>;
  post_reactions?: InputMaybe<Post_Reactions_Arr_Rel_Insert_Input>;
  post_tags?: InputMaybe<Post_Tags_Arr_Rel_Insert_Input>;
  proof_of_delivery_document?: InputMaybe<Scalars['String']['input']>;
  psr?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status_Types_Enum>;
  ticket_number?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tracking_number?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Posts_Max_Fields = {
  __typename?: 'posts_max_fields';
  actual_delivery_date?: Maybe<Scalars['timestamptz']['output']>;
  billing_so?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  carrier?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  creator_id?: Maybe<Scalars['String']['output']>;
  customer_facing_po_document?: Maybe<Scalars['String']['output']>;
  delivery_date?: Maybe<Scalars['timestamptz']['output']>;
  delivery_instructions?: Maybe<Scalars['String']['output']>;
  destination_address?: Maybe<Scalars['String']['output']>;
  destination_poc?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  international_frt_resale?: Maybe<Scalars['numeric']['output']>;
  ior_compliance_resale?: Maybe<Scalars['numeric']['output']>;
  org_id?: Maybe<Scalars['String']['output']>;
  pickup_address?: Maybe<Scalars['String']['output']>;
  proof_of_delivery_document?: Maybe<Scalars['String']['output']>;
  psr?: Maybe<Scalars['String']['output']>;
  ticket_number?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  tracking_number?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "posts" */
export type Posts_Max_Order_By = {
  actual_delivery_date?: InputMaybe<Order_By>;
  billing_so?: InputMaybe<Order_By>;
  body?: InputMaybe<Order_By>;
  carrier?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  customer_facing_po_document?: InputMaybe<Order_By>;
  delivery_date?: InputMaybe<Order_By>;
  delivery_instructions?: InputMaybe<Order_By>;
  destination_address?: InputMaybe<Order_By>;
  destination_poc?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  international_frt_resale?: InputMaybe<Order_By>;
  ior_compliance_resale?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
  pickup_address?: InputMaybe<Order_By>;
  proof_of_delivery_document?: InputMaybe<Order_By>;
  psr?: InputMaybe<Order_By>;
  ticket_number?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  tracking_number?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Posts_Min_Fields = {
  __typename?: 'posts_min_fields';
  actual_delivery_date?: Maybe<Scalars['timestamptz']['output']>;
  billing_so?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  carrier?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  creator_id?: Maybe<Scalars['String']['output']>;
  customer_facing_po_document?: Maybe<Scalars['String']['output']>;
  delivery_date?: Maybe<Scalars['timestamptz']['output']>;
  delivery_instructions?: Maybe<Scalars['String']['output']>;
  destination_address?: Maybe<Scalars['String']['output']>;
  destination_poc?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  international_frt_resale?: Maybe<Scalars['numeric']['output']>;
  ior_compliance_resale?: Maybe<Scalars['numeric']['output']>;
  org_id?: Maybe<Scalars['String']['output']>;
  pickup_address?: Maybe<Scalars['String']['output']>;
  proof_of_delivery_document?: Maybe<Scalars['String']['output']>;
  psr?: Maybe<Scalars['String']['output']>;
  ticket_number?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  tracking_number?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "posts" */
export type Posts_Min_Order_By = {
  actual_delivery_date?: InputMaybe<Order_By>;
  billing_so?: InputMaybe<Order_By>;
  body?: InputMaybe<Order_By>;
  carrier?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  customer_facing_po_document?: InputMaybe<Order_By>;
  delivery_date?: InputMaybe<Order_By>;
  delivery_instructions?: InputMaybe<Order_By>;
  destination_address?: InputMaybe<Order_By>;
  destination_poc?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  international_frt_resale?: InputMaybe<Order_By>;
  ior_compliance_resale?: InputMaybe<Order_By>;
  org_id?: InputMaybe<Order_By>;
  pickup_address?: InputMaybe<Order_By>;
  proof_of_delivery_document?: InputMaybe<Order_By>;
  psr?: InputMaybe<Order_By>;
  ticket_number?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  tracking_number?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
  __typename?: 'posts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Posts>;
};

/** input type for inserting object relation for remote table "posts" */
export type Posts_Obj_Rel_Insert_Input = {
  data: Posts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};

/** on_conflict condition type for table "posts" */
export type Posts_On_Conflict = {
  constraint: Posts_Constraint;
  update_columns?: Array<Posts_Update_Column>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "posts". */
export type Posts_Order_By = {
  actual_delivery_date?: InputMaybe<Order_By>;
  author?: InputMaybe<Users_Order_By>;
  billing_so?: InputMaybe<Order_By>;
  body?: InputMaybe<Order_By>;
  carrier?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  customer_facing_po_document?: InputMaybe<Order_By>;
  delivery_date?: InputMaybe<Order_By>;
  delivery_instructions?: InputMaybe<Order_By>;
  destination_address?: InputMaybe<Order_By>;
  destination_poc?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  international_frt_resale?: InputMaybe<Order_By>;
  ior_compliance_resale?: InputMaybe<Order_By>;
  line_items_aggregate?: InputMaybe<Line_Items_Aggregate_Order_By>;
  org_id?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organizations_Order_By>;
  pickup_address?: InputMaybe<Order_By>;
  post_reactions_aggregate?: InputMaybe<Post_Reactions_Aggregate_Order_By>;
  post_tags_aggregate?: InputMaybe<Post_Tags_Aggregate_Order_By>;
  proof_of_delivery_document?: InputMaybe<Order_By>;
  psr?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  ticket_number?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  tracking_number?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: posts */
export type Posts_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  ActualDeliveryDate = 'actual_delivery_date',
  /** column name */
  BillingSo = 'billing_so',
  /** column name */
  Body = 'body',
  /** column name */
  Carrier = 'carrier',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  CustomerFacingPoDocument = 'customer_facing_po_document',
  /** column name */
  DeliveryDate = 'delivery_date',
  /** column name */
  DeliveryInstructions = 'delivery_instructions',
  /** column name */
  DestinationAddress = 'destination_address',
  /** column name */
  DestinationPoc = 'destination_poc',
  /** column name */
  Id = 'id',
  /** column name */
  InternationalFrtResale = 'international_frt_resale',
  /** column name */
  IorComplianceResale = 'ior_compliance_resale',
  /** column name */
  OrgId = 'org_id',
  /** column name */
  PickupAddress = 'pickup_address',
  /** column name */
  ProofOfDeliveryDocument = 'proof_of_delivery_document',
  /** column name */
  Psr = 'psr',
  /** column name */
  Status = 'status',
  /** column name */
  TicketNumber = 'ticket_number',
  /** column name */
  Title = 'title',
  /** column name */
  TrackingNumber = 'tracking_number',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  actual_delivery_date?: InputMaybe<Scalars['timestamptz']['input']>;
  billing_so?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  carrier?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  creator_id?: InputMaybe<Scalars['String']['input']>;
  customer_facing_po_document?: InputMaybe<Scalars['String']['input']>;
  delivery_date?: InputMaybe<Scalars['timestamptz']['input']>;
  delivery_instructions?: InputMaybe<Scalars['String']['input']>;
  destination_address?: InputMaybe<Scalars['String']['input']>;
  destination_poc?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  international_frt_resale?: InputMaybe<Scalars['numeric']['input']>;
  ior_compliance_resale?: InputMaybe<Scalars['numeric']['input']>;
  org_id?: InputMaybe<Scalars['String']['input']>;
  pickup_address?: InputMaybe<Scalars['String']['input']>;
  proof_of_delivery_document?: InputMaybe<Scalars['String']['input']>;
  psr?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status_Types_Enum>;
  ticket_number?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tracking_number?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Posts_Stddev_Fields = {
  __typename?: 'posts_stddev_fields';
  international_frt_resale?: Maybe<Scalars['Float']['output']>;
  ior_compliance_resale?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "posts" */
export type Posts_Stddev_Order_By = {
  international_frt_resale?: InputMaybe<Order_By>;
  ior_compliance_resale?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Posts_Stddev_Pop_Fields = {
  __typename?: 'posts_stddev_pop_fields';
  international_frt_resale?: Maybe<Scalars['Float']['output']>;
  ior_compliance_resale?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "posts" */
export type Posts_Stddev_Pop_Order_By = {
  international_frt_resale?: InputMaybe<Order_By>;
  ior_compliance_resale?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Posts_Stddev_Samp_Fields = {
  __typename?: 'posts_stddev_samp_fields';
  international_frt_resale?: Maybe<Scalars['Float']['output']>;
  ior_compliance_resale?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "posts" */
export type Posts_Stddev_Samp_Order_By = {
  international_frt_resale?: InputMaybe<Order_By>;
  ior_compliance_resale?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "posts" */
export type Posts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Posts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Posts_Stream_Cursor_Value_Input = {
  actual_delivery_date?: InputMaybe<Scalars['timestamptz']['input']>;
  billing_so?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  carrier?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  creator_id?: InputMaybe<Scalars['String']['input']>;
  customer_facing_po_document?: InputMaybe<Scalars['String']['input']>;
  delivery_date?: InputMaybe<Scalars['timestamptz']['input']>;
  delivery_instructions?: InputMaybe<Scalars['String']['input']>;
  destination_address?: InputMaybe<Scalars['String']['input']>;
  destination_poc?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  international_frt_resale?: InputMaybe<Scalars['numeric']['input']>;
  ior_compliance_resale?: InputMaybe<Scalars['numeric']['input']>;
  org_id?: InputMaybe<Scalars['String']['input']>;
  pickup_address?: InputMaybe<Scalars['String']['input']>;
  proof_of_delivery_document?: InputMaybe<Scalars['String']['input']>;
  psr?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status_Types_Enum>;
  ticket_number?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tracking_number?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Posts_Sum_Fields = {
  __typename?: 'posts_sum_fields';
  international_frt_resale?: Maybe<Scalars['numeric']['output']>;
  ior_compliance_resale?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "posts" */
export type Posts_Sum_Order_By = {
  international_frt_resale?: InputMaybe<Order_By>;
  ior_compliance_resale?: InputMaybe<Order_By>;
};

/** update columns of table "posts" */
export enum Posts_Update_Column {
  /** column name */
  ActualDeliveryDate = 'actual_delivery_date',
  /** column name */
  BillingSo = 'billing_so',
  /** column name */
  Body = 'body',
  /** column name */
  Carrier = 'carrier',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatorId = 'creator_id',
  /** column name */
  CustomerFacingPoDocument = 'customer_facing_po_document',
  /** column name */
  DeliveryDate = 'delivery_date',
  /** column name */
  DeliveryInstructions = 'delivery_instructions',
  /** column name */
  DestinationAddress = 'destination_address',
  /** column name */
  DestinationPoc = 'destination_poc',
  /** column name */
  Id = 'id',
  /** column name */
  InternationalFrtResale = 'international_frt_resale',
  /** column name */
  IorComplianceResale = 'ior_compliance_resale',
  /** column name */
  OrgId = 'org_id',
  /** column name */
  PickupAddress = 'pickup_address',
  /** column name */
  ProofOfDeliveryDocument = 'proof_of_delivery_document',
  /** column name */
  Psr = 'psr',
  /** column name */
  Status = 'status',
  /** column name */
  TicketNumber = 'ticket_number',
  /** column name */
  Title = 'title',
  /** column name */
  TrackingNumber = 'tracking_number',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Posts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Posts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Posts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Posts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Posts_Var_Pop_Fields = {
  __typename?: 'posts_var_pop_fields';
  international_frt_resale?: Maybe<Scalars['Float']['output']>;
  ior_compliance_resale?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "posts" */
export type Posts_Var_Pop_Order_By = {
  international_frt_resale?: InputMaybe<Order_By>;
  ior_compliance_resale?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Posts_Var_Samp_Fields = {
  __typename?: 'posts_var_samp_fields';
  international_frt_resale?: Maybe<Scalars['Float']['output']>;
  ior_compliance_resale?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "posts" */
export type Posts_Var_Samp_Order_By = {
  international_frt_resale?: InputMaybe<Order_By>;
  ior_compliance_resale?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Posts_Variance_Fields = {
  __typename?: 'posts_variance_fields';
  international_frt_resale?: Maybe<Scalars['Float']['output']>;
  ior_compliance_resale?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "posts" */
export type Posts_Variance_Order_By = {
  international_frt_resale?: InputMaybe<Order_By>;
  ior_compliance_resale?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  line_items: Array<Line_Items>;
  /** An aggregate relationship */
  line_items_aggregate: Line_Items_Aggregate;
  /** fetch data from the table: "line_items" using primary key columns */
  line_items_by_pk?: Maybe<Line_Items>;
  /** fetch data from the table: "organization_users" */
  organization_users: Array<Organization_Users>;
  /** fetch aggregated fields from the table: "organization_users" */
  organization_users_aggregate: Organization_Users_Aggregate;
  /** fetch data from the table: "organization_users" using primary key columns */
  organization_users_by_pk?: Maybe<Organization_Users>;
  /** An array relationship */
  organizations: Array<Organizations>;
  /** An aggregate relationship */
  organizations_aggregate: Organizations_Aggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  /** fetch data from the table: "post_reaction_types" */
  post_reaction_types: Array<Post_Reaction_Types>;
  /** fetch aggregated fields from the table: "post_reaction_types" */
  post_reaction_types_aggregate: Post_Reaction_Types_Aggregate;
  /** fetch data from the table: "post_reaction_types" using primary key columns */
  post_reaction_types_by_pk?: Maybe<Post_Reaction_Types>;
  /** An array relationship */
  post_reactions: Array<Post_Reactions>;
  /** An aggregate relationship */
  post_reactions_aggregate: Post_Reactions_Aggregate;
  /** fetch data from the table: "post_reactions" using primary key columns */
  post_reactions_by_pk?: Maybe<Post_Reactions>;
  /** An array relationship */
  post_tags: Array<Post_Tags>;
  /** An aggregate relationship */
  post_tags_aggregate: Post_Tags_Aggregate;
  /** fetch data from the table: "post_tags" using primary key columns */
  post_tags_by_pk?: Maybe<Post_Tags>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "status_types" */
  status_types: Array<Status_Types>;
  /** fetch aggregated fields from the table: "status_types" */
  status_types_aggregate: Status_Types_Aggregate;
  /** fetch data from the table: "status_types" using primary key columns */
  status_types_by_pk?: Maybe<Status_Types>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch aggregated fields from the table: "tags" */
  tags_aggregate: Tags_Aggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootLine_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Line_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Line_Items_Order_By>>;
  where?: InputMaybe<Line_Items_Bool_Exp>;
};


export type Query_RootLine_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Line_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Line_Items_Order_By>>;
  where?: InputMaybe<Line_Items_Bool_Exp>;
};


export type Query_RootLine_Items_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOrganization_UsersArgs = {
  distinct_on?: InputMaybe<Array<Organization_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Users_Order_By>>;
  where?: InputMaybe<Organization_Users_Bool_Exp>;
};


export type Query_RootOrganization_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Users_Order_By>>;
  where?: InputMaybe<Organization_Users_Bool_Exp>;
};


export type Query_RootOrganization_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Query_RootOrganizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Query_RootOrganizations_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootPost_Reaction_TypesArgs = {
  distinct_on?: InputMaybe<Array<Post_Reaction_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Reaction_Types_Order_By>>;
  where?: InputMaybe<Post_Reaction_Types_Bool_Exp>;
};


export type Query_RootPost_Reaction_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Reaction_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Reaction_Types_Order_By>>;
  where?: InputMaybe<Post_Reaction_Types_Bool_Exp>;
};


export type Query_RootPost_Reaction_Types_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootPost_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<Post_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Reactions_Order_By>>;
  where?: InputMaybe<Post_Reactions_Bool_Exp>;
};


export type Query_RootPost_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Reactions_Order_By>>;
  where?: InputMaybe<Post_Reactions_Bool_Exp>;
};


export type Query_RootPost_Reactions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPost_TagsArgs = {
  distinct_on?: InputMaybe<Array<Post_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Tags_Order_By>>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};


export type Query_RootPost_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Tags_Order_By>>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};


export type Query_RootPost_Tags_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Query_RootPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Query_RootPosts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootStatus_TypesArgs = {
  distinct_on?: InputMaybe<Array<Status_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Status_Types_Order_By>>;
  where?: InputMaybe<Status_Types_Bool_Exp>;
};


export type Query_RootStatus_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Status_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Status_Types_Order_By>>;
  where?: InputMaybe<Status_Types_Bool_Exp>;
};


export type Query_RootStatus_Types_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootTagsArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Query_RootTags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Query_RootTags_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};

/** columns and relationships of "status_types" */
export type Status_Types = {
  __typename?: 'status_types';
  id: Scalars['String']['output'];
};

/** aggregated selection of "status_types" */
export type Status_Types_Aggregate = {
  __typename?: 'status_types_aggregate';
  aggregate?: Maybe<Status_Types_Aggregate_Fields>;
  nodes: Array<Status_Types>;
};

/** aggregate fields of "status_types" */
export type Status_Types_Aggregate_Fields = {
  __typename?: 'status_types_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Status_Types_Max_Fields>;
  min?: Maybe<Status_Types_Min_Fields>;
};


/** aggregate fields of "status_types" */
export type Status_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Status_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "status_types". All fields are combined with a logical 'AND'. */
export type Status_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Status_Types_Bool_Exp>>;
  _not?: InputMaybe<Status_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Status_Types_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "status_types" */
export enum Status_Types_Constraint {
  /** unique or primary key constraint on columns "id" */
  StatusTypesPkey = 'status_types_pkey'
}

export enum Status_Types_Enum {
  Delivered = 'DELIVERED',
  InProgress = 'IN_PROGRESS',
  InTransit = 'IN_TRANSIT',
  New = 'NEW'
}

/** Boolean expression to compare columns of type "status_types_enum". All fields are combined with logical 'AND'. */
export type Status_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Status_Types_Enum>;
  _in?: InputMaybe<Array<Status_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Status_Types_Enum>;
  _nin?: InputMaybe<Array<Status_Types_Enum>>;
};

/** input type for inserting data into table "status_types" */
export type Status_Types_Insert_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Status_Types_Max_Fields = {
  __typename?: 'status_types_max_fields';
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Status_Types_Min_Fields = {
  __typename?: 'status_types_min_fields';
  id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "status_types" */
export type Status_Types_Mutation_Response = {
  __typename?: 'status_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Status_Types>;
};

/** on_conflict condition type for table "status_types" */
export type Status_Types_On_Conflict = {
  constraint: Status_Types_Constraint;
  update_columns?: Array<Status_Types_Update_Column>;
  where?: InputMaybe<Status_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "status_types". */
export type Status_Types_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: status_types */
export type Status_Types_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "status_types" */
export enum Status_Types_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "status_types" */
export type Status_Types_Set_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "status_types" */
export type Status_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Status_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Status_Types_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "status_types" */
export enum Status_Types_Update_Column {
  /** column name */
  Id = 'id'
}

export type Status_Types_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Status_Types_Set_Input>;
  /** filter the rows which have to be updated */
  where: Status_Types_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  line_items: Array<Line_Items>;
  /** An aggregate relationship */
  line_items_aggregate: Line_Items_Aggregate;
  /** fetch data from the table: "line_items" using primary key columns */
  line_items_by_pk?: Maybe<Line_Items>;
  /** fetch data from the table in a streaming manner: "line_items" */
  line_items_stream: Array<Line_Items>;
  /** fetch data from the table: "organization_users" */
  organization_users: Array<Organization_Users>;
  /** fetch aggregated fields from the table: "organization_users" */
  organization_users_aggregate: Organization_Users_Aggregate;
  /** fetch data from the table: "organization_users" using primary key columns */
  organization_users_by_pk?: Maybe<Organization_Users>;
  /** fetch data from the table in a streaming manner: "organization_users" */
  organization_users_stream: Array<Organization_Users>;
  /** An array relationship */
  organizations: Array<Organizations>;
  /** An aggregate relationship */
  organizations_aggregate: Organizations_Aggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  /** fetch data from the table in a streaming manner: "organizations" */
  organizations_stream: Array<Organizations>;
  /** fetch data from the table: "post_reaction_types" */
  post_reaction_types: Array<Post_Reaction_Types>;
  /** fetch aggregated fields from the table: "post_reaction_types" */
  post_reaction_types_aggregate: Post_Reaction_Types_Aggregate;
  /** fetch data from the table: "post_reaction_types" using primary key columns */
  post_reaction_types_by_pk?: Maybe<Post_Reaction_Types>;
  /** fetch data from the table in a streaming manner: "post_reaction_types" */
  post_reaction_types_stream: Array<Post_Reaction_Types>;
  /** An array relationship */
  post_reactions: Array<Post_Reactions>;
  /** An aggregate relationship */
  post_reactions_aggregate: Post_Reactions_Aggregate;
  /** fetch data from the table: "post_reactions" using primary key columns */
  post_reactions_by_pk?: Maybe<Post_Reactions>;
  /** fetch data from the table in a streaming manner: "post_reactions" */
  post_reactions_stream: Array<Post_Reactions>;
  /** An array relationship */
  post_tags: Array<Post_Tags>;
  /** An aggregate relationship */
  post_tags_aggregate: Post_Tags_Aggregate;
  /** fetch data from the table: "post_tags" using primary key columns */
  post_tags_by_pk?: Maybe<Post_Tags>;
  /** fetch data from the table in a streaming manner: "post_tags" */
  post_tags_stream: Array<Post_Tags>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table in a streaming manner: "posts" */
  posts_stream: Array<Posts>;
  /** fetch data from the table: "status_types" */
  status_types: Array<Status_Types>;
  /** fetch aggregated fields from the table: "status_types" */
  status_types_aggregate: Status_Types_Aggregate;
  /** fetch data from the table: "status_types" using primary key columns */
  status_types_by_pk?: Maybe<Status_Types>;
  /** fetch data from the table in a streaming manner: "status_types" */
  status_types_stream: Array<Status_Types>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch aggregated fields from the table: "tags" */
  tags_aggregate: Tags_Aggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** fetch data from the table in a streaming manner: "tags" */
  tags_stream: Array<Tags>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootLine_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Line_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Line_Items_Order_By>>;
  where?: InputMaybe<Line_Items_Bool_Exp>;
};


export type Subscription_RootLine_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Line_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Line_Items_Order_By>>;
  where?: InputMaybe<Line_Items_Bool_Exp>;
};


export type Subscription_RootLine_Items_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootLine_Items_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Line_Items_Stream_Cursor_Input>>;
  where?: InputMaybe<Line_Items_Bool_Exp>;
};


export type Subscription_RootOrganization_UsersArgs = {
  distinct_on?: InputMaybe<Array<Organization_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Users_Order_By>>;
  where?: InputMaybe<Organization_Users_Bool_Exp>;
};


export type Subscription_RootOrganization_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Users_Order_By>>;
  where?: InputMaybe<Organization_Users_Bool_Exp>;
};


export type Subscription_RootOrganization_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrganization_Users_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Users_Bool_Exp>;
};


export type Subscription_RootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Subscription_RootOrganizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Subscription_RootOrganizations_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootOrganizations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organizations_Stream_Cursor_Input>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Subscription_RootPost_Reaction_TypesArgs = {
  distinct_on?: InputMaybe<Array<Post_Reaction_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Reaction_Types_Order_By>>;
  where?: InputMaybe<Post_Reaction_Types_Bool_Exp>;
};


export type Subscription_RootPost_Reaction_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Reaction_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Reaction_Types_Order_By>>;
  where?: InputMaybe<Post_Reaction_Types_Bool_Exp>;
};


export type Subscription_RootPost_Reaction_Types_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootPost_Reaction_Types_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Post_Reaction_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Post_Reaction_Types_Bool_Exp>;
};


export type Subscription_RootPost_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<Post_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Reactions_Order_By>>;
  where?: InputMaybe<Post_Reactions_Bool_Exp>;
};


export type Subscription_RootPost_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Reactions_Order_By>>;
  where?: InputMaybe<Post_Reactions_Bool_Exp>;
};


export type Subscription_RootPost_Reactions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPost_Reactions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Post_Reactions_Stream_Cursor_Input>>;
  where?: InputMaybe<Post_Reactions_Bool_Exp>;
};


export type Subscription_RootPost_TagsArgs = {
  distinct_on?: InputMaybe<Array<Post_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Tags_Order_By>>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};


export type Subscription_RootPost_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Tags_Order_By>>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};


export type Subscription_RootPost_Tags_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPost_Tags_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Post_Tags_Stream_Cursor_Input>>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};


export type Subscription_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Subscription_RootPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPosts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Posts_Stream_Cursor_Input>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Subscription_RootStatus_TypesArgs = {
  distinct_on?: InputMaybe<Array<Status_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Status_Types_Order_By>>;
  where?: InputMaybe<Status_Types_Bool_Exp>;
};


export type Subscription_RootStatus_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Status_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Status_Types_Order_By>>;
  where?: InputMaybe<Status_Types_Bool_Exp>;
};


export type Subscription_RootStatus_Types_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootStatus_Types_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Status_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Status_Types_Bool_Exp>;
};


export type Subscription_RootTagsArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Subscription_RootTags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Subscription_RootTags_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootTags_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Tags_Stream_Cursor_Input>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "tags" */
export type Tags = {
  __typename?: 'tags';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  /** An array relationship */
  post_tags: Array<Post_Tags>;
  /** An aggregate relationship */
  post_tags_aggregate: Post_Tags_Aggregate;
};


/** columns and relationships of "tags" */
export type TagsPost_TagsArgs = {
  distinct_on?: InputMaybe<Array<Post_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Tags_Order_By>>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};


/** columns and relationships of "tags" */
export type TagsPost_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Tags_Order_By>>;
  where?: InputMaybe<Post_Tags_Bool_Exp>;
};

/** aggregated selection of "tags" */
export type Tags_Aggregate = {
  __typename?: 'tags_aggregate';
  aggregate?: Maybe<Tags_Aggregate_Fields>;
  nodes: Array<Tags>;
};

/** aggregate fields of "tags" */
export type Tags_Aggregate_Fields = {
  __typename?: 'tags_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Tags_Max_Fields>;
  min?: Maybe<Tags_Min_Fields>;
};


/** aggregate fields of "tags" */
export type Tags_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "tags". All fields are combined with a logical 'AND'. */
export type Tags_Bool_Exp = {
  _and?: InputMaybe<Array<Tags_Bool_Exp>>;
  _not?: InputMaybe<Tags_Bool_Exp>;
  _or?: InputMaybe<Array<Tags_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  post_tags?: InputMaybe<Post_Tags_Bool_Exp>;
  post_tags_aggregate?: InputMaybe<Post_Tags_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "tags" */
export enum Tags_Constraint {
  /** unique or primary key constraint on columns "id" */
  TagsIdKey = 'tags_id_key',
  /** unique or primary key constraint on columns "id" */
  TagsPkey = 'tags_pkey'
}

/** input type for inserting data into table "tags" */
export type Tags_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  post_tags?: InputMaybe<Post_Tags_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Tags_Max_Fields = {
  __typename?: 'tags_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Tags_Min_Fields = {
  __typename?: 'tags_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "tags" */
export type Tags_Mutation_Response = {
  __typename?: 'tags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Tags>;
};

/** input type for inserting object relation for remote table "tags" */
export type Tags_Obj_Rel_Insert_Input = {
  data: Tags_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Tags_On_Conflict>;
};

/** on_conflict condition type for table "tags" */
export type Tags_On_Conflict = {
  constraint: Tags_Constraint;
  update_columns?: Array<Tags_Update_Column>;
  where?: InputMaybe<Tags_Bool_Exp>;
};

/** Ordering options when selecting data from "tags". */
export type Tags_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_tags_aggregate?: InputMaybe<Post_Tags_Aggregate_Order_By>;
};

/** primary key columns input for table: tags */
export type Tags_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "tags" */
export enum Tags_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "tags" */
export type Tags_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "tags" */
export type Tags_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tags_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tags_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "tags" */
export enum Tags_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id'
}

export type Tags_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tags_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tags_Bool_Exp;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** For use with Clerk.com integration */
export type Users = {
  __typename?: 'users';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  last_seen: Scalars['timestamptz']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  organizations: Array<Organizations>;
  /** An aggregate relationship */
  organizations_aggregate: Organizations_Aggregate;
  /** An array relationship */
  post_reactions: Array<Post_Reactions>;
  /** An aggregate relationship */
  post_reactions_aggregate: Post_Reactions_Aggregate;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
};


/** For use with Clerk.com integration */
export type UsersOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


/** For use with Clerk.com integration */
export type UsersOrganizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


/** For use with Clerk.com integration */
export type UsersPost_ReactionsArgs = {
  distinct_on?: InputMaybe<Array<Post_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Reactions_Order_By>>;
  where?: InputMaybe<Post_Reactions_Bool_Exp>;
};


/** For use with Clerk.com integration */
export type UsersPost_Reactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Reactions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Post_Reactions_Order_By>>;
  where?: InputMaybe<Post_Reactions_Bool_Exp>;
};


/** For use with Clerk.com integration */
export type UsersPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


/** For use with Clerk.com integration */
export type UsersPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organizations?: InputMaybe<Organizations_Bool_Exp>;
  organizations_aggregate?: InputMaybe<Organizations_Aggregate_Bool_Exp>;
  post_reactions?: InputMaybe<Post_Reactions_Bool_Exp>;
  post_reactions_aggregate?: InputMaybe<Post_Reactions_Aggregate_Bool_Exp>;
  posts?: InputMaybe<Posts_Bool_Exp>;
  posts_aggregate?: InputMaybe<Posts_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizations?: InputMaybe<Organizations_Arr_Rel_Insert_Input>;
  post_reactions?: InputMaybe<Post_Reactions_Arr_Rel_Insert_Input>;
  posts?: InputMaybe<Posts_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizations_aggregate?: InputMaybe<Organizations_Aggregate_Order_By>;
  post_reactions_aggregate?: InputMaybe<Post_Reactions_Aggregate_Order_By>;
  posts_aggregate?: InputMaybe<Posts_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type GetPostsQueryVariables = Exact<{
  _eq?: InputMaybe<Status_Types_Enum>;
}>;


export type GetPostsQuery = { __typename?: 'query_root', posts: Array<{ __typename?: 'posts', id: any, body?: string | null, created_at: any, creator_id: string, title?: string | null, updated_at: any, billing_so?: string | null, delivery_date?: any | null, status?: Status_Types_Enum | null, delivery_instructions?: string | null, destination_poc?: string | null, international_frt_resale?: any | null, destination_address?: string | null, ior_compliance_resale?: any | null, pickup_address?: string | null, customer_facing_po_document?: string | null, psr?: string | null, tracking_number?: string | null, carrier?: string | null, actual_delivery_date?: any | null, ticket_number?: string | null, proof_of_delivery_document?: string | null, author?: { __typename?: 'users', name: string, id: string } | null, post_reactions: Array<{ __typename?: 'post_reactions', author_id: string, type: Post_Reaction_Types_Enum, id: any }>, post_reactions_aggregate: { __typename?: 'post_reactions_aggregate', aggregate?: { __typename?: 'post_reactions_aggregate_fields', count: number } | null }, post_tags: Array<{ __typename?: 'post_tags', tag: { __typename?: 'tags', id: string } }>, line_items: Array<{ __typename?: 'line_items', customer_po: string, description: string, extended_resell: any, id: number, manufacturer: string, part_number: string, po: string, quantity: number, so: string, unit_resell: any, whs_delivery_date?: any | null }> }> };

export type GetPostsByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type GetPostsByIdQuery = { __typename?: 'query_root', posts_by_pk?: { __typename?: 'posts', id: any, body?: string | null, created_at: any, creator_id: string, title?: string | null, updated_at: any, billing_so?: string | null, delivery_date?: any | null, status?: Status_Types_Enum | null, delivery_instructions?: string | null, destination_poc?: string | null, international_frt_resale?: any | null, destination_address?: string | null, ior_compliance_resale?: any | null, pickup_address?: string | null, customer_facing_po_document?: string | null, psr?: string | null, tracking_number?: string | null, carrier?: string | null, actual_delivery_date?: any | null, ticket_number?: string | null, proof_of_delivery_document?: string | null, author?: { __typename?: 'users', name: string, id: string } | null, post_reactions: Array<{ __typename?: 'post_reactions', author_id: string, type: Post_Reaction_Types_Enum, id: any }>, post_reactions_aggregate: { __typename?: 'post_reactions_aggregate', aggregate?: { __typename?: 'post_reactions_aggregate_fields', count: number } | null }, post_tags: Array<{ __typename?: 'post_tags', tag: { __typename?: 'tags', id: string } }>, line_items: Array<{ __typename?: 'line_items', customer_po: string, description: string, extended_resell: any, id: number, manufacturer: string, part_number: string, po: string, quantity: number, so: string, unit_resell: any, whs_delivery_date?: any | null }> } | null };

export type DeletePostMutationVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type DeletePostMutation = { __typename?: 'mutation_root', delete_posts_by_pk?: { __typename?: 'posts', creator_id: string } | null };

export type UpdatePostMutationVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  billing_so?: InputMaybe<Scalars['String']['input']>;
  destination_address?: InputMaybe<Scalars['String']['input']>;
  customer_facing_po_document?: InputMaybe<Scalars['String']['input']>;
  delivery_date?: InputMaybe<Scalars['timestamptz']['input']>;
  delivery_instructions?: InputMaybe<Scalars['String']['input']>;
  destination_poc?: InputMaybe<Scalars['String']['input']>;
  international_frt_resale?: InputMaybe<Scalars['numeric']['input']>;
  ior_compliance_resale?: InputMaybe<Scalars['numeric']['input']>;
  pickup_address?: InputMaybe<Scalars['String']['input']>;
  tracking_number?: InputMaybe<Scalars['String']['input']>;
  carrier?: InputMaybe<Scalars['String']['input']>;
  actual_delivery_date?: InputMaybe<Scalars['timestamptz']['input']>;
  ticket_number?: InputMaybe<Scalars['String']['input']>;
  proof_of_delivery_document?: InputMaybe<Scalars['String']['input']>;
  psr?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Post_Tags_Insert_Input> | Post_Tags_Insert_Input>;
  line_items_data?: InputMaybe<Array<Line_Items_Insert_Input> | Line_Items_Insert_Input>;
}>;


export type UpdatePostMutation = { __typename?: 'mutation_root', update_posts_by_pk?: { __typename?: 'posts', id: any } | null, delete_post_tags?: { __typename?: 'post_tags_mutation_response', returning: Array<{ __typename?: 'post_tags', id: any }> } | null, insert_post_tags?: { __typename?: 'post_tags_mutation_response', returning: Array<{ __typename?: 'post_tags', id: any }> } | null, delete_line_items?: { __typename?: 'line_items_mutation_response', returning: Array<{ __typename?: 'line_items', id: number }> } | null, insert_line_items?: { __typename?: 'line_items_mutation_response', returning: Array<{ __typename?: 'line_items', id: number }> } | null };

export type CreatePostMutationVariables = Exact<{
  creator_id?: InputMaybe<Scalars['String']['input']>;
  org_id?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  billing_so?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  delivery_date?: InputMaybe<Scalars['timestamptz']['input']>;
  delivery_instructions?: InputMaybe<Scalars['String']['input']>;
  destination_poc?: InputMaybe<Scalars['String']['input']>;
  destination_address?: InputMaybe<Scalars['String']['input']>;
  international_frt_resale?: InputMaybe<Scalars['numeric']['input']>;
  ior_compliance_resale?: InputMaybe<Scalars['numeric']['input']>;
  pickup_address?: InputMaybe<Scalars['String']['input']>;
  psr?: InputMaybe<Scalars['String']['input']>;
  customer_facing_po_document?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status_Types_Enum>;
  tracking_number?: InputMaybe<Scalars['String']['input']>;
  carrier?: InputMaybe<Scalars['String']['input']>;
  actual_delivery_date?: InputMaybe<Scalars['timestamptz']['input']>;
  ticket_number?: InputMaybe<Scalars['String']['input']>;
  proof_of_delivery_document?: InputMaybe<Scalars['String']['input']>;
  tags_data?: InputMaybe<Array<Post_Tags_Insert_Input> | Post_Tags_Insert_Input>;
  line_items_data?: InputMaybe<Array<Line_Items_Insert_Input> | Line_Items_Insert_Input>;
}>;


export type CreatePostMutation = { __typename?: 'mutation_root', insert_posts?: { __typename?: 'posts_mutation_response', returning: Array<{ __typename?: 'posts', id: any }> } | null };

export type CreateReactionMutationVariables = Exact<{
  author_id?: InputMaybe<Scalars['String']['input']>;
  post_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Post_Reaction_Types_Enum>;
}>;


export type CreateReactionMutation = { __typename?: 'mutation_root', insert_post_reactions_one?: { __typename?: 'post_reactions', id: any } | null };

export type DeleteReactionMutationVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type DeleteReactionMutation = { __typename?: 'mutation_root', delete_post_reactions_by_pk?: { __typename?: 'post_reactions', id: any } | null };

export type UpdatePostStatusMutationVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Status_Types_Enum>;
}>;


export type UpdatePostStatusMutation = { __typename?: 'mutation_root', update_posts_by_pk?: { __typename?: 'posts', id: any } | null };

export type SearchTagsQueryVariables = Exact<{
  _regex?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchTagsQuery = { __typename?: 'query_root', tags: Array<{ __typename?: 'tags', id: string }> };

export type SearchPostsQueryVariables = Exact<{
  _regex?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchPostsQuery = { __typename?: 'query_root', posts: Array<{ __typename?: 'posts', id: any, body?: string | null, created_at: any, creator_id: string, status?: Status_Types_Enum | null, title?: string | null, updated_at: any, customer_facing_po_document?: string | null, tracking_number?: string | null, carrier?: string | null, actual_delivery_date?: any | null, ticket_number?: string | null, proof_of_delivery_document?: string | null, psr?: string | null, author?: { __typename?: 'users', name: string, id: string } | null, post_reactions: Array<{ __typename?: 'post_reactions', author_id: string, type: Post_Reaction_Types_Enum, id: any }>, post_reactions_aggregate: { __typename?: 'post_reactions_aggregate', aggregate?: { __typename?: 'post_reactions_aggregate_fields', count: number } | null }, post_tags: Array<{ __typename?: 'post_tags', tag: { __typename?: 'tags', id: string } }>, line_items: Array<{ __typename?: 'line_items', customer_po: string, description: string, extended_resell: any, id: number, manufacturer: string, part_number: string, po: string, quantity: number, so: string, unit_resell: any, whs_delivery_date?: any | null }> }> };

export type CreateUserMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', id: string } | null };

export type CreateOrganizationMutationVariables = Exact<{
  created_by?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateOrganizationMutation = { __typename?: 'mutation_root', insert_organizations_one?: { __typename?: 'organizations', id: string } | null };


export const GetPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_eq"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"status_types_enum"}},"defaultValue":{"kind":"EnumValue","value":"NEW"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_eq"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"creator_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"billing_so"}},{"kind":"Field","name":{"kind":"Name","value":"delivery_date"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"delivery_instructions"}},{"kind":"Field","name":{"kind":"Name","value":"destination_poc"}},{"kind":"Field","name":{"kind":"Name","value":"international_frt_resale"}},{"kind":"Field","name":{"kind":"Name","value":"destination_address"}},{"kind":"Field","name":{"kind":"Name","value":"ior_compliance_resale"}},{"kind":"Field","name":{"kind":"Name","value":"pickup_address"}},{"kind":"Field","name":{"kind":"Name","value":"customer_facing_po_document"}},{"kind":"Field","name":{"kind":"Name","value":"psr"}},{"kind":"Field","name":{"kind":"Name","value":"tracking_number"}},{"kind":"Field","name":{"kind":"Name","value":"carrier"}},{"kind":"Field","name":{"kind":"Name","value":"actual_delivery_date"}},{"kind":"Field","name":{"kind":"Name","value":"ticket_number"}},{"kind":"Field","name":{"kind":"Name","value":"proof_of_delivery_document"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post_reactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author_id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post_reactions_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"post_tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"line_items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer_po"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"extended_resell"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"manufacturer"}},{"kind":"Field","name":{"kind":"Name","value":"part_number"}},{"kind":"Field","name":{"kind":"Name","value":"po"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"so"}},{"kind":"Field","name":{"kind":"Name","value":"unit_resell"}},{"kind":"Field","name":{"kind":"Name","value":"whs_delivery_date"}}]}}]}}]}}]} as unknown as DocumentNode<GetPostsQuery, GetPostsQueryVariables>;
export const GetPostsByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostsById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}},"defaultValue":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"creator_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"billing_so"}},{"kind":"Field","name":{"kind":"Name","value":"delivery_date"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"delivery_instructions"}},{"kind":"Field","name":{"kind":"Name","value":"destination_poc"}},{"kind":"Field","name":{"kind":"Name","value":"international_frt_resale"}},{"kind":"Field","name":{"kind":"Name","value":"destination_address"}},{"kind":"Field","name":{"kind":"Name","value":"ior_compliance_resale"}},{"kind":"Field","name":{"kind":"Name","value":"pickup_address"}},{"kind":"Field","name":{"kind":"Name","value":"customer_facing_po_document"}},{"kind":"Field","name":{"kind":"Name","value":"psr"}},{"kind":"Field","name":{"kind":"Name","value":"tracking_number"}},{"kind":"Field","name":{"kind":"Name","value":"carrier"}},{"kind":"Field","name":{"kind":"Name","value":"actual_delivery_date"}},{"kind":"Field","name":{"kind":"Name","value":"ticket_number"}},{"kind":"Field","name":{"kind":"Name","value":"proof_of_delivery_document"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post_reactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author_id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post_reactions_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"post_tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"line_items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer_po"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"extended_resell"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"manufacturer"}},{"kind":"Field","name":{"kind":"Name","value":"part_number"}},{"kind":"Field","name":{"kind":"Name","value":"po"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"so"}},{"kind":"Field","name":{"kind":"Name","value":"unit_resell"}},{"kind":"Field","name":{"kind":"Name","value":"whs_delivery_date"}}]}}]}}]}}]} as unknown as DocumentNode<GetPostsByIdQuery, GetPostsByIdQueryVariables>;
export const DeletePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}},"defaultValue":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_posts_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creator_id"}}]}}]}}]} as unknown as DocumentNode<DeletePostMutation, DeletePostMutationVariables>;
export const UpdatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"billing_so"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"destination_address"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customer_facing_po_document"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"delivery_date"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"delivery_instructions"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"destination_poc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"international_frt_resale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}},"defaultValue":{"kind":"IntValue","value":"0"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ior_compliance_resale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}},"defaultValue":{"kind":"IntValue","value":"0"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pickup_address"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tracking_number"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"carrier"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"actual_delivery_date"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ticket_number"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proof_of_delivery_document"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"psr"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tags"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"post_tags_insert_input"}}}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"post_id"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"tag_id"},"value":{"kind":"StringValue","value":"","block":false}}]}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"line_items_data"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"line_items_insert_input"}}}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_by"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"customer_po"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"extended_resell"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"manufacturer"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"part_number"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"po"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"quantity"},"value":{"kind":"IntValue","value":"0"}},{"kind":"ObjectField","name":{"kind":"Name","value":"so"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"unit_resell"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"whs_delivery_date"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"post_id"},"value":{"kind":"StringValue","value":"","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_posts_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tracking_number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tracking_number"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"carrier"},"value":{"kind":"Variable","name":{"kind":"Name","value":"carrier"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"actual_delivery_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"actual_delivery_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"ticket_number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ticket_number"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"proof_of_delivery_document"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proof_of_delivery_document"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"billing_so"},"value":{"kind":"Variable","name":{"kind":"Name","value":"billing_so"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"destination_address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"destination_address"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"delivery_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"delivery_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"delivery_instructions"},"value":{"kind":"Variable","name":{"kind":"Name","value":"delivery_instructions"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"destination_poc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"destination_poc"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"international_frt_resale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"international_frt_resale"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"ior_compliance_resale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ior_compliance_resale"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pickup_address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pickup_address"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"psr"},"value":{"kind":"Variable","name":{"kind":"Name","value":"psr"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"customer_facing_po_document"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customer_facing_po_document"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete_post_tags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"post_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"insert_post_tags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tags"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete_line_items"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"post_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"insert_line_items"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"line_items_data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UpdatePostMutation, UpdatePostMutationVariables>;
export const CreatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"creator_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"org_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"billing_so"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"delivery_date"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"delivery_instructions"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"destination_poc"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"destination_address"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"international_frt_resale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}},"defaultValue":{"kind":"IntValue","value":"0"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ior_compliance_resale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}},"defaultValue":{"kind":"IntValue","value":"0"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pickup_address"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"psr"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customer_facing_po_document"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"status_types_enum"}},"defaultValue":{"kind":"EnumValue","value":"NEW"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tracking_number"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"carrier"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"actual_delivery_date"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}},"defaultValue":{"kind":"NullValue"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ticket_number"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"proof_of_delivery_document"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tags_data"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"post_tags_insert_input"}}}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tag_id"},"value":{"kind":"StringValue","value":"","block":false}}]}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"line_items_data"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"line_items_insert_input"}}}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_by"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"customer_po"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"extended_resell"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"manufacturer"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"part_number"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"po"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"quantity"},"value":{"kind":"IntValue","value":"0"}},{"kind":"ObjectField","name":{"kind":"Name","value":"so"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"unit_resell"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"whs_delivery_date"},"value":{"kind":"StringValue","value":"","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"org_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"org_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"creator_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"creator_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"billing_so"},"value":{"kind":"Variable","name":{"kind":"Name","value":"billing_so"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"destination_address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"destination_address"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"delivery_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"delivery_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"delivery_instructions"},"value":{"kind":"Variable","name":{"kind":"Name","value":"delivery_instructions"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"destination_poc"},"value":{"kind":"Variable","name":{"kind":"Name","value":"destination_poc"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"international_frt_resale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"international_frt_resale"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"ior_compliance_resale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ior_compliance_resale"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"customer_facing_po_document"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customer_facing_po_document"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pickup_address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pickup_address"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"psr"},"value":{"kind":"Variable","name":{"kind":"Name","value":"psr"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"tracking_number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tracking_number"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"carrier"},"value":{"kind":"Variable","name":{"kind":"Name","value":"carrier"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"actual_delivery_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"actual_delivery_date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"ticket_number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ticket_number"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"proof_of_delivery_document"},"value":{"kind":"Variable","name":{"kind":"Name","value":"proof_of_delivery_document"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"post_tags"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tags_data"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"line_items"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"line_items_data"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreatePostMutation, CreatePostMutationVariables>;
export const CreateReactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateReaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"author_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"post_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"post_reaction_types_enum"}},"defaultValue":{"kind":"EnumValue","value":"THUMBS_UP"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_post_reactions_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"author_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"author_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"post_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"post_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateReactionMutation, CreateReactionMutationVariables>;
export const DeleteReactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteReaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}},"defaultValue":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_post_reactions_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteReactionMutation, DeleteReactionMutationVariables>;
export const UpdatePostStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePostStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"status_types_enum"}},"defaultValue":{"kind":"EnumValue","value":"NEW"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_posts_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdatePostStatusMutation, UpdatePostStatusMutationVariables>;
export const SearchTagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchTags"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_regex"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_regex"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_regex"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SearchTagsQuery, SearchTagsQueryVariables>;
export const SearchPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_regex"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_at"},"value":{"kind":"EnumValue","value":"desc"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"author"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_regex"}}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"body"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_regex"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_regex"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"post_tags"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tag_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_ilike"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_regex"}}}]}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"creator_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_facing_po_document"}},{"kind":"Field","name":{"kind":"Name","value":"tracking_number"}},{"kind":"Field","name":{"kind":"Name","value":"carrier"}},{"kind":"Field","name":{"kind":"Name","value":"actual_delivery_date"}},{"kind":"Field","name":{"kind":"Name","value":"ticket_number"}},{"kind":"Field","name":{"kind":"Name","value":"proof_of_delivery_document"}},{"kind":"Field","name":{"kind":"Name","value":"psr"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post_reactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author_id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post_reactions_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"post_tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"line_items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer_po"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"extended_resell"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"manufacturer"}},{"kind":"Field","name":{"kind":"Name","value":"part_number"}},{"kind":"Field","name":{"kind":"Name","value":"po"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"so"}},{"kind":"Field","name":{"kind":"Name","value":"unit_resell"}},{"kind":"Field","name":{"kind":"Name","value":"whs_delivery_date"}}]}}]}}]}}]} as unknown as DocumentNode<SearchPostsQuery, SearchPostsQueryVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_users_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const CreateOrganizationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOrganization"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"created_by"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organization_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_organizations_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"created_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"created_by"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"organization_users"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organization_id"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateOrganizationMutation, CreateOrganizationMutationVariables>;