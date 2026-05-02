import { HeroBlockType } from "src/types/cms/dynamic-zone-blocks/hero";
import { FilterBlockType } from "src/types/cms/dynamic-zone-blocks/filter";
import { GridBlockType } from "src/types/cms/dynamic-zone-blocks/grid";
import {
  LogoGridBlockType,
  TestimonialBlockType,
} from "src/types/cms/dynamic-zone-blocks/relational";

export type DynamicZoneContentType =
  | HeroBlockType
  | FilterBlockType
  | LogoGridBlockType
  | TestimonialBlockType
  | GridBlockType;

export type MediaType = {
  id: number;
  documentId: string;
  url: string;
  name: string;
};

export type TitleType = {
  id: number;
  heading: string;
  subHeading: string;
};

export type HeadingWithImage = {
  id: number;
  heading: string;
  image: string;
};

export type ButtonType = {
  text: string;
  url: string;
};
