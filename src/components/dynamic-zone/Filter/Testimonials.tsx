import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {TestimonialType} from 'src/types/cms'

type Props = {
  data: TestimonialType;
};

function Testimonials(data:Props) { 
  console.log(data,"testtttttttttttt")
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
          <div className="tabber-customer-testimonial-item ">
            <div className="flex items-center flex-wrap md:flex-nowrap">
              <div className="customer-description-left relative lg:w-[calc(100%-167px)] md:pr-[22px] mb-[20px] md:mb-0">
                <p className="text-[18px] md:text-[20px] leading-[1.2] text-[#001233] mb-[8px] font-[600] tracking-[-0.5px]">"We're saving $200K on inbound coverage in the first year with JustCall."</p>
                <span className="text-[16px] leading-[1.2] block">- Kenneth Griffin, CEO</span>
              </div>
              <div className="customer-image-right w-[167px] shrink-0">
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/hello-customer-logo.webp" alt="Hello Customer" width={145} height={48} loading="lazy" className="w-[145px] h-auto object-contain md:ml-auto" />
              </div>
            </div>
          </div>
          <div className="tabber-customer-testimonial-item ">
            <div className="flex items-center flex-wrap md:flex-nowrap">
              <div className="customer-description-left relative lg:w-[calc(100%-167px)] md:pr-[22px] mb-[20px] md:mb-0">
                <p className="text-[18px] md:text-[20px] leading-[1.2] text-[#001233] mb-[8px] font-[600] tracking-[-0.5px]">"No lead goes to voicemail, so we never miss an opportunity!"</p>
                <span className="text-[16px] leading-[1.2] block">- Ellie Lott, Business Development Manager</span>
              </div>
              <div className="customer-image-right w-[167px] shrink-0">
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/snapadu-customer-logo.webp" alt="Snapadu" width={145} height={48} loading="lazy" className="w-[145px] h-auto object-contain md:ml-auto" />
              </div>
            </div>
          </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}


export default Testimonials