import type { TitleType, MediaType ,HeadingWithImage } from "src/types/cms/dynamic-zone";
import { GRID_TYPES } from "src/types/cms/constants";
import {CertificationBlockType} from 'src/types/cms/index'

export type GridBlockType = {
  __component: typeof GRID_TYPES.GRID_1;
  id: number;
  title: TitleType;
  lists: HeadingWithImage[];
};

export type CertificationGridBlockType = {
  __component: typeof GRID_TYPES.CERTIFICATION_GRID;
  id: number;
  title: TitleType;
  certifications :CertificationBlockType[]
}
