import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick-theme.css";
import {TestimonialType} from 'src/types/cms'
import {appendBaseUrl} from 'src/helpers/common'
import type {TestimonialBlockType} from 'src/types/cms'


function Testimonials(data:TestimonialBlockType) {
  const Slider = Slick.default || Slick;

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,

    arrows: false,
    dots: true,

    autoplay: false,
    autoplaySpeed: 2000,
    speed: 600,

    pauseOnHover: false,
    pauseOnFocus: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          adaptiveHeight: true,
        },
      },
    ],
  };
  return (
    <section className="bg-[#F9FAFB] py-[30px] md:py-[60px] relative">
    <img src="https://cdn.justcall.io/assets-marketing/images/svg/home-testimonial-shape.svg" alt="Home Testimonial Shape" width={200} height={300} loading="eager" className="absolute top-[30px] md:top-[60px] right-[0] z-[0] bg-[#F9FAFB] w-[140px] md:w-[170px] lg:w-[200px] hidden md:block" />
    <div className="container mx-auto">
      <div className=" ">
      <Slider {...settings}>
        {data.testimonials.map((items,index)=>{
          return (
            <div key={index} className="testimonial-slide-26 px-[5px]">
            <div className="pb-[25px] md:pb-[40px] max-w-[900px]">
              <h2 className="mb-[10px] md:mb-[20px]">{items.title.heading}</h2>
              <span>{items.title.subHeading}</span>
            </div>
            <div className="flex gap-[15px] lg:gap-[30px] flex-col md:flex-row">
              {items.points.map((item,index)=>{
                return (
                  <div key={index} className="bg-white px-[20px] py-[18px] rounded-[8px]">
                    <div className="flex">
                      <img src={appendBaseUrl(item.image.url)} alt="Outgoing Call" width={43} height={43} loading="lazy" />
                      <div className="testimonial-slider-pipe">
                        <div className="mb-0 flex">
                          <p className="text-[38px] font-[600] text-[#196AFF] mb-0 flex items-center">{item.heading}</p>
                          <p className="mb-0 pl-[12px]">{item.subHeading}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          )
        })}
        </Slider>
      </div>
    </div>
  </section>
  )
}

export default Testimonials