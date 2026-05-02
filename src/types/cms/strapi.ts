import type { DynamicZoneContentType } from "src/types/cms/dynamic-zone";

export type StrapiResponse<T> = {
  data: T;
  meta: any;
};

export type DynamicZoneContent = {
  content: DynamicZoneContentType[]
};

export type HomeResponse = StrapiResponse<DynamicZoneContent>;
