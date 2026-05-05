import type {TitleType,MediaType} from 'src/types/cms/dynamic-zone'
import {FILTER_TYPES} from 'src/types/cms/constants'
import {TestimonialType} from 'src/types/cms'

export type FilterBlockType = {
  __component: typeof FILTER_TYPES.FILTER_1;
  id: number;
  title:TitleType;
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
    testimonials: TestimonialType[]
  };
  image: MediaType;
};