import Header from 'src/layout/Header'
import Footer from 'src/layout/Footer'

// import Hero from 'src/components/dynamic-zone/Hero/Index'
// import LogoGrid from 'src/components/dynamic-zone/CollectionTypes/LogoGrid'
import DynamicZone from 'src/components/dynamic-zone/Index'
// import Testimonials from 'src/components/dynamic-zone/CollectionTypes/Testimonials'
import {HERO_TYPES,GRID_TYPES,FILTER_TYPES} from 'src/types/cms/constants'
import { useEffect } from 'react'
import {fetchHomeData} from 'src/api/home'
import { useQuery } from "@tanstack/react-query";
// import { useQuery } from "@apollo/client/react";

import { HOME_QUERY } from 'src/graphql/homeQuery'

function Home() { 

  const { data, isLoading, error } = useQuery({
    queryKey: ["data"],
    queryFn: fetchHomeData,
  });
  // console.log(data,"datadatadata")

  // const { data, loading, error } = useQuery(HOME_QUERY);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error</p>;

  // console.log(data)
  // let test = data?.data?.content.find(x => x.__component == GRID_TYPES.GRID_1)
  // console.log(test)
  return (
    <div className="wrapper home-wrapper home-26-wrapper">
  
    <Header/>
    <DynamicZone data={data?.data?.content}/>
   
  <Footer/>
</div>
  )
}

export default Home