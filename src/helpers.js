import {HERO_TYPES} from 'src/types/cms/constants'



const POPULATE_MAP = {
  [HERO_TYPES.HERO_1]: null,
  "hero.hero-2": null,
  "relational.logo-grid": null,
  "relational.testimonials": null,
  "filters.filter-1": {
    items: {
      contents: true,
      image: true,
      // testimonial:true
    },
  },
  "grids.grid-1":{
    title:true,
    lists:{
      image:true
    }
  }
};

const buildPopulate = (base, tree, prefix = "") => {
  if (!tree) {
    return `${base}[populate]=*`;
  }

  return Object.entries(tree)
    .map(([key, value]) => {
      const newPrefix = prefix ? `${prefix}][populate][${key}` : key;

      const path = `${base}[populate][${newPrefix}]`;

      if (value === true) {
        return `${path}[populate]=*`;
      }

      return buildPopulate(base, value, newPrefix);
    })
    .join("&");
};
const buildContentQuery = (dynamicZoneField, components = []) => {
  const queries = components.map((component) => {
    const base = `populate[${dynamicZoneField}][on][${component}]`;
    const nested = POPULATE_MAP[component];

    return buildPopulate(base, nested);
  });

  return "?" + queries.join("&");
};

export const CONTENT_QUERY = buildContentQuery("content", [
  "hero.hero-1",
  "hero.hero-2",
  "relational.logo-grid",
  "relational.testimonials",
  "filters.filter-1",
  "grids.grid-1"
]);
