import { HeroBlockType } from "src/types/cms";
import { FilterBlockType } from "src/types/cms";
import { GridBlockType } from "src/types/cms";
import {
  LogoGridBlockType,
  TestimonialBlockType,
} from "src/types/cms";

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
  image: MediaType;
};

export type TitleWithImage = {
  id: number;
  heading: string;
  subHeading: string;
  image: MediaType;
};

export type ButtonType = {
  text: string;
  url: string;
};

export interface RelationalType  {
  documentId:string;
  id:number
}
