import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {TestimonialType} from 'src/types/cms'
import {appendBaseUrl} from 'src/helpers/common'

type Props = {
  data: TestimonialType[];
};

function Testimonials(data:Props) { 
  const Slider = Slick.default || Slick;
  
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
  
      arrows: false,
      dots: true,
  
      autoplay: true,
      autoplaySpeed: 1500,
      speed: 600,
  
      pauseOnHover: false,
      pauseOnFocus: false,
      appendDots: dots => (
      <div>
        <ul className="flex justify-center gap-2 mt-4"> {dots} </ul>
      </div>
    ),
      // responsive: [
      //   {
      //     breakpoint: 768,
      //     settings: {
      //       adaptiveHeight: true,
      //     },
      //   },
      // ],
    };
  return (
    <div className="tabber-customer-testimonial-slider-wrapper mt-auto bg-[#F9FAFB] rounded-[4px] p-[20px]">
      <div className="tabber-customer-testimonial-slider">
        <div  className="tabber-customer-testimonial-slider-track">
          <Slider {...settings}>
            {data?.data.map((item,index)=>{
              return (
                <div key={index} className="tabber-customer-testimonial-item ">
                  <div className="flex items-center flex-wrap md:flex-nowrap">
                    <div className="customer-description-left relative lg:w-[calc(100%-167px)] md:pr-[22px] mb-[20px] md:mb-0">
                      <p className="text-[18px] md:text-[20px] leading-[1.2] text-[#001233] mb-[8px] font-[600] tracking-[-0.5px]">{item.title.heading}</p>
                      <span className="text-[16px] leading-[1.2] block">- {item.title.subHeading}</span>
                    </div>
                    <div className="customer-image-right w-[167px] shrink-0">
                      <img src={appendBaseUrl(item.points[0].image.url)} alt="Hello Customer" width={145} height={48} loading="lazy" className="w-[145px] h-auto object-contain md:ml-auto" />
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}


export default Testimonials