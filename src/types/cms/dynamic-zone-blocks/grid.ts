import type { TitleType, MediaType ,HeadingWithImage } from "src/types/cms/dynamic-zone";
import { GRID_TYPES } from "src/types/cms/constants";

export type GridBlockType = {
  __component: typeof GRID_TYPES.GRID_1;
  id: number;
  title: TitleType;
  lists: HeadingWithImage[];
};
