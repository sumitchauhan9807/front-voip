import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { LogoGridBlockType } from "src/types/cms";
import { appendBaseUrl } from "src/helpers/common";

function LogoGrid(data: LogoGridBlockType) {
  if (data.type == "one_way") return <LogoGrid1 data={data} />;
  if (data.type == "two_way") return <LogoGrid2 data={data} />;
  return null;
}

type LogoGridPropsType = {
  data: LogoGridBlockType;
};

const LogoGrid2 = ({ data }: LogoGridPropsType) => {
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
              {data.logo_grid_1.map((logo, index) => {
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
                );
              })}
            </Slider>

            <Slider {...settings} rtl={true}>
              {data.logo_grid_2.map((logo, index) => {
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
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
const LogoGrid1 = ({ data }: LogoGridPropsType) => {
  // console.log(data)
  return (
    <section className="py-[30px] lg:py-[60px]">
      <div className="container mx-auto">
        <h2
          className="text-center mb-[12px]"
          style={{ letterSpacing: "-1.5px", lineHeight: "1.3" }}
        >
          {data.title.heading}
        </h2>
        <p className="text-center mb-[20px] lg:mb-[20px]">
          {data.title.subHeading}
        </p>
        <div
          className="integrations-scroller-with-logo scroller pt-1 relative"
          data-direction="right"
          data-speed="medium"
          data-animated="true"
        >
          <div
            className="integration-color-zone absolute inset-0 w-1/2 left-[50%] top-0 bottom-0 pointer-events-none z-[5]"
            aria-hidden="true"
          />
          <div className="scroller__inner h-[200px]">
            {data.logo_grid_1.map((item,index)=>{
              return (
                <img
                src={appendBaseUrl(item.logo.url)}
                alt="Apollo Integration"
                height={55}
                width={55}
              />
              )
            })}
            {data.logo_grid_2.map((item,index)=>{
              return (
                <img
                src={appendBaseUrl(item.logo.url)}
                alt="Apollo Integration"
                height={55}
                width={55}
              />
              )
            })}
          </div>
          <div className="integration-logo-center flex justify-center items-center absolute right-0 left-0 top-[10px] pointer-events-none z-10">
            <svg
              className="integration-logo-svg relative"
              xmlns="http://www.w3.org/2000/svg"
              width={177}
              height={177}
              viewBox="0 0 177 177"
              fill="none"
              aria-hidden="true"
            >
              <circle
                className="integration-logo-ripple integration-logo-ripple-1"
                cx="88.9081"
                cy="88.9081"
                r="56.2811"
                fill="none"
                stroke="#196AFF"
                strokeWidth={20}
                strokeOpacity="0.4"
              />
              <circle
                className="integration-logo-ripple integration-logo-ripple-2"
                cx="88.9081"
                cy="88.9081"
                r="56.2811"
                fill="none"
                stroke="#196AFF"
                strokeWidth={20}
                strokeOpacity="0.4"
              />
              <circle cx="88.9081" cy="88.9081" r="56.2811" fill="#196AFF" />
              <path
                d="M64.6656 75.1689L58.5607 80.3791C57.6985 81.1177 57.6985 82.4474 58.5607 83.186L64.6656 88.3666"
                fill="white"
              />
              <path
                d="M112.844 96.5688L118.949 91.3586C119.811 90.62 119.811 89.2903 118.949 88.5517L112.844 83.3711"
                fill="white"
              />
              <path
                d="M96.7777 67.1646C96.1335 67.1646 95.529 67.2827 94.9046 67.3517C96.0641 69.5579 96.7777 72.0201 96.7777 74.6793V93.8652C96.7777 102.04 90.5638 108.708 82.5859 109.633C85.2618 114.745 90.5837 118.271 96.7777 118.271C105.648 118.271 112.843 111.121 112.843 102.316V83.1298C112.843 74.3149 105.648 67.1646 96.7777 67.1646Z"
                fill="white"
              />
              <path
                d="M80.7328 102.319V83.1334C80.7328 74.9587 86.9467 68.2909 94.9246 67.3651C92.2487 62.2535 86.9268 58.7275 80.7328 58.7275C71.863 58.7275 64.668 65.8779 64.668 74.6829V93.8688C64.668 102.684 71.863 109.824 80.7328 109.824C81.3671 109.824 81.9815 109.706 82.596 109.637C81.4464 107.441 80.7328 104.978 80.7328 102.319Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="text-center mt-[20px]">
          <a
            className="group flex justify-center items-center text-[#004CE6] text-[16px] font-semibold transition-all duration-300 hover:underline"
            href="/integration/"
            data-faitracker-click-bind="true"
          >
            See All Integrations
            <svg
              className="ml-[8px] transition-transform duration-300 ease-out group-hover:translate-x-0.5"
              xmlns="http://www.w3.org/2000/svg"
              width={11}
              height={10}
              viewBox="0 0 11 10"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5.59304 9.27699L4.69815 8.39205L7.8054 5.2848H0V3.99219H7.8054L4.69815 0.889915L5.59304 0L10.2315 4.63849L5.59304 9.27699Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LogoGrid;
