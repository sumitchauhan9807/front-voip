import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type {LogoGridBlockType} from 'src/types/cms'
import {appendBaseUrl} from 'src/helpers/common'

function LogoGrid(data:LogoGridBlockType) {
  console.log(data,"logo grid")
  // return null
  const Slider = Slick.default || Slick;
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1280, // large screens
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024, // tablets landscape
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // tablets / small laptops
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // mobile large
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // mobile small
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="pb-[30px] md:pb-[60px] customer-logos-section">
        <div className="container mx-auto">
          <div className="text-center mb-[15px] md:mb-[20px]">
            <p>{data.title.heading}</p>
          </div>
          <div className="customer-logos-marquee-wrapper overflow-hidden">
            <Slider {...settings}>
              {data.logo_grid_1.map((logo,index)=>{
                return (
                  <img
                  key={index}
                    src={appendBaseUrl(logo.logo.url)}
                    alt="Bearing Point"
                    loading="lazy"
                    width={173}
                    height={57}
                    className="object-contain h-[57px] w-auto"
                  />
                )
              })}
            </Slider>

              <Slider   {...settings}
                rtl={true}>
                {data.logo_grid_2.map((logo,index)=>{
                return (
                  <img
                  key={index}
                    src={appendBaseUrl(logo.logo.url)}
                    alt="Bearing Point"
                    loading="lazy"
                    width={173}
                    height={57}
                    className="object-contain h-[57px] w-auto"
                  />
                )
              })}
              </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default LogoGrid