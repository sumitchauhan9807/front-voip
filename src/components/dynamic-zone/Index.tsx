import { lazy, Suspense } from "react";
import type { DynamicZoneContentType } from "src/types/cms/dynamic-zone";
import { HERO_TYPES ,RELATIONAL_TYPES ,FILTER_TYPES , GRID_TYPES } from "src/types/cms/constants";

// Hero
const Hero1 = lazy(() => import("src/components/dynamic-zone/Hero/Hero1"));
const Hero2 = lazy(() => import("src/components/dynamic-zone/Hero/Hero2"));

// Relational
const LogoGrid = lazy(() => import("src/components/dynamic-zone/SingleTypes/LogoGrid"));
const Testimonials = lazy(() => import("src/components/dynamic-zone/SingleTypes/Testimonials"));

// Filter
const Filter1 = lazy(() => import("src/components/dynamic-zone/Filter/Filter1"));

// Grids
const Grid1 = lazy(() => import("src/components/dynamic-zone/Grid/Grid1"));



type DynamicZoneProps = {
  data: DynamicZoneContentType[];
};

const componentMap: Record<string, React.ElementType> = {
  [HERO_TYPES.HERO_1]: Hero1,
  [HERO_TYPES.HERO_2]: Hero2,
  [RELATIONAL_TYPES.LOGO_GRID]: LogoGrid,
  [RELATIONAL_TYPES.TESTIMONIALS]: Testimonials,
  [FILTER_TYPES.FILTER_1]: Filter1,
  [GRID_TYPES.GRID_1]: Grid1,



  // add others here
};

const DynamicZone = ({ data }: DynamicZoneProps) => {
  if (!data?.length) return null;

  return (
    <Suspense fallback={<div>Loading components...</div>}>
      {data.map((component, index) => {
        const Component = componentMap[component.__component];

        if (!Component) return null;

        return <Component key={index} {...component} />;
      })}
    </Suspense>
  );
};

export default DynamicZone;