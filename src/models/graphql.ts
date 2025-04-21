import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename: 'AssetLinkingCollections';
  caseStudyCollection?: Maybe<CaseStudyCollection>;
  entryCollection?: Maybe<EntryCollection>;
  projectCollection?: Maybe<ProjectCollection>;
};


export type AssetLinkingCollectionsCaseStudyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/caseStudy) */
export type CaseStudy = Entry & _Node & {
  __typename: 'CaseStudy';
  _id: Scalars['ID']['output'];
  assets?: Maybe<Asset>;
  client?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  date?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<CaseStudyLinkingCollections>;
  order?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  text?: Maybe<CaseStudyText>;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/caseStudy) */
export type CaseStudyAssetsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/caseStudy) */
export type CaseStudyClientArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/caseStudy) */
export type CaseStudyDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/caseStudy) */
export type CaseStudyLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/caseStudy) */
export type CaseStudyOrderArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/caseStudy) */
export type CaseStudySlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/caseStudy) */
export type CaseStudyTagsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/caseStudy) */
export type CaseStudyTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/caseStudy) */
export type CaseStudyTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CaseStudyCollection = {
  __typename: 'CaseStudyCollection';
  items: Array<Maybe<CaseStudy>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CaseStudyFilter = {
  AND?: InputMaybe<Array<InputMaybe<CaseStudyFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CaseStudyFilter>>>;
  assets_exists?: InputMaybe<Scalars['Boolean']['input']>;
  client?: InputMaybe<Scalars['String']['input']>;
  client_contains?: InputMaybe<Scalars['String']['input']>;
  client_exists?: InputMaybe<Scalars['Boolean']['input']>;
  client_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  client_not?: InputMaybe<Scalars['String']['input']>;
  client_not_contains?: InputMaybe<Scalars['String']['input']>;
  client_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars['String']['input']>;
  date_contains?: InputMaybe<Scalars['String']['input']>;
  date_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  date_not?: InputMaybe<Scalars['String']['input']>;
  date_not_contains?: InputMaybe<Scalars['String']['input']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  order?: InputMaybe<Scalars['Int']['input']>;
  order_exists?: InputMaybe<Scalars['Boolean']['input']>;
  order_gt?: InputMaybe<Scalars['Int']['input']>;
  order_gte?: InputMaybe<Scalars['Int']['input']>;
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  order_lt?: InputMaybe<Scalars['Int']['input']>;
  order_lte?: InputMaybe<Scalars['Int']['input']>;
  order_not?: InputMaybe<Scalars['Int']['input']>;
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tags_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudyLinkingCollections = {
  __typename: 'CaseStudyLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type CaseStudyLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CaseStudyOrder {
  ClientAsc = 'client_ASC',
  ClientDesc = 'client_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type CaseStudyText = {
  __typename: 'CaseStudyText';
  json: Scalars['JSON']['output'];
  links: CaseStudyTextLinks;
};

export type CaseStudyTextAssets = {
  __typename: 'CaseStudyTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CaseStudyTextEntries = {
  __typename: 'CaseStudyTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CaseStudyTextLinks = {
  __typename: 'CaseStudyTextLinks';
  assets: CaseStudyTextAssets;
  entries: CaseStudyTextEntries;
  resources: CaseStudyTextResources;
};

export type CaseStudyTextResources = {
  __typename: 'CaseStudyTextResources';
  block: Array<CaseStudyTextResourcesBlock>;
  hyperlink: Array<CaseStudyTextResourcesHyperlink>;
  inline: Array<CaseStudyTextResourcesInline>;
};

export type CaseStudyTextResourcesBlock = ResourceLink & {
  __typename: 'CaseStudyTextResourcesBlock';
  sys: ResourceSys;
};

export type CaseStudyTextResourcesHyperlink = ResourceLink & {
  __typename: 'CaseStudyTextResourcesHyperlink';
  sys: ResourceSys;
};

export type CaseStudyTextResourcesInline = ResourceLink & {
  __typename: 'CaseStudyTextResourcesInline';
  sys: ResourceSys;
};

export type ContentfulMetadata = {
  __typename: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/experience) */
export type Experience = Entry & _Node & {
  __typename: 'Experience';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  date?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ExperienceLinkingCollections>;
  order?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  text?: Maybe<ExperienceText>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/experience) */
export type ExperienceDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/experience) */
export type ExperienceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/experience) */
export type ExperienceOrderArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/experience) */
export type ExperienceTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ExperienceCollection = {
  __typename: 'ExperienceCollection';
  items: Array<Maybe<Experience>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ExperienceFilter = {
  AND?: InputMaybe<Array<InputMaybe<ExperienceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ExperienceFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars['String']['input']>;
  date_contains?: InputMaybe<Scalars['String']['input']>;
  date_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  date_not?: InputMaybe<Scalars['String']['input']>;
  date_not_contains?: InputMaybe<Scalars['String']['input']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  order?: InputMaybe<Scalars['Int']['input']>;
  order_exists?: InputMaybe<Scalars['Boolean']['input']>;
  order_gt?: InputMaybe<Scalars['Int']['input']>;
  order_gte?: InputMaybe<Scalars['Int']['input']>;
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  order_lt?: InputMaybe<Scalars['Int']['input']>;
  order_lte?: InputMaybe<Scalars['Int']['input']>;
  order_not?: InputMaybe<Scalars['Int']['input']>;
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
};

export type ExperienceLinkingCollections = {
  __typename: 'ExperienceLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ExperienceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ExperienceOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ExperienceText = {
  __typename: 'ExperienceText';
  json: Scalars['JSON']['output'];
  links: ExperienceTextLinks;
};

export type ExperienceTextAssets = {
  __typename: 'ExperienceTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ExperienceTextEntries = {
  __typename: 'ExperienceTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ExperienceTextLinks = {
  __typename: 'ExperienceTextLinks';
  assets: ExperienceTextAssets;
  entries: ExperienceTextEntries;
  resources: ExperienceTextResources;
};

export type ExperienceTextResources = {
  __typename: 'ExperienceTextResources';
  block: Array<ExperienceTextResourcesBlock>;
  hyperlink: Array<ExperienceTextResourcesHyperlink>;
  inline: Array<ExperienceTextResourcesInline>;
};

export type ExperienceTextResourcesBlock = ResourceLink & {
  __typename: 'ExperienceTextResourcesBlock';
  sys: ResourceSys;
};

export type ExperienceTextResourcesHyperlink = ResourceLink & {
  __typename: 'ExperienceTextResourcesHyperlink';
  sys: ResourceSys;
};

export type ExperienceTextResourcesInline = ResourceLink & {
  __typename: 'ExperienceTextResourcesInline';
  sys: ResourceSys;
};

/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/header) */
export type Header = Entry & _Node & {
  __typename: 'Header';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  info?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  linkedFrom?: Maybe<HeaderLinkingCollections>;
  sys: Sys;
  title?: Maybe<HeaderTitle>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/header) */
export type HeaderInfoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/header) */
export type HeaderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/header) */
export type HeaderTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HeaderCollection = {
  __typename: 'HeaderCollection';
  items: Array<Maybe<Header>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeaderFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeaderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeaderFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  info_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  info_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  info_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  info_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
};

export type HeaderLinkingCollections = {
  __typename: 'HeaderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HeaderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HeaderOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type HeaderTitle = {
  __typename: 'HeaderTitle';
  json: Scalars['JSON']['output'];
  links: HeaderTitleLinks;
};

export type HeaderTitleAssets = {
  __typename: 'HeaderTitleAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type HeaderTitleEntries = {
  __typename: 'HeaderTitleEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type HeaderTitleLinks = {
  __typename: 'HeaderTitleLinks';
  assets: HeaderTitleAssets;
  entries: HeaderTitleEntries;
  resources: HeaderTitleResources;
};

export type HeaderTitleResources = {
  __typename: 'HeaderTitleResources';
  block: Array<HeaderTitleResourcesBlock>;
  hyperlink: Array<HeaderTitleResourcesHyperlink>;
  inline: Array<HeaderTitleResourcesInline>;
};

export type HeaderTitleResourcesBlock = ResourceLink & {
  __typename: 'HeaderTitleResourcesBlock';
  sys: ResourceSys;
};

export type HeaderTitleResourcesHyperlink = ResourceLink & {
  __typename: 'HeaderTitleResourcesHyperlink';
  sys: ResourceSys;
};

export type HeaderTitleResourcesInline = ResourceLink & {
  __typename: 'HeaderTitleResourcesInline';
  sys: ResourceSys;
};

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/project) */
export type Project = Entry & _Node & {
  __typename: 'Project';
  _id: Scalars['ID']['output'];
  asset?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ProjectLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/project) */
export type ProjectAssetArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/project) */
export type ProjectLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/project) */
export type ProjectTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectCollection = {
  __typename: 'ProjectCollection';
  items: Array<Maybe<Project>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ProjectFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectFilter>>>;
  asset_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProjectLinkingCollections = {
  __typename: 'ProjectLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ProjectLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ProjectOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Query = {
  __typename: 'Query';
  _node?: Maybe<_Node>;
  _nodes: Array<Maybe<_Node>>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  caseStudy?: Maybe<CaseStudy>;
  caseStudyCollection?: Maybe<CaseStudyCollection>;
  entryCollection?: Maybe<EntryCollection>;
  experience?: Maybe<Experience>;
  experienceCollection?: Maybe<ExperienceCollection>;
  header?: Maybe<Header>;
  headerCollection?: Maybe<HeaderCollection>;
  project?: Maybe<Project>;
  projectCollection?: Maybe<ProjectCollection>;
  text?: Maybe<Text>;
  textCollection?: Maybe<TextCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Query_NodesArgs = {
  ids: Array<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryCaseStudyArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCaseStudyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CaseStudyOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CaseStudyFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryExperienceArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ExperienceOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceFilter>;
};


export type QueryHeaderArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeaderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeaderFilter>;
};


export type QueryProjectArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProjectOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectFilter>;
};


export type QueryTextArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TextFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

export type Sys = {
  __typename: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/text) */
export type Text = Entry & _Node & {
  __typename: 'Text';
  _id: Scalars['ID']['output'];
  content?: Maybe<TextContent>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TextLinkingCollections>;
  reference?: Maybe<Scalars['String']['output']>;
  secondaryFont?: Maybe<Scalars['Boolean']['output']>;
  sys: Sys;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/text) */
export type TextContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/text) */
export type TextLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/text) */
export type TextReferenceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/text) */
export type TextSecondaryFontArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/text) */
export type TextTagsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TextCollection = {
  __typename: 'TextCollection';
  items: Array<Maybe<Text>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TextContent = {
  __typename: 'TextContent';
  json: Scalars['JSON']['output'];
  links: TextContentLinks;
};

export type TextContentAssets = {
  __typename: 'TextContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TextContentEntries = {
  __typename: 'TextContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TextContentLinks = {
  __typename: 'TextContentLinks';
  assets: TextContentAssets;
  entries: TextContentEntries;
  resources: TextContentResources;
};

export type TextContentResources = {
  __typename: 'TextContentResources';
  block: Array<TextContentResourcesBlock>;
  hyperlink: Array<TextContentResourcesHyperlink>;
  inline: Array<TextContentResourcesInline>;
};

export type TextContentResourcesBlock = ResourceLink & {
  __typename: 'TextContentResourcesBlock';
  sys: ResourceSys;
};

export type TextContentResourcesHyperlink = ResourceLink & {
  __typename: 'TextContentResourcesHyperlink';
  sys: ResourceSys;
};

export type TextContentResourcesInline = ResourceLink & {
  __typename: 'TextContentResourcesInline';
  sys: ResourceSys;
};

export type TextFilter = {
  AND?: InputMaybe<Array<InputMaybe<TextFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TextFilter>>>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  reference?: InputMaybe<Scalars['String']['input']>;
  reference_contains?: InputMaybe<Scalars['String']['input']>;
  reference_exists?: InputMaybe<Scalars['Boolean']['input']>;
  reference_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  reference_not?: InputMaybe<Scalars['String']['input']>;
  reference_not_contains?: InputMaybe<Scalars['String']['input']>;
  reference_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  secondaryFont?: InputMaybe<Scalars['Boolean']['input']>;
  secondaryFont_exists?: InputMaybe<Scalars['Boolean']['input']>;
  secondaryFont_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  tags_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TextLinkingCollections = {
  __typename: 'TextLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TextLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TextOrder {
  ReferenceAsc = 'reference_ASC',
  ReferenceDesc = 'reference_DESC',
  SecondaryFontAsc = 'secondaryFont_ASC',
  SecondaryFontDesc = 'secondaryFont_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type _Node = {
  _id: Scalars['ID']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  Entry: ( Omit<CaseStudy, 'linkedFrom' | 'text'> & { linkedFrom?: Maybe<_RefType['CaseStudyLinkingCollections']>, text?: Maybe<_RefType['CaseStudyText']> } ) | ( Omit<Experience, 'linkedFrom' | 'text'> & { linkedFrom?: Maybe<_RefType['ExperienceLinkingCollections']>, text?: Maybe<_RefType['ExperienceText']> } ) | ( Omit<Header, 'linkedFrom' | 'title'> & { linkedFrom?: Maybe<_RefType['HeaderLinkingCollections']>, title?: Maybe<_RefType['HeaderTitle']> } ) | ( Omit<Project, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['ProjectLinkingCollections']> } ) | ( Omit<Text, 'content' | 'linkedFrom'> & { content?: Maybe<_RefType['TextContent']>, linkedFrom?: Maybe<_RefType['TextLinkingCollections']> } );
  ResourceLink: ( CaseStudyTextResourcesBlock ) | ( CaseStudyTextResourcesHyperlink ) | ( CaseStudyTextResourcesInline ) | ( ExperienceTextResourcesBlock ) | ( ExperienceTextResourcesHyperlink ) | ( ExperienceTextResourcesInline ) | ( HeaderTitleResourcesBlock ) | ( HeaderTitleResourcesHyperlink ) | ( HeaderTitleResourcesInline ) | ( TextContentResourcesBlock ) | ( TextContentResourcesHyperlink ) | ( TextContentResourcesInline );
  _Node: ( Omit<CaseStudy, 'linkedFrom' | 'text'> & { linkedFrom?: Maybe<_RefType['CaseStudyLinkingCollections']>, text?: Maybe<_RefType['CaseStudyText']> } ) | ( Omit<Experience, 'linkedFrom' | 'text'> & { linkedFrom?: Maybe<_RefType['ExperienceLinkingCollections']>, text?: Maybe<_RefType['ExperienceText']> } ) | ( Omit<Header, 'linkedFrom' | 'title'> & { linkedFrom?: Maybe<_RefType['HeaderLinkingCollections']>, title?: Maybe<_RefType['HeaderTitle']> } ) | ( Omit<Project, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['ProjectLinkingCollections']> } ) | ( Omit<Text, 'content' | 'linkedFrom'> & { content?: Maybe<_RefType['TextContent']>, linkedFrom?: Maybe<_RefType['TextLinkingCollections']> } );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Asset: ResolverTypeWrapper<Omit<Asset, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversTypes['AssetLinkingCollections']> }>;
  AssetCollection: ResolverTypeWrapper<AssetCollection>;
  AssetFilter: AssetFilter;
  AssetLinkingCollections: ResolverTypeWrapper<Omit<AssetLinkingCollections, 'caseStudyCollection' | 'entryCollection' | 'projectCollection'> & { caseStudyCollection?: Maybe<ResolversTypes['CaseStudyCollection']>, entryCollection?: Maybe<ResolversTypes['EntryCollection']>, projectCollection?: Maybe<ResolversTypes['ProjectCollection']> }>;
  AssetOrder: AssetOrder;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CaseStudy: ResolverTypeWrapper<Omit<CaseStudy, 'linkedFrom' | 'text'> & { linkedFrom?: Maybe<ResolversTypes['CaseStudyLinkingCollections']>, text?: Maybe<ResolversTypes['CaseStudyText']> }>;
  CaseStudyCollection: ResolverTypeWrapper<Omit<CaseStudyCollection, 'items'> & { items: Array<Maybe<ResolversTypes['CaseStudy']>> }>;
  CaseStudyFilter: CaseStudyFilter;
  CaseStudyLinkingCollections: ResolverTypeWrapper<Omit<CaseStudyLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  CaseStudyOrder: CaseStudyOrder;
  CaseStudyText: ResolverTypeWrapper<Omit<CaseStudyText, 'links'> & { links: ResolversTypes['CaseStudyTextLinks'] }>;
  CaseStudyTextAssets: ResolverTypeWrapper<CaseStudyTextAssets>;
  CaseStudyTextEntries: ResolverTypeWrapper<Omit<CaseStudyTextEntries, 'block' | 'hyperlink' | 'inline'> & { block: Array<Maybe<ResolversTypes['Entry']>>, hyperlink: Array<Maybe<ResolversTypes['Entry']>>, inline: Array<Maybe<ResolversTypes['Entry']>> }>;
  CaseStudyTextLinks: ResolverTypeWrapper<Omit<CaseStudyTextLinks, 'assets' | 'entries'> & { assets: ResolversTypes['CaseStudyTextAssets'], entries: ResolversTypes['CaseStudyTextEntries'] }>;
  CaseStudyTextResources: ResolverTypeWrapper<CaseStudyTextResources>;
  CaseStudyTextResourcesBlock: ResolverTypeWrapper<CaseStudyTextResourcesBlock>;
  CaseStudyTextResourcesHyperlink: ResolverTypeWrapper<CaseStudyTextResourcesHyperlink>;
  CaseStudyTextResourcesInline: ResolverTypeWrapper<CaseStudyTextResourcesInline>;
  ContentfulMetadata: ResolverTypeWrapper<ContentfulMetadata>;
  ContentfulMetadataConceptsDescendantsFilter: ContentfulMetadataConceptsDescendantsFilter;
  ContentfulMetadataConceptsFilter: ContentfulMetadataConceptsFilter;
  ContentfulMetadataFilter: ContentfulMetadataFilter;
  ContentfulMetadataTagsFilter: ContentfulMetadataTagsFilter;
  ContentfulTag: ResolverTypeWrapper<ContentfulTag>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Dimension: ResolverTypeWrapper<Scalars['Dimension']['output']>;
  Entry: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Entry']>;
  EntryCollection: ResolverTypeWrapper<Omit<EntryCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Entry']>> }>;
  EntryFilter: EntryFilter;
  EntryOrder: EntryOrder;
  Experience: ResolverTypeWrapper<Omit<Experience, 'linkedFrom' | 'text'> & { linkedFrom?: Maybe<ResolversTypes['ExperienceLinkingCollections']>, text?: Maybe<ResolversTypes['ExperienceText']> }>;
  ExperienceCollection: ResolverTypeWrapper<Omit<ExperienceCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Experience']>> }>;
  ExperienceFilter: ExperienceFilter;
  ExperienceLinkingCollections: ResolverTypeWrapper<Omit<ExperienceLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  ExperienceOrder: ExperienceOrder;
  ExperienceText: ResolverTypeWrapper<Omit<ExperienceText, 'links'> & { links: ResolversTypes['ExperienceTextLinks'] }>;
  ExperienceTextAssets: ResolverTypeWrapper<ExperienceTextAssets>;
  ExperienceTextEntries: ResolverTypeWrapper<Omit<ExperienceTextEntries, 'block' | 'hyperlink' | 'inline'> & { block: Array<Maybe<ResolversTypes['Entry']>>, hyperlink: Array<Maybe<ResolversTypes['Entry']>>, inline: Array<Maybe<ResolversTypes['Entry']>> }>;
  ExperienceTextLinks: ResolverTypeWrapper<Omit<ExperienceTextLinks, 'assets' | 'entries'> & { assets: ResolversTypes['ExperienceTextAssets'], entries: ResolversTypes['ExperienceTextEntries'] }>;
  ExperienceTextResources: ResolverTypeWrapper<ExperienceTextResources>;
  ExperienceTextResourcesBlock: ResolverTypeWrapper<ExperienceTextResourcesBlock>;
  ExperienceTextResourcesHyperlink: ResolverTypeWrapper<ExperienceTextResourcesHyperlink>;
  ExperienceTextResourcesInline: ResolverTypeWrapper<ExperienceTextResourcesInline>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Header: ResolverTypeWrapper<Omit<Header, 'linkedFrom' | 'title'> & { linkedFrom?: Maybe<ResolversTypes['HeaderLinkingCollections']>, title?: Maybe<ResolversTypes['HeaderTitle']> }>;
  HeaderCollection: ResolverTypeWrapper<Omit<HeaderCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Header']>> }>;
  HeaderFilter: HeaderFilter;
  HeaderLinkingCollections: ResolverTypeWrapper<Omit<HeaderLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  HeaderOrder: HeaderOrder;
  HeaderTitle: ResolverTypeWrapper<Omit<HeaderTitle, 'links'> & { links: ResolversTypes['HeaderTitleLinks'] }>;
  HeaderTitleAssets: ResolverTypeWrapper<HeaderTitleAssets>;
  HeaderTitleEntries: ResolverTypeWrapper<Omit<HeaderTitleEntries, 'block' | 'hyperlink' | 'inline'> & { block: Array<Maybe<ResolversTypes['Entry']>>, hyperlink: Array<Maybe<ResolversTypes['Entry']>>, inline: Array<Maybe<ResolversTypes['Entry']>> }>;
  HeaderTitleLinks: ResolverTypeWrapper<Omit<HeaderTitleLinks, 'assets' | 'entries'> & { assets: ResolversTypes['HeaderTitleAssets'], entries: ResolversTypes['HeaderTitleEntries'] }>;
  HeaderTitleResources: ResolverTypeWrapper<HeaderTitleResources>;
  HeaderTitleResourcesBlock: ResolverTypeWrapper<HeaderTitleResourcesBlock>;
  HeaderTitleResourcesHyperlink: ResolverTypeWrapper<HeaderTitleResourcesHyperlink>;
  HeaderTitleResourcesInline: ResolverTypeWrapper<HeaderTitleResourcesInline>;
  HexColor: ResolverTypeWrapper<Scalars['HexColor']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  ImageFormat: ImageFormat;
  ImageResizeFocus: ImageResizeFocus;
  ImageResizeStrategy: ImageResizeStrategy;
  ImageTransformOptions: ImageTransformOptions;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  Project: ResolverTypeWrapper<Omit<Project, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversTypes['ProjectLinkingCollections']> }>;
  ProjectCollection: ResolverTypeWrapper<Omit<ProjectCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Project']>> }>;
  ProjectFilter: ProjectFilter;
  ProjectLinkingCollections: ResolverTypeWrapper<Omit<ProjectLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  ProjectOrder: ProjectOrder;
  Quality: ResolverTypeWrapper<Scalars['Quality']['output']>;
  Query: ResolverTypeWrapper<{}>;
  ResourceLink: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ResourceLink']>;
  ResourceSys: ResolverTypeWrapper<ResourceSys>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Sys: ResolverTypeWrapper<Sys>;
  SysFilter: SysFilter;
  TaxonomyConcept: ResolverTypeWrapper<TaxonomyConcept>;
  Text: ResolverTypeWrapper<Omit<Text, 'content' | 'linkedFrom'> & { content?: Maybe<ResolversTypes['TextContent']>, linkedFrom?: Maybe<ResolversTypes['TextLinkingCollections']> }>;
  TextCollection: ResolverTypeWrapper<Omit<TextCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Text']>> }>;
  TextContent: ResolverTypeWrapper<Omit<TextContent, 'links'> & { links: ResolversTypes['TextContentLinks'] }>;
  TextContentAssets: ResolverTypeWrapper<TextContentAssets>;
  TextContentEntries: ResolverTypeWrapper<Omit<TextContentEntries, 'block' | 'hyperlink' | 'inline'> & { block: Array<Maybe<ResolversTypes['Entry']>>, hyperlink: Array<Maybe<ResolversTypes['Entry']>>, inline: Array<Maybe<ResolversTypes['Entry']>> }>;
  TextContentLinks: ResolverTypeWrapper<Omit<TextContentLinks, 'assets' | 'entries'> & { assets: ResolversTypes['TextContentAssets'], entries: ResolversTypes['TextContentEntries'] }>;
  TextContentResources: ResolverTypeWrapper<TextContentResources>;
  TextContentResourcesBlock: ResolverTypeWrapper<TextContentResourcesBlock>;
  TextContentResourcesHyperlink: ResolverTypeWrapper<TextContentResourcesHyperlink>;
  TextContentResourcesInline: ResolverTypeWrapper<TextContentResourcesInline>;
  TextFilter: TextFilter;
  TextLinkingCollections: ResolverTypeWrapper<Omit<TextLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  TextOrder: TextOrder;
  _Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['_Node']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Asset: Omit<Asset, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversParentTypes['AssetLinkingCollections']> };
  AssetCollection: AssetCollection;
  AssetFilter: AssetFilter;
  AssetLinkingCollections: Omit<AssetLinkingCollections, 'caseStudyCollection' | 'entryCollection' | 'projectCollection'> & { caseStudyCollection?: Maybe<ResolversParentTypes['CaseStudyCollection']>, entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>, projectCollection?: Maybe<ResolversParentTypes['ProjectCollection']> };
  Boolean: Scalars['Boolean']['output'];
  CaseStudy: Omit<CaseStudy, 'linkedFrom' | 'text'> & { linkedFrom?: Maybe<ResolversParentTypes['CaseStudyLinkingCollections']>, text?: Maybe<ResolversParentTypes['CaseStudyText']> };
  CaseStudyCollection: Omit<CaseStudyCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['CaseStudy']>> };
  CaseStudyFilter: CaseStudyFilter;
  CaseStudyLinkingCollections: Omit<CaseStudyLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  CaseStudyText: Omit<CaseStudyText, 'links'> & { links: ResolversParentTypes['CaseStudyTextLinks'] };
  CaseStudyTextAssets: CaseStudyTextAssets;
  CaseStudyTextEntries: Omit<CaseStudyTextEntries, 'block' | 'hyperlink' | 'inline'> & { block: Array<Maybe<ResolversParentTypes['Entry']>>, hyperlink: Array<Maybe<ResolversParentTypes['Entry']>>, inline: Array<Maybe<ResolversParentTypes['Entry']>> };
  CaseStudyTextLinks: Omit<CaseStudyTextLinks, 'assets' | 'entries'> & { assets: ResolversParentTypes['CaseStudyTextAssets'], entries: ResolversParentTypes['CaseStudyTextEntries'] };
  CaseStudyTextResources: CaseStudyTextResources;
  CaseStudyTextResourcesBlock: CaseStudyTextResourcesBlock;
  CaseStudyTextResourcesHyperlink: CaseStudyTextResourcesHyperlink;
  CaseStudyTextResourcesInline: CaseStudyTextResourcesInline;
  ContentfulMetadata: ContentfulMetadata;
  ContentfulMetadataConceptsDescendantsFilter: ContentfulMetadataConceptsDescendantsFilter;
  ContentfulMetadataConceptsFilter: ContentfulMetadataConceptsFilter;
  ContentfulMetadataFilter: ContentfulMetadataFilter;
  ContentfulMetadataTagsFilter: ContentfulMetadataTagsFilter;
  ContentfulTag: ContentfulTag;
  DateTime: Scalars['DateTime']['output'];
  Dimension: Scalars['Dimension']['output'];
  Entry: ResolversInterfaceTypes<ResolversParentTypes>['Entry'];
  EntryCollection: Omit<EntryCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Entry']>> };
  EntryFilter: EntryFilter;
  Experience: Omit<Experience, 'linkedFrom' | 'text'> & { linkedFrom?: Maybe<ResolversParentTypes['ExperienceLinkingCollections']>, text?: Maybe<ResolversParentTypes['ExperienceText']> };
  ExperienceCollection: Omit<ExperienceCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Experience']>> };
  ExperienceFilter: ExperienceFilter;
  ExperienceLinkingCollections: Omit<ExperienceLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  ExperienceText: Omit<ExperienceText, 'links'> & { links: ResolversParentTypes['ExperienceTextLinks'] };
  ExperienceTextAssets: ExperienceTextAssets;
  ExperienceTextEntries: Omit<ExperienceTextEntries, 'block' | 'hyperlink' | 'inline'> & { block: Array<Maybe<ResolversParentTypes['Entry']>>, hyperlink: Array<Maybe<ResolversParentTypes['Entry']>>, inline: Array<Maybe<ResolversParentTypes['Entry']>> };
  ExperienceTextLinks: Omit<ExperienceTextLinks, 'assets' | 'entries'> & { assets: ResolversParentTypes['ExperienceTextAssets'], entries: ResolversParentTypes['ExperienceTextEntries'] };
  ExperienceTextResources: ExperienceTextResources;
  ExperienceTextResourcesBlock: ExperienceTextResourcesBlock;
  ExperienceTextResourcesHyperlink: ExperienceTextResourcesHyperlink;
  ExperienceTextResourcesInline: ExperienceTextResourcesInline;
  Float: Scalars['Float']['output'];
  Header: Omit<Header, 'linkedFrom' | 'title'> & { linkedFrom?: Maybe<ResolversParentTypes['HeaderLinkingCollections']>, title?: Maybe<ResolversParentTypes['HeaderTitle']> };
  HeaderCollection: Omit<HeaderCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Header']>> };
  HeaderFilter: HeaderFilter;
  HeaderLinkingCollections: Omit<HeaderLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  HeaderTitle: Omit<HeaderTitle, 'links'> & { links: ResolversParentTypes['HeaderTitleLinks'] };
  HeaderTitleAssets: HeaderTitleAssets;
  HeaderTitleEntries: Omit<HeaderTitleEntries, 'block' | 'hyperlink' | 'inline'> & { block: Array<Maybe<ResolversParentTypes['Entry']>>, hyperlink: Array<Maybe<ResolversParentTypes['Entry']>>, inline: Array<Maybe<ResolversParentTypes['Entry']>> };
  HeaderTitleLinks: Omit<HeaderTitleLinks, 'assets' | 'entries'> & { assets: ResolversParentTypes['HeaderTitleAssets'], entries: ResolversParentTypes['HeaderTitleEntries'] };
  HeaderTitleResources: HeaderTitleResources;
  HeaderTitleResourcesBlock: HeaderTitleResourcesBlock;
  HeaderTitleResourcesHyperlink: HeaderTitleResourcesHyperlink;
  HeaderTitleResourcesInline: HeaderTitleResourcesInline;
  HexColor: Scalars['HexColor']['output'];
  ID: Scalars['ID']['output'];
  ImageTransformOptions: ImageTransformOptions;
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  Project: Omit<Project, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversParentTypes['ProjectLinkingCollections']> };
  ProjectCollection: Omit<ProjectCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Project']>> };
  ProjectFilter: ProjectFilter;
  ProjectLinkingCollections: Omit<ProjectLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  Quality: Scalars['Quality']['output'];
  Query: {};
  ResourceLink: ResolversInterfaceTypes<ResolversParentTypes>['ResourceLink'];
  ResourceSys: ResourceSys;
  String: Scalars['String']['output'];
  Sys: Sys;
  SysFilter: SysFilter;
  TaxonomyConcept: TaxonomyConcept;
  Text: Omit<Text, 'content' | 'linkedFrom'> & { content?: Maybe<ResolversParentTypes['TextContent']>, linkedFrom?: Maybe<ResolversParentTypes['TextLinkingCollections']> };
  TextCollection: Omit<TextCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Text']>> };
  TextContent: Omit<TextContent, 'links'> & { links: ResolversParentTypes['TextContentLinks'] };
  TextContentAssets: TextContentAssets;
  TextContentEntries: Omit<TextContentEntries, 'block' | 'hyperlink' | 'inline'> & { block: Array<Maybe<ResolversParentTypes['Entry']>>, hyperlink: Array<Maybe<ResolversParentTypes['Entry']>>, inline: Array<Maybe<ResolversParentTypes['Entry']>> };
  TextContentLinks: Omit<TextContentLinks, 'assets' | 'entries'> & { assets: ResolversParentTypes['TextContentAssets'], entries: ResolversParentTypes['TextContentEntries'] };
  TextContentResources: TextContentResources;
  TextContentResourcesBlock: TextContentResourcesBlock;
  TextContentResourcesHyperlink: TextContentResourcesHyperlink;
  TextContentResourcesInline: TextContentResourcesInline;
  TextFilter: TextFilter;
  TextLinkingCollections: Omit<TextLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  _Node: ResolversInterfaceTypes<ResolversParentTypes>['_Node'];
};

export type ContentSourceMapsDirectiveArgs = { };

export type ContentSourceMapsDirectiveResolver<Result, Parent, ContextType = any, Args = ContentSourceMapsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetContentTypeArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetDescriptionArgs>>;
  fileName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetFileNameArgs>>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<AssetHeightArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['AssetLinkingCollections']>, ParentType, ContextType, Partial<AssetLinkedFromArgs>>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<AssetSizeArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetTitleArgs>>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AssetUrlArgs>>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<AssetWidthArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetCollection'] = ResolversParentTypes['AssetCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetLinkingCollections'] = ResolversParentTypes['AssetLinkingCollections']> = {
  caseStudyCollection?: Resolver<Maybe<ResolversTypes['CaseStudyCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsCaseStudyCollectionArgs, 'limit' | 'skip'>>;
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  projectCollection?: Resolver<Maybe<ResolversTypes['ProjectCollection']>, ParentType, ContextType, RequireFields<AssetLinkingCollectionsProjectCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CaseStudyResolvers<ContextType = any, ParentType extends ResolversParentTypes['CaseStudy'] = ResolversParentTypes['CaseStudy']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  assets?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<CaseStudyAssetsArgs>>;
  client?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<CaseStudyClientArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<CaseStudyDateArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['CaseStudyLinkingCollections']>, ParentType, ContextType, Partial<CaseStudyLinkedFromArgs>>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<CaseStudyOrderArgs>>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<CaseStudySlugArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType, Partial<CaseStudyTagsArgs>>;
  text?: Resolver<Maybe<ResolversTypes['CaseStudyText']>, ParentType, ContextType, Partial<CaseStudyTextArgs>>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<CaseStudyTitleArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CaseStudyCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CaseStudyCollection'] = ResolversParentTypes['CaseStudyCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['CaseStudy']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CaseStudyLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CaseStudyLinkingCollections'] = ResolversParentTypes['CaseStudyLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<CaseStudyLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CaseStudyTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['CaseStudyText'] = ResolversParentTypes['CaseStudyText']> = {
  json?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  links?: Resolver<ResolversTypes['CaseStudyTextLinks'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CaseStudyTextAssetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CaseStudyTextAssets'] = ResolversParentTypes['CaseStudyTextAssets']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CaseStudyTextEntriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['CaseStudyTextEntries'] = ResolversParentTypes['CaseStudyTextEntries']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  inline?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CaseStudyTextLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['CaseStudyTextLinks'] = ResolversParentTypes['CaseStudyTextLinks']> = {
  assets?: Resolver<ResolversTypes['CaseStudyTextAssets'], ParentType, ContextType>;
  entries?: Resolver<ResolversTypes['CaseStudyTextEntries'], ParentType, ContextType>;
  resources?: Resolver<ResolversTypes['CaseStudyTextResources'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CaseStudyTextResourcesResolvers<ContextType = any, ParentType extends ResolversParentTypes['CaseStudyTextResources'] = ResolversParentTypes['CaseStudyTextResources']> = {
  block?: Resolver<Array<ResolversTypes['CaseStudyTextResourcesBlock']>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<ResolversTypes['CaseStudyTextResourcesHyperlink']>, ParentType, ContextType>;
  inline?: Resolver<Array<ResolversTypes['CaseStudyTextResourcesInline']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CaseStudyTextResourcesBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['CaseStudyTextResourcesBlock'] = ResolversParentTypes['CaseStudyTextResourcesBlock']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CaseStudyTextResourcesHyperlinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['CaseStudyTextResourcesHyperlink'] = ResolversParentTypes['CaseStudyTextResourcesHyperlink']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CaseStudyTextResourcesInlineResolvers<ContextType = any, ParentType extends ResolversParentTypes['CaseStudyTextResourcesInline'] = ResolversParentTypes['CaseStudyTextResourcesInline']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulMetadata'] = ResolversParentTypes['ContentfulMetadata']> = {
  concepts?: Resolver<Array<Maybe<ResolversTypes['TaxonomyConcept']>>, ParentType, ContextType>;
  tags?: Resolver<Array<Maybe<ResolversTypes['ContentfulTag']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentfulTagResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentfulTag'] = ResolversParentTypes['ContentfulTag']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface DimensionScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Dimension'], any> {
  name: 'Dimension';
}

export type EntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entry'] = ResolversParentTypes['Entry']> = {
  __resolveType: TypeResolveFn<'CaseStudy' | 'Experience' | 'Header' | 'Project' | 'Text', ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
};

export type EntryCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EntryCollection'] = ResolversParentTypes['EntryCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExperienceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Experience'] = ResolversParentTypes['Experience']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ExperienceDateArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ExperienceLinkingCollections']>, ParentType, ContextType, Partial<ExperienceLinkedFromArgs>>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<ExperienceOrderArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['ExperienceText']>, ParentType, ContextType, Partial<ExperienceTextArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExperienceCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperienceCollection'] = ResolversParentTypes['ExperienceCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Experience']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExperienceLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperienceLinkingCollections'] = ResolversParentTypes['ExperienceLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ExperienceLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExperienceTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperienceText'] = ResolversParentTypes['ExperienceText']> = {
  json?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  links?: Resolver<ResolversTypes['ExperienceTextLinks'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExperienceTextAssetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperienceTextAssets'] = ResolversParentTypes['ExperienceTextAssets']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExperienceTextEntriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperienceTextEntries'] = ResolversParentTypes['ExperienceTextEntries']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  inline?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExperienceTextLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperienceTextLinks'] = ResolversParentTypes['ExperienceTextLinks']> = {
  assets?: Resolver<ResolversTypes['ExperienceTextAssets'], ParentType, ContextType>;
  entries?: Resolver<ResolversTypes['ExperienceTextEntries'], ParentType, ContextType>;
  resources?: Resolver<ResolversTypes['ExperienceTextResources'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExperienceTextResourcesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperienceTextResources'] = ResolversParentTypes['ExperienceTextResources']> = {
  block?: Resolver<Array<ResolversTypes['ExperienceTextResourcesBlock']>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<ResolversTypes['ExperienceTextResourcesHyperlink']>, ParentType, ContextType>;
  inline?: Resolver<Array<ResolversTypes['ExperienceTextResourcesInline']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExperienceTextResourcesBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperienceTextResourcesBlock'] = ResolversParentTypes['ExperienceTextResourcesBlock']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExperienceTextResourcesHyperlinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperienceTextResourcesHyperlink'] = ResolversParentTypes['ExperienceTextResourcesHyperlink']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExperienceTextResourcesInlineResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperienceTextResourcesInline'] = ResolversParentTypes['ExperienceTextResourcesInline']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeaderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Header'] = ResolversParentTypes['Header']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  info?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType, Partial<HeaderInfoArgs>>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['HeaderLinkingCollections']>, ParentType, ContextType, Partial<HeaderLinkedFromArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['HeaderTitle']>, ParentType, ContextType, Partial<HeaderTitleArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeaderCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeaderCollection'] = ResolversParentTypes['HeaderCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Header']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeaderLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeaderLinkingCollections'] = ResolversParentTypes['HeaderLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<HeaderLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeaderTitleResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeaderTitle'] = ResolversParentTypes['HeaderTitle']> = {
  json?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  links?: Resolver<ResolversTypes['HeaderTitleLinks'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeaderTitleAssetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeaderTitleAssets'] = ResolversParentTypes['HeaderTitleAssets']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeaderTitleEntriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeaderTitleEntries'] = ResolversParentTypes['HeaderTitleEntries']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  inline?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeaderTitleLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeaderTitleLinks'] = ResolversParentTypes['HeaderTitleLinks']> = {
  assets?: Resolver<ResolversTypes['HeaderTitleAssets'], ParentType, ContextType>;
  entries?: Resolver<ResolversTypes['HeaderTitleEntries'], ParentType, ContextType>;
  resources?: Resolver<ResolversTypes['HeaderTitleResources'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeaderTitleResourcesResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeaderTitleResources'] = ResolversParentTypes['HeaderTitleResources']> = {
  block?: Resolver<Array<ResolversTypes['HeaderTitleResourcesBlock']>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<ResolversTypes['HeaderTitleResourcesHyperlink']>, ParentType, ContextType>;
  inline?: Resolver<Array<ResolversTypes['HeaderTitleResourcesInline']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeaderTitleResourcesBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeaderTitleResourcesBlock'] = ResolversParentTypes['HeaderTitleResourcesBlock']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeaderTitleResourcesHyperlinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeaderTitleResourcesHyperlink'] = ResolversParentTypes['HeaderTitleResourcesHyperlink']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeaderTitleResourcesInlineResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeaderTitleResourcesInline'] = ResolversParentTypes['HeaderTitleResourcesInline']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface HexColorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HexColor'], any> {
  name: 'HexColor';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, Partial<ProjectAssetArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['ProjectLinkingCollections']>, ParentType, ContextType, Partial<ProjectLinkedFromArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<ProjectTitleArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectCollection'] = ResolversParentTypes['ProjectCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Project']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectLinkingCollections'] = ResolversParentTypes['ProjectLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<ProjectLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface QualityScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Quality'], any> {
  name: 'Quality';
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _node?: Resolver<Maybe<ResolversTypes['_Node']>, ParentType, ContextType, RequireFields<Query_NodeArgs, 'id'>>;
  _nodes?: Resolver<Array<Maybe<ResolversTypes['_Node']>>, ParentType, ContextType, RequireFields<Query_NodesArgs, 'ids'>>;
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryAssetArgs, 'id'>>;
  assetCollection?: Resolver<Maybe<ResolversTypes['AssetCollection']>, ParentType, ContextType, RequireFields<QueryAssetCollectionArgs, 'limit' | 'skip'>>;
  caseStudy?: Resolver<Maybe<ResolversTypes['CaseStudy']>, ParentType, ContextType, RequireFields<QueryCaseStudyArgs, 'id'>>;
  caseStudyCollection?: Resolver<Maybe<ResolversTypes['CaseStudyCollection']>, ParentType, ContextType, RequireFields<QueryCaseStudyCollectionArgs, 'limit' | 'skip'>>;
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<QueryEntryCollectionArgs, 'limit' | 'skip'>>;
  experience?: Resolver<Maybe<ResolversTypes['Experience']>, ParentType, ContextType, RequireFields<QueryExperienceArgs, 'id'>>;
  experienceCollection?: Resolver<Maybe<ResolversTypes['ExperienceCollection']>, ParentType, ContextType, RequireFields<QueryExperienceCollectionArgs, 'limit' | 'skip'>>;
  header?: Resolver<Maybe<ResolversTypes['Header']>, ParentType, ContextType, RequireFields<QueryHeaderArgs, 'id'>>;
  headerCollection?: Resolver<Maybe<ResolversTypes['HeaderCollection']>, ParentType, ContextType, RequireFields<QueryHeaderCollectionArgs, 'limit' | 'skip'>>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryProjectArgs, 'id'>>;
  projectCollection?: Resolver<Maybe<ResolversTypes['ProjectCollection']>, ParentType, ContextType, RequireFields<QueryProjectCollectionArgs, 'limit' | 'skip'>>;
  text?: Resolver<Maybe<ResolversTypes['Text']>, ParentType, ContextType, RequireFields<QueryTextArgs, 'id'>>;
  textCollection?: Resolver<Maybe<ResolversTypes['TextCollection']>, ParentType, ContextType, RequireFields<QueryTextCollectionArgs, 'limit' | 'skip'>>;
};

export type ResourceLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceLink'] = ResolversParentTypes['ResourceLink']> = {
  __resolveType: TypeResolveFn<'CaseStudyTextResourcesBlock' | 'CaseStudyTextResourcesHyperlink' | 'CaseStudyTextResourcesInline' | 'ExperienceTextResourcesBlock' | 'ExperienceTextResourcesHyperlink' | 'ExperienceTextResourcesInline' | 'HeaderTitleResourcesBlock' | 'HeaderTitleResourcesHyperlink' | 'HeaderTitleResourcesInline' | 'TextContentResourcesBlock' | 'TextContentResourcesHyperlink' | 'TextContentResourcesInline', ParentType, ContextType>;
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
};

export type ResourceSysResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceSys'] = ResolversParentTypes['ResourceSys']> = {
  linkType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  urn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SysResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sys'] = ResolversParentTypes['Sys']> = {
  environmentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstPublishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedVersion?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  spaceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaxonomyConceptResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaxonomyConcept'] = ResolversParentTypes['TaxonomyConcept']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TextResolvers<ContextType = any, ParentType extends ResolversParentTypes['Text'] = ResolversParentTypes['Text']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['TextContent']>, ParentType, ContextType, Partial<TextContentArgs>>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['TextLinkingCollections']>, ParentType, ContextType, Partial<TextLinkedFromArgs>>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<TextReferenceArgs>>;
  secondaryFont?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<TextSecondaryFontArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType, Partial<TextTagsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TextCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TextCollection'] = ResolversParentTypes['TextCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Text']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TextContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['TextContent'] = ResolversParentTypes['TextContent']> = {
  json?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  links?: Resolver<ResolversTypes['TextContentLinks'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TextContentAssetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TextContentAssets'] = ResolversParentTypes['TextContentAssets']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TextContentEntriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['TextContentEntries'] = ResolversParentTypes['TextContentEntries']> = {
  block?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  inline?: Resolver<Array<Maybe<ResolversTypes['Entry']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TextContentLinksResolvers<ContextType = any, ParentType extends ResolversParentTypes['TextContentLinks'] = ResolversParentTypes['TextContentLinks']> = {
  assets?: Resolver<ResolversTypes['TextContentAssets'], ParentType, ContextType>;
  entries?: Resolver<ResolversTypes['TextContentEntries'], ParentType, ContextType>;
  resources?: Resolver<ResolversTypes['TextContentResources'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TextContentResourcesResolvers<ContextType = any, ParentType extends ResolversParentTypes['TextContentResources'] = ResolversParentTypes['TextContentResources']> = {
  block?: Resolver<Array<ResolversTypes['TextContentResourcesBlock']>, ParentType, ContextType>;
  hyperlink?: Resolver<Array<ResolversTypes['TextContentResourcesHyperlink']>, ParentType, ContextType>;
  inline?: Resolver<Array<ResolversTypes['TextContentResourcesInline']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TextContentResourcesBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['TextContentResourcesBlock'] = ResolversParentTypes['TextContentResourcesBlock']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TextContentResourcesHyperlinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['TextContentResourcesHyperlink'] = ResolversParentTypes['TextContentResourcesHyperlink']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TextContentResourcesInlineResolvers<ContextType = any, ParentType extends ResolversParentTypes['TextContentResourcesInline'] = ResolversParentTypes['TextContentResourcesInline']> = {
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TextLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TextLinkingCollections'] = ResolversParentTypes['TextLinkingCollections']> = {
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<TextLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Node'] = ResolversParentTypes['_Node']> = {
  __resolveType: TypeResolveFn<'CaseStudy' | 'Experience' | 'Header' | 'Project' | 'Text', ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Asset?: AssetResolvers<ContextType>;
  AssetCollection?: AssetCollectionResolvers<ContextType>;
  AssetLinkingCollections?: AssetLinkingCollectionsResolvers<ContextType>;
  CaseStudy?: CaseStudyResolvers<ContextType>;
  CaseStudyCollection?: CaseStudyCollectionResolvers<ContextType>;
  CaseStudyLinkingCollections?: CaseStudyLinkingCollectionsResolvers<ContextType>;
  CaseStudyText?: CaseStudyTextResolvers<ContextType>;
  CaseStudyTextAssets?: CaseStudyTextAssetsResolvers<ContextType>;
  CaseStudyTextEntries?: CaseStudyTextEntriesResolvers<ContextType>;
  CaseStudyTextLinks?: CaseStudyTextLinksResolvers<ContextType>;
  CaseStudyTextResources?: CaseStudyTextResourcesResolvers<ContextType>;
  CaseStudyTextResourcesBlock?: CaseStudyTextResourcesBlockResolvers<ContextType>;
  CaseStudyTextResourcesHyperlink?: CaseStudyTextResourcesHyperlinkResolvers<ContextType>;
  CaseStudyTextResourcesInline?: CaseStudyTextResourcesInlineResolvers<ContextType>;
  ContentfulMetadata?: ContentfulMetadataResolvers<ContextType>;
  ContentfulTag?: ContentfulTagResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Dimension?: GraphQLScalarType;
  Entry?: EntryResolvers<ContextType>;
  EntryCollection?: EntryCollectionResolvers<ContextType>;
  Experience?: ExperienceResolvers<ContextType>;
  ExperienceCollection?: ExperienceCollectionResolvers<ContextType>;
  ExperienceLinkingCollections?: ExperienceLinkingCollectionsResolvers<ContextType>;
  ExperienceText?: ExperienceTextResolvers<ContextType>;
  ExperienceTextAssets?: ExperienceTextAssetsResolvers<ContextType>;
  ExperienceTextEntries?: ExperienceTextEntriesResolvers<ContextType>;
  ExperienceTextLinks?: ExperienceTextLinksResolvers<ContextType>;
  ExperienceTextResources?: ExperienceTextResourcesResolvers<ContextType>;
  ExperienceTextResourcesBlock?: ExperienceTextResourcesBlockResolvers<ContextType>;
  ExperienceTextResourcesHyperlink?: ExperienceTextResourcesHyperlinkResolvers<ContextType>;
  ExperienceTextResourcesInline?: ExperienceTextResourcesInlineResolvers<ContextType>;
  Header?: HeaderResolvers<ContextType>;
  HeaderCollection?: HeaderCollectionResolvers<ContextType>;
  HeaderLinkingCollections?: HeaderLinkingCollectionsResolvers<ContextType>;
  HeaderTitle?: HeaderTitleResolvers<ContextType>;
  HeaderTitleAssets?: HeaderTitleAssetsResolvers<ContextType>;
  HeaderTitleEntries?: HeaderTitleEntriesResolvers<ContextType>;
  HeaderTitleLinks?: HeaderTitleLinksResolvers<ContextType>;
  HeaderTitleResources?: HeaderTitleResourcesResolvers<ContextType>;
  HeaderTitleResourcesBlock?: HeaderTitleResourcesBlockResolvers<ContextType>;
  HeaderTitleResourcesHyperlink?: HeaderTitleResourcesHyperlinkResolvers<ContextType>;
  HeaderTitleResourcesInline?: HeaderTitleResourcesInlineResolvers<ContextType>;
  HexColor?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  Project?: ProjectResolvers<ContextType>;
  ProjectCollection?: ProjectCollectionResolvers<ContextType>;
  ProjectLinkingCollections?: ProjectLinkingCollectionsResolvers<ContextType>;
  Quality?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  ResourceLink?: ResourceLinkResolvers<ContextType>;
  ResourceSys?: ResourceSysResolvers<ContextType>;
  Sys?: SysResolvers<ContextType>;
  TaxonomyConcept?: TaxonomyConceptResolvers<ContextType>;
  Text?: TextResolvers<ContextType>;
  TextCollection?: TextCollectionResolvers<ContextType>;
  TextContent?: TextContentResolvers<ContextType>;
  TextContentAssets?: TextContentAssetsResolvers<ContextType>;
  TextContentEntries?: TextContentEntriesResolvers<ContextType>;
  TextContentLinks?: TextContentLinksResolvers<ContextType>;
  TextContentResources?: TextContentResourcesResolvers<ContextType>;
  TextContentResourcesBlock?: TextContentResourcesBlockResolvers<ContextType>;
  TextContentResourcesHyperlink?: TextContentResourcesHyperlinkResolvers<ContextType>;
  TextContentResourcesInline?: TextContentResourcesInlineResolvers<ContextType>;
  TextLinkingCollections?: TextLinkingCollectionsResolvers<ContextType>;
  _Node?: _NodeResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  contentSourceMaps?: ContentSourceMapsDirectiveResolver<any, any, ContextType>;
};

export type GetCaseStudyQueryVariables = Exact<{
  where?: InputMaybe<CaseStudyFilter>;
}>;


export type GetCaseStudyQuery = { __typename: 'Query', caseStudyCollection?: { __typename: 'CaseStudyCollection', items: Array<{ __typename: 'CaseStudy', title?: string | null, date?: string | null } | null> } | null };

export type GetCaseStudyCollectionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCaseStudyCollectionQuery = { __typename: 'Query', caseStudyCollection?: { __typename: 'CaseStudyCollection', items: Array<{ __typename: 'CaseStudy', _id: string, slug?: string | null, title?: string | null, order?: number | null, date?: string | null, tags?: Array<string | null> | null, text?: { __typename: 'CaseStudyText', json: any } | null, assets?: { __typename: 'Asset', url?: string | null } | null } | null> } | null };

export type GetExperienceCollectionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExperienceCollectionQuery = { __typename: 'Query', experienceCollection?: { __typename: 'ExperienceCollection', items: Array<{ __typename: 'Experience', _id: string, date?: string | null, order?: number | null, text?: { __typename: 'ExperienceText', json: any } | null } | null> } | null };

export type GetHeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHeaderQuery = { __typename: 'Query', header?: { __typename: 'Header', info?: Array<string | null> | null, title?: { __typename: 'HeaderTitle', json: any } | null } | null };

export type GetProjectCollectionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProjectCollectionQuery = { __typename: 'Query', projectCollection?: { __typename: 'ProjectCollection', items: Array<{ __typename: 'Project', _id: string, title?: string | null, asset?: { __typename: 'Asset', url?: string | null } | null } | null> } | null };

export type GetTextQueryQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetTextQueryQuery = { __typename: 'Query', text?: { __typename: 'Text', tags?: Array<string | null> | null, content?: { __typename: 'TextContent', json: any } | null } | null };


export const GetCaseStudyDocument = gql`
    query GetCaseStudy($where: CaseStudyFilter) {
  caseStudyCollection(where: $where) {
    items {
      title
      date
    }
  }
}
    `;

/**
 * __useGetCaseStudyQuery__
 *
 * To run a query within a React component, call `useGetCaseStudyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCaseStudyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCaseStudyQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetCaseStudyQuery(baseOptions?: Apollo.QueryHookOptions<GetCaseStudyQuery, GetCaseStudyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCaseStudyQuery, GetCaseStudyQueryVariables>(GetCaseStudyDocument, options);
      }
export function useGetCaseStudyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCaseStudyQuery, GetCaseStudyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCaseStudyQuery, GetCaseStudyQueryVariables>(GetCaseStudyDocument, options);
        }
export function useGetCaseStudySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCaseStudyQuery, GetCaseStudyQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCaseStudyQuery, GetCaseStudyQueryVariables>(GetCaseStudyDocument, options);
        }
export type GetCaseStudyQueryHookResult = ReturnType<typeof useGetCaseStudyQuery>;
export type GetCaseStudyLazyQueryHookResult = ReturnType<typeof useGetCaseStudyLazyQuery>;
export type GetCaseStudySuspenseQueryHookResult = ReturnType<typeof useGetCaseStudySuspenseQuery>;
export type GetCaseStudyQueryResult = Apollo.QueryResult<GetCaseStudyQuery, GetCaseStudyQueryVariables>;
export const GetCaseStudyCollectionDocument = gql`
    query GetCaseStudyCollection {
  caseStudyCollection {
    items {
      _id
      slug
      text {
        json
      }
      title
      assets {
        url
      }
      order
      date
      tags
    }
  }
}
    `;

/**
 * __useGetCaseStudyCollectionQuery__
 *
 * To run a query within a React component, call `useGetCaseStudyCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCaseStudyCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCaseStudyCollectionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCaseStudyCollectionQuery(baseOptions?: Apollo.QueryHookOptions<GetCaseStudyCollectionQuery, GetCaseStudyCollectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCaseStudyCollectionQuery, GetCaseStudyCollectionQueryVariables>(GetCaseStudyCollectionDocument, options);
      }
export function useGetCaseStudyCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCaseStudyCollectionQuery, GetCaseStudyCollectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCaseStudyCollectionQuery, GetCaseStudyCollectionQueryVariables>(GetCaseStudyCollectionDocument, options);
        }
export function useGetCaseStudyCollectionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCaseStudyCollectionQuery, GetCaseStudyCollectionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCaseStudyCollectionQuery, GetCaseStudyCollectionQueryVariables>(GetCaseStudyCollectionDocument, options);
        }
export type GetCaseStudyCollectionQueryHookResult = ReturnType<typeof useGetCaseStudyCollectionQuery>;
export type GetCaseStudyCollectionLazyQueryHookResult = ReturnType<typeof useGetCaseStudyCollectionLazyQuery>;
export type GetCaseStudyCollectionSuspenseQueryHookResult = ReturnType<typeof useGetCaseStudyCollectionSuspenseQuery>;
export type GetCaseStudyCollectionQueryResult = Apollo.QueryResult<GetCaseStudyCollectionQuery, GetCaseStudyCollectionQueryVariables>;
export const GetExperienceCollectionDocument = gql`
    query getExperienceCollection {
  experienceCollection {
    items {
      _id
      date
      order
      text {
        json
      }
    }
  }
}
    `;

/**
 * __useGetExperienceCollectionQuery__
 *
 * To run a query within a React component, call `useGetExperienceCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExperienceCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExperienceCollectionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetExperienceCollectionQuery(baseOptions?: Apollo.QueryHookOptions<GetExperienceCollectionQuery, GetExperienceCollectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetExperienceCollectionQuery, GetExperienceCollectionQueryVariables>(GetExperienceCollectionDocument, options);
      }
export function useGetExperienceCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExperienceCollectionQuery, GetExperienceCollectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetExperienceCollectionQuery, GetExperienceCollectionQueryVariables>(GetExperienceCollectionDocument, options);
        }
export function useGetExperienceCollectionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetExperienceCollectionQuery, GetExperienceCollectionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetExperienceCollectionQuery, GetExperienceCollectionQueryVariables>(GetExperienceCollectionDocument, options);
        }
export type GetExperienceCollectionQueryHookResult = ReturnType<typeof useGetExperienceCollectionQuery>;
export type GetExperienceCollectionLazyQueryHookResult = ReturnType<typeof useGetExperienceCollectionLazyQuery>;
export type GetExperienceCollectionSuspenseQueryHookResult = ReturnType<typeof useGetExperienceCollectionSuspenseQuery>;
export type GetExperienceCollectionQueryResult = Apollo.QueryResult<GetExperienceCollectionQuery, GetExperienceCollectionQueryVariables>;
export const GetHeaderDocument = gql`
    query GetHeader {
  header(id: "2x4Lnj8AHPSBLc83Y0aHn6") {
    title {
      json
    }
    info
  }
}
    `;

/**
 * __useGetHeaderQuery__
 *
 * To run a query within a React component, call `useGetHeaderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHeaderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHeaderQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHeaderQuery(baseOptions?: Apollo.QueryHookOptions<GetHeaderQuery, GetHeaderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHeaderQuery, GetHeaderQueryVariables>(GetHeaderDocument, options);
      }
export function useGetHeaderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHeaderQuery, GetHeaderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHeaderQuery, GetHeaderQueryVariables>(GetHeaderDocument, options);
        }
export function useGetHeaderSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetHeaderQuery, GetHeaderQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetHeaderQuery, GetHeaderQueryVariables>(GetHeaderDocument, options);
        }
export type GetHeaderQueryHookResult = ReturnType<typeof useGetHeaderQuery>;
export type GetHeaderLazyQueryHookResult = ReturnType<typeof useGetHeaderLazyQuery>;
export type GetHeaderSuspenseQueryHookResult = ReturnType<typeof useGetHeaderSuspenseQuery>;
export type GetHeaderQueryResult = Apollo.QueryResult<GetHeaderQuery, GetHeaderQueryVariables>;
export const GetProjectCollectionDocument = gql`
    query GetProjectCollection {
  projectCollection {
    items {
      _id
      title
      asset {
        url
      }
    }
  }
}
    `;

/**
 * __useGetProjectCollectionQuery__
 *
 * To run a query within a React component, call `useGetProjectCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectCollectionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProjectCollectionQuery(baseOptions?: Apollo.QueryHookOptions<GetProjectCollectionQuery, GetProjectCollectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectCollectionQuery, GetProjectCollectionQueryVariables>(GetProjectCollectionDocument, options);
      }
export function useGetProjectCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectCollectionQuery, GetProjectCollectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectCollectionQuery, GetProjectCollectionQueryVariables>(GetProjectCollectionDocument, options);
        }
export function useGetProjectCollectionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProjectCollectionQuery, GetProjectCollectionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProjectCollectionQuery, GetProjectCollectionQueryVariables>(GetProjectCollectionDocument, options);
        }
export type GetProjectCollectionQueryHookResult = ReturnType<typeof useGetProjectCollectionQuery>;
export type GetProjectCollectionLazyQueryHookResult = ReturnType<typeof useGetProjectCollectionLazyQuery>;
export type GetProjectCollectionSuspenseQueryHookResult = ReturnType<typeof useGetProjectCollectionSuspenseQuery>;
export type GetProjectCollectionQueryResult = Apollo.QueryResult<GetProjectCollectionQuery, GetProjectCollectionQueryVariables>;
export const GetTextQueryDocument = gql`
    query GetTextQuery($id: String!) {
  text(id: $id) {
    content {
      json
    }
    tags
  }
}
    `;

/**
 * __useGetTextQueryQuery__
 *
 * To run a query within a React component, call `useGetTextQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTextQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTextQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTextQueryQuery(baseOptions: Apollo.QueryHookOptions<GetTextQueryQuery, GetTextQueryQueryVariables> & ({ variables: GetTextQueryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTextQueryQuery, GetTextQueryQueryVariables>(GetTextQueryDocument, options);
      }
export function useGetTextQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTextQueryQuery, GetTextQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTextQueryQuery, GetTextQueryQueryVariables>(GetTextQueryDocument, options);
        }
export function useGetTextQuerySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTextQueryQuery, GetTextQueryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTextQueryQuery, GetTextQueryQueryVariables>(GetTextQueryDocument, options);
        }
export type GetTextQueryQueryHookResult = ReturnType<typeof useGetTextQueryQuery>;
export type GetTextQueryLazyQueryHookResult = ReturnType<typeof useGetTextQueryLazyQuery>;
export type GetTextQuerySuspenseQueryHookResult = ReturnType<typeof useGetTextQuerySuspenseQuery>;
export type GetTextQueryQueryResult = Apollo.QueryResult<GetTextQueryQuery, GetTextQueryQueryVariables>;