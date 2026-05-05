import type { TitleWithImage } from "src/types/cms/dynamic-zone";
import { PRE_FOOTER_TYPES } from "src/types/cms/constants";

export type PreFooter1 = {
  __component: typeof PRE_FOOTER_TYPES.PRE_FOOTER_1;
  id: number;
  preFooter: TitleWithImage;
};
