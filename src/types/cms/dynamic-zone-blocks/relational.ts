import { RELATIONAL_TYPES } from "src/types/cms/constants";
import type { RelationalType, TitleType } from "../dynamic-zone";
import type { LogoType ,TestimonialType ,CertificationType } from "../collections";



interface LogoGrid extends RelationalType  {
  logo:LogoType
}

export interface CertificationBlockType extends RelationalType  {
  certification:CertificationType
}

export type LogoGridBlockType = {
  __component: typeof RELATIONAL_TYPES.LOGO_GRID;
  title: TitleType;
  type: string;
  logo_grid_1: LogoGrid[];
  logo_grid_2: LogoGrid[];
};

export type CertificationGridBlockType = {
  __component: typeof RELATIONAL_TYPES.CERTIFICATIONS;
  title: TitleType;
  certifications:{
    certification:CertificationType
  }
};

export type TestimonialBlockType = {
  __component: typeof RELATIONAL_TYPES.TESTIMONIALS;
  testimonials: TestimonialType[]
};
