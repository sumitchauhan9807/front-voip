function Hero1(props) {
  return (
    <>
      <section className="home-hero pt-[20px] md:pb-0 xl:pb-0 relative">
        {/* <include src="announcement-banner.html"></include> */}
        <div className="container header-container-new mx-auto relative">
          <div className="bg-white py-[40px] lg:py-[60px] rounded-[24px] relative px-[20px]">
            <img src="https://cdn.justcall.io/assets-marketing/images/svg/home-hero-shape-1.svg" alt="Home Hero Shape 1" width={300} height={200} loading="eager" className="absolute top-0 left-[50px] z-[0] w-[120px] md:w-[200px] lg:w-[300px] h-auto hidden md:block" />
            <img src="https://cdn.justcall.io/assets-marketing/images/svg/home-hero-shape-2.svg" alt="Home Hero Shape 2" width={200} height={300} loading="eager" className="absolute top-0 right-[50px] z-[0] w-[130px] md:w-[170px] lg:w-[200px] h-auto hidden md:block" />
            <div className="flex items-center flex-wrap columns-1 lg:columns-2 relative z-[1]">
              <div className="basis-full text-center lg:items-end xl:items-start pt-0 md:pb-0 lg:pb-[45px] xl:pb-0 lg:pr-0">
                {/* <h1 class="h2 xl:pt-[0px] mb-[15px]">The All-in-One <span
                                  class="text-gradient !bg-[linear-gradient(-13.32deg,#001e59_3.4%,#004ce6_99.03%)]">Business
                                  Communication</span>
                              Platform
                          </h1> */}
                <div className="max-w-[780px] mx-auto">
                  <h1 className="h0 xl:pt-[0px] mb-[15px]">
                    Stop Losing Customers
                    to Faster Competitors
                  </h1>
                </div>
                <div className="max-w-[585px] mx-auto">
                  <p className="md:mb-[25px]">JustCall helps your team reach more
                    prospects, answer every call,
                    follow-up instantly, and scale without adding headcount.</p>
                </div>
                <div className="pt-0 pb-6 lg:pb-[30px] min-h-[106px]">
                  <div className="max-w-[500px] mx-auto">
                    <div className="agentos-wrapper">
                      <div className="agentos-form  !mt-0">
                        <div>
                          <ul className="flex flex-wrap lg:flex-nowrap justify-center dark-blue-tick tick-26 text-xs mt-3 gap-[10px] lg:gap-0">
                            <li className="mb-0 mr-0 md:mr-5 w-auto">No credit card required</li>
                            <li className="w-auto">14 days of JustCall AI on us</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center flex-wrap md:flex-nowrap xl:flex-nowrap gap-[10px] md:gap-0">
                  <div className="g2-pipe flex justify-center md:justify-start border md:border-0 border-[#F2F4F7] w-[calc(50%-5px)] md:w-auto p-[10px] md:pl-0 pr-[18px] md:mr-[18px] rounded-[8px] md:rounded-none">
                    <img src="https://cdn.justcall.io/assets-marketing/images/svg/badge-g2.svg" alt="G2" width={34} height={34} loading="eager" />
                    <div className="text-[12px] leading-[1.4] flex flex-col text-left ml-2 justify-center">
                      <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="16.5" viewBox="0 0 12 12" fill="none" className="inline-block relative -top-[1.5px]">
                          <path d="M2.51248 11.0914C2.24392 11.2384 1.93911 10.9808 1.99336 10.652L2.57093 7.14132L0.119423 4.6504C-0.109463 4.41734 0.00948019 3.9913 0.316346 3.94528L3.72469 3.42869L5.24446 0.217103C5.38148 -0.0723675 5.75236 -0.0723675 5.88947 0.217103L7.40923 3.42869L10.8175 3.94528C11.1244 3.9913 11.2434 4.41734 11.0137 4.6504L8.563 7.14132L9.14048 10.652C9.19481 10.9808 8.89001 11.2384 8.62144 11.0914L5.56589 9.41698L2.51248 11.0914Z" fill="#FF9019" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="16.5" viewBox="0 0 12 12" fill="none" className="inline-block relative -top-[1.5px]">
                          <path d="M2.51248 11.0914C2.24392 11.2384 1.93911 10.9808 1.99336 10.652L2.57093 7.14132L0.119423 4.6504C-0.109463 4.41734 0.00948019 3.9913 0.316346 3.94528L3.72469 3.42869L5.24446 0.217103C5.38148 -0.0723675 5.75236 -0.0723675 5.88947 0.217103L7.40923 3.42869L10.8175 3.94528C11.1244 3.9913 11.2434 4.41734 11.0137 4.6504L8.563 7.14132L9.14048 10.652C9.19481 10.9808 8.89001 11.2384 8.62144 11.0914L5.56589 9.41698L2.51248 11.0914Z" fill="#FF9019" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="16.5" viewBox="0 0 12 12" fill="none" className="inline-block relative -top-[1.5px]">
                          <path d="M2.51248 11.0914C2.24392 11.2384 1.93911 10.9808 1.99336 10.652L2.57093 7.14132L0.119423 4.6504C-0.109463 4.41734 0.00948019 3.9913 0.316346 3.94528L3.72469 3.42869L5.24446 0.217103C5.38148 -0.0723675 5.75236 -0.0723675 5.88947 0.217103L7.40923 3.42869L10.8175 3.94528C11.1244 3.9913 11.2434 4.41734 11.0137 4.6504L8.563 7.14132L9.14048 10.652C9.19481 10.9808 8.89001 11.2384 8.62144 11.0914L5.56589 9.41698L2.51248 11.0914Z" fill="#FF9019" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="16.5" viewBox="0 0 12 12" fill="none" className="inline-block relative -top-[1.5px]">
                          <path d="M2.51248 11.0914C2.24392 11.2384 1.93911 10.9808 1.99336 10.652L2.57093 7.14132L0.119423 4.6504C-0.109463 4.41734 0.00948019 3.9913 0.316346 3.94528L3.72469 3.42869L5.24446 0.217103C5.38148 -0.0723675 5.75236 -0.0723675 5.88947 0.217103L7.40923 3.42869L10.8175 3.94528C11.1244 3.9913 11.2434 4.41734 11.0137 4.6504L8.563 7.14132L9.14048 10.652C9.19481 10.9808 8.89001 11.2384 8.62144 11.0914L5.56589 9.41698L2.51248 11.0914Z" fill="#FF9019" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.5" height="16.5" viewBox="0 0 12 12" fill="none" className="inline-block relative -top-[1.5px]">
                          <path d="M2.51248 11.0914C2.24392 11.2384 1.93911 10.9808 1.99336 10.652L2.57093 7.14132L0.119423 4.6504C-0.109463 4.41734 0.00948019 3.9913 0.316346 3.94528L3.72469 3.42869L5.24446 0.217103C5.38148 -0.0723675 5.75236 -0.0723675 5.88947 0.217103L7.40923 3.42869L10.8175 3.94528C11.1244 3.9913 11.2434 4.41734 11.0137 4.6504L8.563 7.14132L9.14048 10.652C9.19481 10.9808 8.89001 11.2384 8.62144 11.0914L5.56589 9.41698L2.51248 11.0914Z" fill="#FF9019" />
                        </svg>
                      </div>
                      <span className="text-[#667085]">1,450+ reviews</span>
                    </div>
                  </div>
                  <div className="g2-pipe flex justify-center md:justify-start border md:border-0 border-[#F2F4F7] w-[calc(50%-5px)] md:w-auto p-[10px] md:pl-0 pr-[18px] md:mr-[18px] rounded-[8px] md:rounded-none">
                    <img src="https://cdn.justcall.io/assets-marketing/images/svg/badge-soc2.svg" alt="SOC2" width={32} height={39} loading="eager" />
                    <div className="text-[12px] leading-[1.4] flex flex-col text-left ml-2 justify-center">
                      <span className="font-[600] text-[#667085]">Type II</span>
                      <span className="text-[#667085]">Certified</span>
                    </div>
                  </div>
                  <div className="g2-pipe flex justify-center md:justify-start border md:border-0 border-[#F2F4F7] w-[calc(50%-5px)] md:w-auto p-[10px] md:pl-0 pr-[18px] md:mr-[18px] rounded-[8px] md:rounded-none">
                    <img src="https://cdn.justcall.io/assets-marketing/images/svg/badge-iso-certified.svg" alt="ISO 27001" width={44} height={37} loading="eager" />
                    <div className="text-[12px] leading-[1.4] flex flex-col text-left ml-2 justify-center">
                      <span className="font-[600] text-[#667085]">ISO 27001</span>
                      <span className="text-[#667085]">Certified</span>
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-start border md:border-0 border-[#F2F4F7] w-[calc(50%-5px)] md:w-auto p-[10px] md:pl-0 pr-[18px] md:mr-[0] rounded-[8px] md:rounded-none">
                    <img src="https://cdn.justcall.io/assets-marketing/images/svg/badge-hipaa-compliance.svg" alt="ISO 27001" width={44} height={37} loading="eager" />
                    <div className="text-[12px] leading-[1.4] flex flex-col text-left ml-2 justify-center">
                      <span className="font-[600] text-[#667085]">HIPAA</span>
                      <span className="text-[#667085]">Compliant</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero1