import Slick from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const Slider = Slick.default || Slick;

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,

    arrows: false,
    dots: true,

    autoplay: true,
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
        <div className="testimonial-slide-26 px-[5px]">
          <div className="pb-[25px] md:pb-[40px] max-w-[900px]">
            <h2 className="mb-[10px] md:mb-[20px]">“What I love most about JustCall is the ease of use.
              You can just log in and
              get
              going.”</h2>
            <span>- Amit Kakar | CEO, <a href="https://justcall.io/customer-stories/avalon-pharmacy/" className="underline">Avalon
                Pharmacy</a></span>
          </div>
          <div className="flex gap-[15px] lg:gap-[30px] flex-col md:flex-row">
            <div className="bg-white px-[20px] py-[18px] rounded-[8px]">
              <div className="flex">
                <img src="https://cdn.justcall.io/assets-marketing/images/svg/testimonial-phone-outgoing.svg" alt="Outgoing Call" width={43} height={43} loading="lazy" />
                <div className="testimonial-slider-pipe">
                  <div className="mb-0 flex">
                    <p className="text-[38px] font-[600] text-[#196AFF] mb-0 flex items-center">40%</p>
                    <p className="mb-0 pl-[12px]">reduced <br /> inbound call load</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white px-[20px] py-[18px] rounded-[8px]">
              <div className="flex">
                <img src="https://cdn.justcall.io/assets-marketing/images/svg/testimonial-heart-handshake.svg" alt="Calendar Time" width={43} height={43} loading="lazy" />
                <div className="testimonial-slider-pipe">
                  <div className="mb-0 flex">
                    <p className="text-[38px] font-[600] text-[#196AFF] mb-0 flex items-center">20%</p>
                    <p className="mb-0 pl-[12px]">better patient <br /> engagement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-slide-26 px-[5px]">
          <div className="pb-[25px] md:pb-[40px] max-w-[900px]">
            <h2 className="mb-[10px] md:mb-[20px]">“JustCall is helping us improve outcomes at every
              stage of the sales process.”</h2>
            <span>- Brian Mason | CFO, <a href="https://justcall.io/customer-stories/scsp-solar/" className="underline">SCSP Solar</a>
            </span>
          </div>
          <div className="flex gap-[15px] lg:gap-[30px] flex-col md:flex-row">
            <div className="bg-white px-[20px] py-[18px] rounded-[8px]">
              <div className="flex">
                <img src="https://cdn.justcall.io/assets-marketing/images/svg/testimonial-phone-call.svg" alt="Outgoing Call" width={43} height={43} loading="lazy" />
                <div className="testimonial-slider-pipe">
                  <div className="mb-0 flex">
                    <p className="text-[38px] font-[600] text-[#196AFF] mb-0 flex items-center">67%</p>
                    <p className="mb-0 pl-[12px]">higher conversions <br />
                      with smart call routing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-slide-26 px-[5px]">
          <div className="pb-[25px] md:pb-[40px] max-w-[900px]">
            <h2 className="mb-[10px] md:mb-[20px]">“JustCall gives us the insight into customer
              interactions that we need to optimize our processes.”</h2>
            <span>- Klaus Salchner | CTO, <a href="https://justcall.io/customer-stories/apollo-insurance/" className="underline">Apollo Cover</a></span>
          </div>
          <div className="flex gap-[15px] lg:gap-[30px] flex-col md:flex-row">
            <div className="bg-white px-[20px] py-[18px] rounded-[8px]">
              <div className="flex">
                <img src="https://cdn.justcall.io/assets-marketing/images/svg/testimonial-message-share.svg" alt="Outgoing Call" width={43} height={43} loading="lazy" />
                <div className="testimonial-slider-pipe">
                  <div className="mb-0 flex">
                    <p className="mb-0 pl-[0]">Increased conversions <br /> with smart call routing</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white px-[20px] py-[18px] rounded-[8px]">
              <div className="flex">
                <img src="https://cdn.justcall.io/assets-marketing/images/svg/testimonial-device-analytics.svg" alt="Calendar Time" width={43} height={43} loading="lazy" />
                <div className="testimonial-slider-pipe">
                  <div className="mb-0 flex">
                    <p className="mb-0 pl-[0]">Better sales execution <br /> using AI coaching insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-slide-26 px-[5px] call-drop">
          <div className="pb-[25px] md:pb-[40px] max-w-[900px]">
            <h2 className="mb-[10px] md:mb-[20px]">“With JustCall, our call drop rate decreased
              by <br className="hidden md:block" /> 30-40%. That’s huge for us.”</h2>
            <span>- Dan Kerluke | Chief Growth Officer, <a href="https://justcall.io/customer-stories/cirrusled/" className="underline">Cirrus
                Systems</a></span>
          </div>
          <div className="flex gap-[15px] lg:gap-[30px] flex-col md:flex-row">
            <div className="bg-white px-[20px] py-[18px] rounded-[8px]">
              <div className="flex">
                <img src="https://cdn.justcall.io/assets-marketing/images/svg/testimonial-phone-dropped.svg" alt="Outgoing Call" width={43} height={43} loading="lazy" />
                <div className="testimonial-slider-pipe">
                  <div className="mb-0 flex">
                    <p className="text-[38px] font-[600] text-[#196AFF] mb-0 flex items-center">40%</p>
                    <p className="mb-0 pl-[12px]">reduction in <br /> dropped calls</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white px-[20px] py-[18px] rounded-[8px]">
              <div className="flex">
                <img src="https://cdn.justcall.io/assets-marketing/images/svg/testimonial-report-money.svg" alt="Calendar Time" width={43} height={43} loading="lazy" />
                <div className="testimonial-slider-pipe">
                  <div className="mb-0 flex">
                    <p className="text-[38px] font-[600] text-[#196AFF] mb-0 flex items-center">$70K</p>
                    <p className="mb-0 pl-[12px]">in additional <br /> monthly revenue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-slide-26 px-[5px]">
          <div className="pb-[25px] md:pb-[40px] max-w-[900px]">
            <h2 className="mb-[10px] md:mb-[20px]">“When your connect rate triples, it changes everything, from
              rep training to results.”</h2>
            <span>- Warren Lentz | CEO, <a href="https://justcall.io/customer-stories/yellowstone/" className="underline">Yellowstone Local</a></span>
          </div>
          <div className="flex gap-[15px] lg:gap-[30px] flex-col md:flex-row">
            <div className="bg-white px-[20px] py-[18px] rounded-[8px]">
              <div className="flex">
                <img src="https://cdn.justcall.io/assets-marketing/images/svg/testimonial-phone-plus.svg" alt="Outgoing Call" width={43} height={43} loading="lazy" />
                <div className="testimonial-slider-pipe">
                  <div className="mb-0 flex">
                    <p className="text-[38px] font-[600] text-[#196AFF] mb-0 flex items-center">3X</p>
                    <p className="mb-0 pl-[12px]">increase in <br /> connect rates</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white px-[20px] py-[18px] rounded-[8px]">
              <div className="flex">
                <img src="https://cdn.justcall.io/assets-marketing/images/svg/testimonial-calendar-time.svg" alt="Calendar Time" width={43} height={43} loading="lazy" />
                <div className="testimonial-slider-pipe">
                  <div className="mb-0 flex">
                    <p className="text-[38px] font-[600] text-[#196AFF] mb-0 flex items-center">20%</p>
                    <p className="mb-0 pl-[12px]">better patient <br /> engagement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-slide-26 px-[5px]">
          <div className="pb-[25px] md:pb-[40px] max-w-[900px]">
            <h2 className="mb-[10px] md:mb-[20px]">“JustCall helped us scale sales and support
              without sacrificing quality or visibility.”</h2>
            <span>- Giordano Faccani | Global Operations Manager, <a href="https://justcall.io/customer-stories/gostudent/" className="underline">GoStudent</a>
            </span>
          </div>
          <div className="flex gap-[15px] lg:gap-[30px] flex-col md:flex-row">
            <div className="bg-white px-[20px] py-[18px] rounded-[8px]">
              <div className="flex">
                <img src="https://cdn.justcall.io/assets-marketing/images/svg/testimonial-file-analytics.svg" alt="Outgoing Call" width={43} height={43} loading="lazy" />
                <div className="testimonial-slider-pipe">
                  <div className="mb-0 flex">
                    <p className="text-[38px] font-[600] text-[#196AFF] mb-0 flex items-center">25%</p>
                    <p className="mb-0 pl-[12px]">boost in rep <br /> productivity</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white px-[20px] py-[18px] rounded-[8px]">
              <div className="flex">
                <img src="https://cdn.justcall.io/assets-marketing/images/svg/testimonial-rocket.svg" alt="Calendar Time" width={43} height={43} loading="lazy" />
                <div className="testimonial-slider-pipe">
                  <div className="mb-0 flex">
                    <p className="text-[38px] font-[600] text-[#196AFF] mb-0 flex items-center">12%</p>
                    <p className="mb-0 pl-[12px]">improvement <br />
                      in speed-to-lead</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Slider>
      </div>
    </div>
  </section>
  )
}

export default Testimonials