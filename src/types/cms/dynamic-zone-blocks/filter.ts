import type {TitleType,MediaType} from 'src/types/cms/dynamic-zone'
import {FILTER_TYPES} from 'src/types/cms/constants'

export type FilterBlockType = {
  __component: typeof FILTER_TYPES.FILTER_1;
  id: number;
  items: FilterItemType[];
};

export type FilterItemType = {
  id: number;
  name: string;
  contents: {
    id: number;
    title: TitleType;
    button: {
      id: number;
      text: string;
      url: string;
    };
    testimonial: {
      id: number;
      documentId: string;
      slug: string;
    };
  };
  image: MediaType;
};