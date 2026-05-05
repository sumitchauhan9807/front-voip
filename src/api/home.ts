import { api } from "src/axios";
import { CONTENT_QUERY } from 'src/helpers/strapi'
import type {HomeResponse} from 'src/types/cms/strapi'


export const fetchHomeData = async () : Promise<HomeResponse>  => {
  let url = `home${CONTENT_QUERY}`
  console.log(url)
  const { data } = await api.get<HomeResponse>(url);
  return data;
};