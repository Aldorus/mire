import {Asset} from "../models/graphql.ts";

export const isVideo = (asset?: Pick<Asset, 'contentType'> | null) => {
  return asset?.contentType?.includes("video");
}