import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LogoGrid() {
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
      {/* Customer logos section */}
      <section className="pb-[30px] md:pb-[60px] customer-logos-section">
        <div className="container mx-auto">
          <div className="text-center mb-[15px] md:mb-[20px]">
            <p>Trusted by 6,000+ customers</p>
          </div>
          <div className="customer-logos-marquee-wrapper overflow-hidden">
            <Slider {...settings}>
                <img
                  src="https://cdn.justcall.io/assets-marketing/images/temp/customer-bearingpoint-logo.webp"
                  alt="Bearing Point"
                  loading="lazy"
                  width={173}
                  height={57}
                  className="object-contain h-[57px] w-auto"
                />

                <img
                  src="https://cdn.justcall.io/assets-marketing/images/temp/customer-hireez-logo.webp"
                  alt="Hire EZ"
                  loading="lazy"
                  width={123}
                  height={57}
                  className="object-contain h-[57px] w-auto"
                />

                <img
                  src="https://cdn.justcall.io/assets-marketing/images/temp/customer-galt-logo.webp"
                  alt="Galt"
                  loading="lazy"
                  width={123}
                  height={57}
                  className="object-contain h-[57px] w-auto"
                />

                <img
                  src="https://cdn.justcall.io/assets-marketing/images/temp/customer-hostinger-logo.webp"
                  alt="Hostinger"
                  loading="lazy"
                  width={123}
                  height={57}
                  className="object-contain h-[57px] w-auto"
                />

                <img
                  src="https://cdn.justcall.io/assets-marketing/images/temp/customer-headspace-logo.webp"
                  alt="Headspace"
                  loading="lazy"
                  width={95}
                  height={50}
                  className="object-contain h-[57px] w-auto"
                />

                <img
                  src="https://cdn.justcall.io/assets-marketing/images/temp/customer-filterbuy-logo.webp"
                  alt="FilterBuy"
                  loading="lazy"
                  width={123}
                  height={57}
                  className="object-contain h-[57px] w-auto"
                />

                <img
                  src="https://cdn.justcall.io/assets-marketing/images/temp/customer-reply-logo.webp"
                  alt="Reply"
                  loading="lazy"
                  width={123}
                  height={57}
                  className="object-contain h-[57px] w-auto"
                />

                <img
                  src="https://cdn.justcall.io/assets-marketing/images/temp/customer-anyroad-logo.webp"
                  alt="Anyroad"
                  loading="lazy"
                  width={123}
                  height={57}
                  className="object-contain h-[57px] w-auto"
                />

                <img
                  src="https://cdn.justcall.io/assets-marketing/images/temp/customer-aurora-logo.webp"
                  alt="Aurora"
                  loading="lazy"
                  width={123}
                  height={57}
                  className="object-contain h-[57px] w-auto"
                />

                <img
                  src="https://cdn.justcall.io/assets-marketing/images/temp/customer-leap-logo.webp"
                  alt="Leap"
                  loading="lazy"
                  width={95}
                  height={50}
                  className="object-contain h-[45px] w-auto"
                />
              </Slider>

              <Slider   {...settings}
                rtl={true}>
                <img
                  src="https://cdn.justcall.io/assets-marketing/images/temp/customer-bearingpoint-logo.webp"
                  alt="Bearing Point"
                  loading="lazy"
                  width={173}
                  height={57}
                  className="object-contain h-[57px] w-auto"
                />

                <img
                  src="https://cdn.justcall.io/assets-marketing/images/temp/customer-hireez-logo.webp"
                  alt="Hire EZ"
                  loading="lazy"
                  width={123}
                  height={57}
                  className="object-contain h-[57px] w-auto"
                />

                <img
                  src="https://cdn.justcall.io/assets-marketing/images/temp/customer-galt-logo.webp"
                  alt="Galt"
                  loading="lazy"
                  width={123}
                  height={57}
                  className="object-contain h-[57px] w-auto"
                />

                <img
                  src="https://cdn.justcall.io/assets-marketing/images/temp/customer-hostinger-logo.webp"
                  alt="Hostinger"
                  loading="lazy"
                  width={123}
                  height={57}
                  className="object-contain h-[57px] w-auto"
                />

                <img
                  src="https://cdn.justcall.io/assets-marketing/images/temp/customer-headspace-logo.webp"
                  alt="Headspace"
                  loading="lazy"
                  width={95}
                  height={50}
                  className="object-contain h-[57px] w-auto"
                />

                <img
                  src="https://cdn.justcall.io/assets-marketing/images/temp/customer-filterbuy-logo.webp"
                  alt="FilterBuy"
                  loading="lazy"
                  width={123}
                  height={57}
                  className="object-contain h-[57px] w-auto"
                />

                <img
                  src="https://cdn.justcall.io/assets-marketing/images/temp/customer-reply-logo.webp"
                  alt="Reply"
                  loading="lazy"
                  width={123}
                  height={57}
                  className="object-contain h-[57px] w-auto"
                />

                <img
                  src="https://cdn.justcall.io/assets-marketing/images/temp/customer-anyroad-logo.webp"
                  alt="Anyroad"
                  loading="lazy"
                  width={123}
                  height={57}
                  className="object-contain h-[57px] w-auto"
                />

                <img
                  src="https://cdn.justcall.io/assets-marketing/images/temp/customer-aurora-logo.webp"
                  alt="Aurora"
                  loading="lazy"
                  width={123}
                  height={57}
                  className="object-contain h-[57px] w-auto"
                />

                <img
                  src="https://cdn.justcall.io/assets-marketing/images/temp/customer-leap-logo.webp"
                  alt="Leap"
                  loading="lazy"
                  width={95}
                  height={50}
                  className="object-contain h-[45px] w-auto"
                />
              </Slider>
             
           
            
          </div>
        </div>
      </section>
    </>
  )
}

export default LogoGrid