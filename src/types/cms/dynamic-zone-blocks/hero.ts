import type {TitleType,MediaType,ButtonType,TitleWithImage} from 'src/types/cms/dynamic-zone'
import type {CertificationBlockType} from 'src/types/cms/dynamic-zone-blocks/relational'
import {HERO_TYPES} from 'src/types/cms/constants'
import {CertificationType} from 'src/types/cms/collections'
import type {RelationalType} from '../dynamic-zone'
export type HeroBlockType = Hero1BlockType | Hero2BlockType

export type Hero1BlockType = {
  __component: typeof HERO_TYPES.HERO_1;
  id: number;
  title: TitleType;
  certifications: CertificationBlockType[];
};

export type Hero2BlockType = {
  __component: typeof HERO_TYPES.HERO_2;
  id: number;
  title: TitleType;
  certifications: CertificationBlockType[];
  image: MediaType;
  button: ButtonType;
};