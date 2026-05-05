// import {HERO_TYPES} from 'src/types/cms/constants'



const POPULATE_MAP = {
  "hero.hero-1": {
    title:true,
    certifications:{
      certification:true
    }
  },
  "hero.hero-2": {
    certifications:{
      certification:true
    }
  },
  "relational.logo-grid": {
    title:true,
    logo_grid_1:{
      logo:true
    },
    logo_grid_2:true,

  },
  "relational.testimonials": {
    testimonials:{
      title:true,
      points:true
    }
  },
  "relational.certifications":{
    title:true,
    certifications:{
      certification:true
    }
  },
  "filters.filter-1": {
    title:true,
    items: {
      contents: {
        title:true,
        testimonials:{
          title:true,
          points:true
        }
      },
      image: true,
      // testimonial:true
    },
  },
  "grids.grid-1":{
    title:true,
    lists:{
      image:true
    }
  },
  "pre-footer.pre-footer":{
    preFooter:{
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
  "relational.certifications",
  "filters.filter-1",
  "grids.grid-1",
  "pre-footer.pre-footer"
]);
