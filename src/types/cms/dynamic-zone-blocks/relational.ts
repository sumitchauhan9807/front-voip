import {RELATIONAL_TYPES} from 'src/types/cms/constants'

export type LogoGridBlockType = {
  __component:typeof RELATIONAL_TYPES.LOGO_GRID;
  id: number;
  logoGrid: {
    id: number;
    documentId: string;
    title: string;
    slug: string | null;
    subHeading: string | null;
  };
};

export type TestimonialBlockType = {
  __component: typeof RELATIONAL_TYPES.TESTIMONIALS;
  id: number;
  testimonial: {
    id: number;
    documentId: string;
    slug: string;
  };
};