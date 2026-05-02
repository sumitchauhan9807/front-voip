import type {TitleType,MediaType,ButtonType} from 'src/types/cms/dynamic-zone'
import {HERO_TYPES} from 'src/types/cms/constants'
export type HeroBlockType = Hero1BlockType | Hero2BlockType

export type Hero1BlockType = {
  __component: typeof HERO_TYPES.HERO_1;
  id: number;
  title: TitleType;
  icons: MediaType[];
};

export type Hero2BlockType = {
  __component: typeof HERO_TYPES.HERO_2;
  id: number;
  title: TitleType;
  icons: MediaType[];
  image: MediaType;
  button: ButtonType;
};