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
  linkedFrom?: Maybe<CaseStudyLinkingCollections>;
  skillsCollection?: Maybe<CaseStudySkillsCollection>;
  sys: Sys;
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
export type CaseStudyLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/caseStudy) */
export type CaseStudySkillsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CaseStudySkillsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SkillFilter>;
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
  skills?: InputMaybe<CfSkillNestedFilter>;
  skillsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
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

export type CaseStudySkillsCollection = {
  __typename: 'CaseStudySkillsCollection';
  items: Array<Maybe<Skill>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum CaseStudySkillsCollectionOrder {
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
  project?: Maybe<Project>;
  projectCollection?: Maybe<ProjectCollection>;
  skill?: Maybe<Skill>;
  skillCollection?: Maybe<SkillCollection>;
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


export type QuerySkillArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySkillCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SkillOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SkillFilter>;
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

/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/skill) */
export type Skill = Entry & _Node & {
  __typename: 'Skill';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SkillLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/skill) */
export type SkillLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/bvolcybk2xx6/content_types/skill) */
export type SkillTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SkillCollection = {
  __typename: 'SkillCollection';
  items: Array<Maybe<Skill>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SkillFilter = {
  AND?: InputMaybe<Array<InputMaybe<SkillFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SkillFilter>>>;
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

export type SkillLinkingCollections = {
  __typename: 'SkillLinkingCollections';
  caseStudyCollection?: Maybe<CaseStudyCollection>;
  entryCollection?: Maybe<EntryCollection>;
  textCollection?: Maybe<TextCollection>;
};


export type SkillLinkingCollectionsCaseStudyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SkillLinkingCollectionsCaseStudyCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SkillLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SkillLinkingCollectionsTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SkillLinkingCollectionsTextCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SkillLinkingCollectionsCaseStudyCollectionOrder {
  ClientAsc = 'client_ASC',
  ClientDesc = 'client_DESC',
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

export enum SkillLinkingCollectionsTextCollectionOrder {
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

export enum SkillOrder {
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
  skillsCollection?: Maybe<TextSkillsCollection>;
  sys: Sys;
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
export type TextSkillsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextSkillsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SkillFilter>;
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
  skills?: InputMaybe<CfSkillNestedFilter>;
  skillsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
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

export type TextSkillsCollection = {
  __typename: 'TextSkillsCollection';
  items: Array<Maybe<Skill>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum TextSkillsCollectionOrder {
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

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfSkillNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSkillNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSkillNestedFilter>>>;
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
  Entry: ( Omit<CaseStudy, 'linkedFrom' | 'skillsCollection' | 'text'> & { linkedFrom?: Maybe<_RefType['CaseStudyLinkingCollections']>, skillsCollection?: Maybe<_RefType['CaseStudySkillsCollection']>, text?: Maybe<_RefType['CaseStudyText']> } ) | ( Omit<Project, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['ProjectLinkingCollections']> } ) | ( Omit<Skill, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['SkillLinkingCollections']> } ) | ( Omit<Text, 'content' | 'linkedFrom' | 'skillsCollection'> & { content?: Maybe<_RefType['TextContent']>, linkedFrom?: Maybe<_RefType['TextLinkingCollections']>, skillsCollection?: Maybe<_RefType['TextSkillsCollection']> } );
  ResourceLink: ( CaseStudyTextResourcesBlock ) | ( CaseStudyTextResourcesHyperlink ) | ( CaseStudyTextResourcesInline ) | ( TextContentResourcesBlock ) | ( TextContentResourcesHyperlink ) | ( TextContentResourcesInline );
  _Node: ( Omit<CaseStudy, 'linkedFrom' | 'skillsCollection' | 'text'> & { linkedFrom?: Maybe<_RefType['CaseStudyLinkingCollections']>, skillsCollection?: Maybe<_RefType['CaseStudySkillsCollection']>, text?: Maybe<_RefType['CaseStudyText']> } ) | ( Omit<Project, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['ProjectLinkingCollections']> } ) | ( Omit<Skill, 'linkedFrom'> & { linkedFrom?: Maybe<_RefType['SkillLinkingCollections']> } ) | ( Omit<Text, 'content' | 'linkedFrom' | 'skillsCollection'> & { content?: Maybe<_RefType['TextContent']>, linkedFrom?: Maybe<_RefType['TextLinkingCollections']>, skillsCollection?: Maybe<_RefType['TextSkillsCollection']> } );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Asset: ResolverTypeWrapper<Omit<Asset, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversTypes['AssetLinkingCollections']> }>;
  AssetCollection: ResolverTypeWrapper<AssetCollection>;
  AssetFilter: AssetFilter;
  AssetLinkingCollections: ResolverTypeWrapper<Omit<AssetLinkingCollections, 'caseStudyCollection' | 'entryCollection' | 'projectCollection'> & { caseStudyCollection?: Maybe<ResolversTypes['CaseStudyCollection']>, entryCollection?: Maybe<ResolversTypes['EntryCollection']>, projectCollection?: Maybe<ResolversTypes['ProjectCollection']> }>;
  AssetOrder: AssetOrder;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CaseStudy: ResolverTypeWrapper<Omit<CaseStudy, 'linkedFrom' | 'skillsCollection' | 'text'> & { linkedFrom?: Maybe<ResolversTypes['CaseStudyLinkingCollections']>, skillsCollection?: Maybe<ResolversTypes['CaseStudySkillsCollection']>, text?: Maybe<ResolversTypes['CaseStudyText']> }>;
  CaseStudyCollection: ResolverTypeWrapper<Omit<CaseStudyCollection, 'items'> & { items: Array<Maybe<ResolversTypes['CaseStudy']>> }>;
  CaseStudyFilter: CaseStudyFilter;
  CaseStudyLinkingCollections: ResolverTypeWrapper<Omit<CaseStudyLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversTypes['EntryCollection']> }>;
  CaseStudyOrder: CaseStudyOrder;
  CaseStudySkillsCollection: ResolverTypeWrapper<Omit<CaseStudySkillsCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Skill']>> }>;
  CaseStudySkillsCollectionOrder: CaseStudySkillsCollectionOrder;
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
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
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
  Skill: ResolverTypeWrapper<Omit<Skill, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversTypes['SkillLinkingCollections']> }>;
  SkillCollection: ResolverTypeWrapper<Omit<SkillCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Skill']>> }>;
  SkillFilter: SkillFilter;
  SkillLinkingCollections: ResolverTypeWrapper<Omit<SkillLinkingCollections, 'caseStudyCollection' | 'entryCollection' | 'textCollection'> & { caseStudyCollection?: Maybe<ResolversTypes['CaseStudyCollection']>, entryCollection?: Maybe<ResolversTypes['EntryCollection']>, textCollection?: Maybe<ResolversTypes['TextCollection']> }>;
  SkillLinkingCollectionsCaseStudyCollectionOrder: SkillLinkingCollectionsCaseStudyCollectionOrder;
  SkillLinkingCollectionsTextCollectionOrder: SkillLinkingCollectionsTextCollectionOrder;
  SkillOrder: SkillOrder;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Sys: ResolverTypeWrapper<Sys>;
  SysFilter: SysFilter;
  TaxonomyConcept: ResolverTypeWrapper<TaxonomyConcept>;
  Text: ResolverTypeWrapper<Omit<Text, 'content' | 'linkedFrom' | 'skillsCollection'> & { content?: Maybe<ResolversTypes['TextContent']>, linkedFrom?: Maybe<ResolversTypes['TextLinkingCollections']>, skillsCollection?: Maybe<ResolversTypes['TextSkillsCollection']> }>;
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
  TextSkillsCollection: ResolverTypeWrapper<Omit<TextSkillsCollection, 'items'> & { items: Array<Maybe<ResolversTypes['Skill']>> }>;
  TextSkillsCollectionOrder: TextSkillsCollectionOrder;
  _Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['_Node']>;
  cfSkillNestedFilter: CfSkillNestedFilter;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Asset: Omit<Asset, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversParentTypes['AssetLinkingCollections']> };
  AssetCollection: AssetCollection;
  AssetFilter: AssetFilter;
  AssetLinkingCollections: Omit<AssetLinkingCollections, 'caseStudyCollection' | 'entryCollection' | 'projectCollection'> & { caseStudyCollection?: Maybe<ResolversParentTypes['CaseStudyCollection']>, entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>, projectCollection?: Maybe<ResolversParentTypes['ProjectCollection']> };
  Boolean: Scalars['Boolean']['output'];
  CaseStudy: Omit<CaseStudy, 'linkedFrom' | 'skillsCollection' | 'text'> & { linkedFrom?: Maybe<ResolversParentTypes['CaseStudyLinkingCollections']>, skillsCollection?: Maybe<ResolversParentTypes['CaseStudySkillsCollection']>, text?: Maybe<ResolversParentTypes['CaseStudyText']> };
  CaseStudyCollection: Omit<CaseStudyCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['CaseStudy']>> };
  CaseStudyFilter: CaseStudyFilter;
  CaseStudyLinkingCollections: Omit<CaseStudyLinkingCollections, 'entryCollection'> & { entryCollection?: Maybe<ResolversParentTypes['EntryCollection']> };
  CaseStudySkillsCollection: Omit<CaseStudySkillsCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Skill']>> };
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
  Float: Scalars['Float']['output'];
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
  Skill: Omit<Skill, 'linkedFrom'> & { linkedFrom?: Maybe<ResolversParentTypes['SkillLinkingCollections']> };
  SkillCollection: Omit<SkillCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Skill']>> };
  SkillFilter: SkillFilter;
  SkillLinkingCollections: Omit<SkillLinkingCollections, 'caseStudyCollection' | 'entryCollection' | 'textCollection'> & { caseStudyCollection?: Maybe<ResolversParentTypes['CaseStudyCollection']>, entryCollection?: Maybe<ResolversParentTypes['EntryCollection']>, textCollection?: Maybe<ResolversParentTypes['TextCollection']> };
  String: Scalars['String']['output'];
  Sys: Sys;
  SysFilter: SysFilter;
  TaxonomyConcept: TaxonomyConcept;
  Text: Omit<Text, 'content' | 'linkedFrom' | 'skillsCollection'> & { content?: Maybe<ResolversParentTypes['TextContent']>, linkedFrom?: Maybe<ResolversParentTypes['TextLinkingCollections']>, skillsCollection?: Maybe<ResolversParentTypes['TextSkillsCollection']> };
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
  TextSkillsCollection: Omit<TextSkillsCollection, 'items'> & { items: Array<Maybe<ResolversParentTypes['Skill']>> };
  _Node: ResolversInterfaceTypes<ResolversParentTypes>['_Node'];
  cfSkillNestedFilter: CfSkillNestedFilter;
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
  linkedFrom?: Resolver<Maybe<ResolversTypes['CaseStudyLinkingCollections']>, ParentType, ContextType, Partial<CaseStudyLinkedFromArgs>>;
  skillsCollection?: Resolver<Maybe<ResolversTypes['CaseStudySkillsCollection']>, ParentType, ContextType, RequireFields<CaseStudySkillsCollectionArgs, 'limit' | 'skip'>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
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

export type CaseStudySkillsCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CaseStudySkillsCollection'] = ResolversParentTypes['CaseStudySkillsCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Skill']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  __resolveType: TypeResolveFn<'CaseStudy' | 'Project' | 'Skill' | 'Text', ParentType, ContextType>;
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
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryProjectArgs, 'id'>>;
  projectCollection?: Resolver<Maybe<ResolversTypes['ProjectCollection']>, ParentType, ContextType, RequireFields<QueryProjectCollectionArgs, 'limit' | 'skip'>>;
  skill?: Resolver<Maybe<ResolversTypes['Skill']>, ParentType, ContextType, RequireFields<QuerySkillArgs, 'id'>>;
  skillCollection?: Resolver<Maybe<ResolversTypes['SkillCollection']>, ParentType, ContextType, RequireFields<QuerySkillCollectionArgs, 'limit' | 'skip'>>;
  text?: Resolver<Maybe<ResolversTypes['Text']>, ParentType, ContextType, RequireFields<QueryTextArgs, 'id'>>;
  textCollection?: Resolver<Maybe<ResolversTypes['TextCollection']>, ParentType, ContextType, RequireFields<QueryTextCollectionArgs, 'limit' | 'skip'>>;
};

export type ResourceLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceLink'] = ResolversParentTypes['ResourceLink']> = {
  __resolveType: TypeResolveFn<'CaseStudyTextResourcesBlock' | 'CaseStudyTextResourcesHyperlink' | 'CaseStudyTextResourcesInline' | 'TextContentResourcesBlock' | 'TextContentResourcesHyperlink' | 'TextContentResourcesInline', ParentType, ContextType>;
  sys?: Resolver<ResolversTypes['ResourceSys'], ParentType, ContextType>;
};

export type ResourceSysResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceSys'] = ResolversParentTypes['ResourceSys']> = {
  linkType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  urn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SkillResolvers<ContextType = any, ParentType extends ResolversParentTypes['Skill'] = ResolversParentTypes['Skill']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentfulMetadata?: Resolver<ResolversTypes['ContentfulMetadata'], ParentType, ContextType>;
  linkedFrom?: Resolver<Maybe<ResolversTypes['SkillLinkingCollections']>, ParentType, ContextType, Partial<SkillLinkedFromArgs>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<SkillTitleArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SkillCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['SkillCollection'] = ResolversParentTypes['SkillCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Skill']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SkillLinkingCollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SkillLinkingCollections'] = ResolversParentTypes['SkillLinkingCollections']> = {
  caseStudyCollection?: Resolver<Maybe<ResolversTypes['CaseStudyCollection']>, ParentType, ContextType, RequireFields<SkillLinkingCollectionsCaseStudyCollectionArgs, 'limit' | 'skip'>>;
  entryCollection?: Resolver<Maybe<ResolversTypes['EntryCollection']>, ParentType, ContextType, RequireFields<SkillLinkingCollectionsEntryCollectionArgs, 'limit' | 'skip'>>;
  textCollection?: Resolver<Maybe<ResolversTypes['TextCollection']>, ParentType, ContextType, RequireFields<SkillLinkingCollectionsTextCollectionArgs, 'limit' | 'skip'>>;
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
  skillsCollection?: Resolver<Maybe<ResolversTypes['TextSkillsCollection']>, ParentType, ContextType, RequireFields<TextSkillsCollectionArgs, 'limit' | 'skip'>>;
  sys?: Resolver<ResolversTypes['Sys'], ParentType, ContextType>;
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

export type TextSkillsCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TextSkillsCollection'] = ResolversParentTypes['TextSkillsCollection']> = {
  items?: Resolver<Array<Maybe<ResolversTypes['Skill']>>, ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Node'] = ResolversParentTypes['_Node']> = {
  __resolveType: TypeResolveFn<'CaseStudy' | 'Project' | 'Skill' | 'Text', ParentType, ContextType>;
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Asset?: AssetResolvers<ContextType>;
  AssetCollection?: AssetCollectionResolvers<ContextType>;
  AssetLinkingCollections?: AssetLinkingCollectionsResolvers<ContextType>;
  CaseStudy?: CaseStudyResolvers<ContextType>;
  CaseStudyCollection?: CaseStudyCollectionResolvers<ContextType>;
  CaseStudyLinkingCollections?: CaseStudyLinkingCollectionsResolvers<ContextType>;
  CaseStudySkillsCollection?: CaseStudySkillsCollectionResolvers<ContextType>;
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
  HexColor?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  Project?: ProjectResolvers<ContextType>;
  ProjectCollection?: ProjectCollectionResolvers<ContextType>;
  ProjectLinkingCollections?: ProjectLinkingCollectionsResolvers<ContextType>;
  Quality?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  ResourceLink?: ResourceLinkResolvers<ContextType>;
  ResourceSys?: ResourceSysResolvers<ContextType>;
  Skill?: SkillResolvers<ContextType>;
  SkillCollection?: SkillCollectionResolvers<ContextType>;
  SkillLinkingCollections?: SkillLinkingCollectionsResolvers<ContextType>;
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
  TextSkillsCollection?: TextSkillsCollectionResolvers<ContextType>;
  _Node?: _NodeResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  contentSourceMaps?: ContentSourceMapsDirectiveResolver<any, any, ContextType>;
};

export type GetCaseStudyCollectionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCaseStudyCollectionQuery = { __typename: 'Query', caseStudyCollection?: { __typename: 'CaseStudyCollection', items: Array<{ __typename: 'CaseStudy', _id: string, title?: string | null, text?: { __typename: 'CaseStudyText', json: any } | null, assets?: { __typename: 'Asset', fileName?: string | null } | null, skillsCollection?: { __typename: 'CaseStudySkillsCollection', items: Array<{ __typename: 'Skill', _id: string, title?: string | null } | null> } | null } | null> } | null };

export type GetProjectCollectionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProjectCollectionQuery = { __typename: 'Query', projectCollection?: { __typename: 'ProjectCollection', items: Array<{ __typename: 'Project', _id: string, title?: string | null, asset?: { __typename: 'Asset', url?: string | null } | null } | null> } | null };

export type GetTextQueryQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetTextQueryQuery = { __typename: 'Query', text?: { __typename: 'Text', content?: { __typename: 'TextContent', json: any } | null, skillsCollection?: { __typename: 'TextSkillsCollection', items: Array<{ __typename: 'Skill', _id: string, title?: string | null } | null> } | null } | null };


export const GetCaseStudyCollectionDocument = gql`
    query GetCaseStudyCollection {
  caseStudyCollection {
    items {
      _id
      text {
        json
      }
      title
      assets {
        fileName
      }
      skillsCollection {
        items {
          _id
          title
        }
      }
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
    skillsCollection {
      items {
        _id
        title
      }
    }
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