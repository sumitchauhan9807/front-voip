import Header from 'src/layout/Header'
import Footer from 'src/layout/Footer'

function Product() {
  return (
    <div className="wrapper home-wrapper newsol-role-wrapper">
      <Header/>
      <section className="product-hero pt-[35px] pb-[35px] lg:pt-[60px] lg:pb-[60px] mb-[60px] bg-[#FFFEF8]">
        <div className="container mx-auto">
          <div className="flex items-center flex-wrap">
            <div className="w-full lg:w-[45%] text-center lg:text-start">
              <h1 className="lg:max-w-[520px]">The Contact Center Software that Can't
                Miss a Support Call</h1>
              <p className="lg:max-w-[530px]">Get JustCall's Contact Center Software to route, resolve, and follow up across every channel. Let AI step in for the first call or when your team can't, day or night.</p>
              <div className="pt-[15px] pb-8 lg:pb-0 flex flex-wrap gap-2 justify-center md:justify-start">
                <a href="/signup" className="btn btn-white btn-lg try_for_free_hero_cta w-full lg:w-auto" data-faitracker-click-bind="true">Build your first AI Dialer Campaign</a>
                <a href="/demo" className="btn btn-white btn-lg book_a_demo_hero_cta btn-outline w-full lg:w-auto" style={{display: 'none !important', visibility: 'hidden !important'}} data-faitracker-click-bind="true">Book a Demo</a>
              </div>
              <div className="hidden lg:flex w-full">
                <ul className="flex flex-nowrap md:flex-wrap lg:flex-nowrap justify-center md:justify-start text-xs mt-3 gap-x-2 gap-y-2">
                  <li className="mb-0 mr-0 md:mr-5 w-auto flex items-center gap-2">
                    <img src="https://cdn.justcall.io/assets-marketing/images/svg/blue-tickmark-n.svg" alt="" className="shrink-0" width={16} height={16} /><span>No credit card
                      required</span>
                  </li>
                  <li className="w-auto flex items-center gap-2"><img src="https://cdn.justcall.io/assets-marketing/images/svg/blue-tickmark-n.svg" alt="" className="shrink-0" width={16} height={16} /><span>Cancel anytime</span></li>
                </ul>
              </div>
              <div className="pt-[30px] flex justify-center lg:justify-start">
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
            <div className="w-full lg:w-[55%] pl-0 lg:pl-[60px] pt-3 lg:pt-0">
              <img src="https://cdn.justcall.io/assets-marketing/images/temp/support-contact-center-hero-brandrefresh26.webp" alt="support-contact-center screen 1" width={607} height={457} loading="eager" />
            </div>
          </div>
        </div>
      </section>
      {/* Customer logos section */}
      <section className="pb-[30px] md:pb-[60px] customer-logos-section">
        <div className="container mx-auto">
          <div className="text-center mb-[15px] md:mb-[20px]">
            <p>Trusted by 6,000+ customers</p>
          </div>
          <div className="customer-logos-marquee-wrapper overflow-hidden">
            <div className="customer-logos-marquee-content flex items-center" style={{width: '5229.75px'}}>
              <div className="flex shrink-0 items-center gap-x-[10px] md:gap-x-[15px] lg:gap-x-[20px]">
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-bearingpoint-logo.webp" alt="Bearing Point" loading="lazy" width={173} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-hireez-logo.webp" alt="Hire EZ" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-galt-logo.webp" alt="Galt" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-hostinger-logo.webp" alt="Hostinger" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-headspace-logo.webp" alt="Headspace" loading="lazy" width={95} height={50} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-filterbuy-logo.webp" alt="FilterBuy" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-reply-logo.webp" alt="Reply" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-anyroad-logo.webp" alt="Anyroad" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-aurora-logo.webp" alt="Aurora" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-leap-logo.webp" alt="Leap" loading="lazy" width={95} height={50} className="object-contain h-[45px] w-auto" />
              </div>
              <div className="flex shrink-0 items-center gap-x-[10px] md:gap-x-[15px] lg:gap-x-[20px]">
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-bearingpoint-logo.webp" alt="Bearing Point" loading="lazy" width={173} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-hireez-logo.webp" alt="Hire EZ" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-galt-logo.webp" alt="Galt" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-hostinger-logo.webp" alt="Hostinger" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-headspace-logo.webp" alt="Headspace" loading="lazy" width={95} height={50} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-filterbuy-logo.webp" alt="FilterBuy" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-reply-logo.webp" alt="Reply" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-anyroad-logo.webp" alt="Anyroad" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-aurora-logo.webp" alt="Aurora" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-leap-logo.webp" alt="Leap" loading="lazy" width={95} height={50} className="object-contain h-[45px] w-auto" />
              </div><div className="flex shrink-0 items-center gap-x-[10px] md:gap-x-[15px] lg:gap-x-[20px]">
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-bearingpoint-logo.webp" alt="Bearing Point" loading="lazy" width={173} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-hireez-logo.webp" alt="Hire EZ" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-galt-logo.webp" alt="Galt" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-hostinger-logo.webp" alt="Hostinger" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-headspace-logo.webp" alt="Headspace" loading="lazy" width={95} height={50} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-filterbuy-logo.webp" alt="FilterBuy" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-reply-logo.webp" alt="Reply" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-anyroad-logo.webp" alt="Anyroad" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-aurora-logo.webp" alt="Aurora" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-leap-logo.webp" alt="Leap" loading="lazy" width={95} height={50} className="object-contain h-[45px] w-auto" />
              </div></div>
            <div className="customer-logos-marquee-content customer-logos-marquee-content--reverse flex items-center" style={{width: '4701.75px'}}>
              <div className="flex shrink-0 items-center gap-x-[10px] md:gap-x-[15px] lg:gap-x-[20px]">
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-statista-logo.webp" alt="Statista" loading="lazy" width={173} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-upgrad-logo.webp" alt="Upgrad" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-alteactive-logo.webp" alt="Alteactive" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-groupmercure-logo.webp" alt="Group Mercure" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-gogolook-logo.webp" alt="Gogolook" loading="lazy" width={95} height={50} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-profitroom-logo.webp" alt="Profitroom" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-loanmarket-logo.webp" alt="Loan Market" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-grab-logo.webp" alt="Grab" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-lssi-logo.webp" alt="LSSI" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
              </div>
              <div className="flex shrink-0 items-center gap-x-[10px] md:gap-x-[15px] lg:gap-x-[20px]">
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-statista-logo.webp" alt="Statista" loading="lazy" width={173} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-upgrad-logo.webp" alt="Upgrad" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-alteactive-logo.webp" alt="Alteactive" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-groupmercure-logo.webp" alt="Group Mercure" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-gogolook-logo.webp" alt="Gogolook" loading="lazy" width={95} height={50} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-profitroom-logo.webp" alt="Profitroom" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-loanmarket-logo.webp" alt="Loan Market" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-grab-logo.webp" alt="Grab" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-lssi-logo.webp" alt="LSSI" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
              </div><div className="flex shrink-0 items-center gap-x-[10px] md:gap-x-[15px] lg:gap-x-[20px]">
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-statista-logo.webp" alt="Statista" loading="lazy" width={173} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-upgrad-logo.webp" alt="Upgrad" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-alteactive-logo.webp" alt="Alteactive" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-groupmercure-logo.webp" alt="Group Mercure" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-gogolook-logo.webp" alt="Gogolook" loading="lazy" width={95} height={50} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-profitroom-logo.webp" alt="Profitroom" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-loanmarket-logo.webp" alt="Loan Market" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-grab-logo.webp" alt="Grab" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/customer-lssi-logo.webp" alt="LSSI" loading="lazy" width={123} height={57} className="object-contain h-[57px] w-auto" />
              </div></div>
          </div>
          <div style={{width: '100%', maxWidth: '100%', flexBasis: '100%', alignSelf: 'stretch', boxSizing: 'border-box', background: 'rgb(230, 238, 255)', border: '1.5px solid rgb(207, 214, 229)', borderRadius: '8px', padding: '20px 24px', margin: '16px 0px', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 8px', fontFamily: 'inherit', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left !important'}}><h2 style={{margin: '0px 0px 8px', fontSize: '1.3rem', color: 'rgb(16, 24, 40)', letterSpacing: 'normal', textAlign: 'left !important'}}>Comprehensive IVR Call Menu Solutions, Try Free</h2><div style={{margin: '0px 0px 16px', fontSize: '1rem', color: 'rgb(16, 24, 40)', letterSpacing: 'normal', textAlign: 'left !important'}}>Create tailored IVR menus with greeting uploads, call routing, voicemail support, and digit-based responses. Enhance customer engagement and reduce call drop-offs with our scalable platform. Integrate with existing systems for a unified communication experience.</div><button style={{background: 'rgb(25, 106, 255)', color: 'rgb(255, 255, 255)', fontWeight: 'bold', fontSize: '1rem', border: 'none', borderRadius: '4px', padding: '10px 24px', cursor: 'pointer', boxShadow: 'rgba(0, 0, 0, 0.08) 0px 1px 3px'}} data-faitracker-form-bind="true" data-faitracker-click-bind="true">Begin Free Trial</button></div></div>
      </section>
      <section className="py-[30px] lg:py-[60px]">
        <div className="container mx-auto">
          <h2 className="text-center mb-[30px] lg:max-w-[400px] mx-auto" style={{letterSpacing: '-1.5px', lineHeight: '1.3'}}>When support breaks,
            your customers leave.</h2>
          <p className="text-center mb-[30px] lg:max-w-[630px] mx-auto">Customers reach out on every channel. Your team juggles six tabs to keep up.
            Your agents aren't slow, their tools are.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[12px] mx-auto">
            <div className="bg-[#F2F4F7] rounded-[8px] p-[20px] flex items-center">
              <div>
                <div className="p-[5px] bg-white rounded-[5px] mr-[18px] w-[50px] h-[50px] flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 36 36" fill="none">
                    <g clipPath="url(#clip0_4129_443)">
                      <path d="M5.89587 17.6875V13.2656C5.89587 12.0929 6.36175 10.9681 7.19101 10.1389C8.02027 9.30963 9.14499 8.84375 10.3177 8.84375H29.4792M29.4792 8.84375L25.0573 4.42188M29.4792 8.84375L25.0573 13.2656" stroke="#101828" strokeWidth="2.21094" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M29.4792 17.6875V22.1094C29.4792 23.2821 29.0133 24.4069 28.1841 25.2361C27.3548 26.0654 26.2301 26.5313 25.0573 26.5313H5.89587M5.89587 26.5313L10.3177 30.9531M5.89587 26.5313L10.3177 22.1094" stroke="#101828" strokeWidth="2.21094" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4129_443">
                        <rect width="35.375" height="35.375" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <p className="mb-0 text-[#475467]">Customers repeat <br /> themselves across channels</p>
            </div>
            <div className="bg-[#F2F4F7] rounded-[8px] p-[20px] flex items-center">
              <div>
                <div className="p-[5px] bg-white rounded-[5px] mr-[18px] w-[50px] h-[50px] flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 36 36" fill="none">
                    <g clipPath="url(#clip0_4129_445)">
                      <path d="M4.42188 17.6875C4.42187 19.4296 4.765 21.1546 5.43166 22.764C6.09832 24.3735 7.07546 25.8359 8.30729 27.0677C9.53911 28.2995 11.0015 29.2767 12.611 29.9433C14.2204 30.61 15.9454 30.9531 17.6875 30.9531C19.4296 30.9531 21.1546 30.61 22.764 29.9433C24.3735 29.2767 25.8359 28.2995 27.0677 27.0677C28.2995 25.8359 29.2767 24.3735 29.9433 22.764C30.61 21.1546 30.9531 19.4296 30.9531 17.6875C30.9531 15.9454 30.61 14.2204 29.9433 12.611C29.2767 11.0015 28.2995 9.53911 27.0677 8.30729C25.8359 7.07546 24.3735 6.09832 22.764 5.43166C21.1546 4.765 19.4296 4.42188 17.6875 4.42188C15.9454 4.42188 14.2204 4.765 12.611 5.43166C11.0015 6.09832 9.53911 7.07546 8.30729 8.30729C7.07546 9.53911 6.09832 11.0015 5.43166 12.611C4.765 14.2204 4.42187 15.9454 4.42188 17.6875Z" stroke="#101828" strokeWidth="2.21094" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17.6875 17.6875L22.1094 20.6354" stroke="#101828" strokeWidth="2.21094" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17.6875 10.3179V17.6877" stroke="#101828" strokeWidth="2.21094" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4129_445">
                        <rect width="35.375" height="35.375" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <p className="mb-0 text-[#475467]">After-hours tickets <br /> pile up unanswered</p>
            </div>
            <div className="bg-[#F2F4F7] rounded-[8px] p-[20px] flex items-center">
              <div>
                <div className="p-[5px] bg-white rounded-[5px] mr-[18px] w-[50px] h-[50px] flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 36 36" fill="none">
                    <g clipPath="url(#clip0_4129_447)">
                      <path d="M5.89587 8.84391C5.89587 8.06208 6.20646 7.31226 6.7593 6.75942C7.31214 6.20658 8.06195 5.896 8.84379 5.896H11.7917C12.5735 5.896 13.3234 6.20658 13.8762 6.75942C14.429 7.31226 14.7396 8.06208 14.7396 8.84391V10.3179C14.7396 11.0997 14.429 11.8495 13.8762 12.4024C13.3234 12.9552 12.5735 13.2658 11.7917 13.2658H8.84379C8.06195 13.2658 7.31214 12.9552 6.7593 12.4024C6.20646 11.8495 5.89587 11.0997 5.89587 10.3179V8.84391Z" stroke="#101828" strokeWidth="2.21094" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5.89587 22.1095C5.89587 21.3277 6.20646 20.5779 6.7593 20.025C7.31214 19.4722 8.06195 19.1616 8.84379 19.1616H11.7917C12.5735 19.1616 13.3234 19.4722 13.8762 20.025C14.429 20.5779 14.7396 21.3277 14.7396 22.1095V26.5314C14.7396 27.3132 14.429 28.0631 13.8762 28.6159C13.3234 29.1687 12.5735 29.4793 11.7917 29.4793H8.84379C8.06195 29.4793 7.31214 29.1687 6.7593 28.6159C6.20646 28.0631 5.89587 27.3132 5.89587 26.5314V22.1095Z" stroke="#101828" strokeWidth="2.21094" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20.6354 8.84391C20.6354 8.06208 20.946 7.31226 21.4988 6.75942C22.0516 6.20658 22.8015 5.896 23.5833 5.896H26.5312C27.313 5.896 28.0629 6.20658 28.6157 6.75942C29.1685 7.31226 29.4791 8.06208 29.4791 8.84391V26.5314C29.4791 27.3132 29.1685 28.0631 28.6157 28.6159C28.0629 29.1687 27.313 29.4793 26.5312 29.4793H23.5833C22.8015 29.4793 22.0516 29.1687 21.4988 28.6159C20.946 28.0631 20.6354 27.3132 20.6354 26.5314V8.84391Z" stroke="#101828" strokeWidth="2.21094" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4129_447">
                        <rect width="35.375" height="35.375" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <p className="mb-0 text-[#475467]">Six tools open per call,<br /> still no full picture</p>
            </div>
            <div className="bg-[#F2F4F7] rounded-[8px] p-[20px] flex items-center">
              <div>
                <div className="p-[5px] bg-white rounded-[5px] mr-[18px] w-[50px] h-[50px] flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 36 36" fill="none">
                    <g clipPath="url(#clip0_4129_449)">
                      <path d="M26.5312 7.36963L30.9531 11.7915L26.5312 16.2134" stroke="#101828" strokeWidth="2.21094" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4.42188 26.5311H11.7917L22.1094 11.7915H30.9531" stroke="#101828" strokeWidth="2.21094" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4129_449">
                        <rect width="35.375" height="35.375" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <p className="mb-0 text-[#475467]">Resolution times <br /> climbing, no one knows why</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F9FAFB] py-[30px] md:py-[60px] relative mt-0 lg:mt-10">
        <img src="https://cdn.justcall.io/assets-marketing/images/svg/home-testimonial-shape.svg" alt="Home Testimonial Shape" width={200} height={300} loading="eager" className="absolute top-[30px] md:top-[60px] right-[0] z-[0] bg-[#F9FAFB] w-[140px] md:w-[170px] lg:w-[200px] hidden md:block" />
        <div className="container mx-auto">
          <div className>
            <div className="testimonial-slide-26 px-[5px]">
              <div className="pb-[25px] md:pb-[40px] max-w-[900px]">
                <h2 className="mb-[10px] md:mb-[20px] lg:max-w-[950px]" style={{letterSpacing: '-1.5px', lineHeight: '1.3'}}>“JustCall's ability to customize and cater solutions for us has been an unbelievable experience.”</h2>
                <span>- Brad Cohen | Senior Director, <a href="/customer-stories/gameu/" className="underline" data-faitracker-click-bind="true">Game-U</a></span>
              </div>
              <div className="flex gap-[15px] lg:gap-[30px] flex-col md:flex-row">
                <div className="bg-white px-[20px] py-[18px] rounded-[8px]">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 36 36" fill="none">
                      <g clipPath="url(#clip0_4129_801)">
                        <path d="M4.42188 10.3179L13.2656 19.1616L19.1615 13.2658L30.9531 25.0575" stroke="#196AFF" strokeWidth="2.21094" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M30.9531 14.7397V25.0575H20.6354" stroke="#196AFF" strokeWidth="2.21094" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4129_801">
                          <rect width="35.375" height="35.375" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="testimonial-slider-pipe">
                      <div className="mb-0 flex">
                        <h2 className="font-[600] text-[#196AFF] mb-0 flex items-center" style={{letterSpacing: '-1.5px', lineHeight: '1.3'}}>80%</h2>
                        <p className="mb-0 pl-[12px]">reduction in missed <br className="lg:block hidden" /> calls and messages</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white px-[20px] py-[18px] rounded-[8px]">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 36 36" fill="none">
                      <g clipPath="url(#clip0_4129_803)">
                        <path d="M30.9296 18.4686C31.0915 15.726 30.3978 13.0008 28.9444 10.6693C27.491 8.33779 25.3495 6.5151 22.8157 5.45291C20.2819 4.39072 17.4809 4.14144 14.7993 4.73951C12.1178 5.33757 9.68812 6.75347 7.84582 8.79165C6.00352 10.8298 4.83951 13.3898 4.51453 16.1179C4.18955 18.846 4.71964 21.6077 6.03159 24.0217C7.34355 26.4356 9.37263 28.3826 11.8386 29.5939C14.3046 30.8051 17.0859 31.2208 19.7983 30.7836" stroke="#196AFF" strokeWidth="2.21094" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.6875 10.3179V17.6877L22.1094 22.1095" stroke="#196AFF" strokeWidth="2.21094" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28.0053 23.5835L25.0574 28.0054H30.9532L28.0053 32.4272" stroke="#196AFF" strokeWidth="2.21094" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_4129_803">
                          <rect width="35.375" height="35.375" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="testimonial-slider-pipe">
                      <div className="mb-0 flex">
                        <h2 className="font-[600] text-[#196AFF] mb-0 flex items-center" style={{letterSpacing: '-1.5px', lineHeight: '1.3'}}>50%</h2>
                        <p className="mb-0 pl-[12px]">improvement in support <br className="lg:block hidden" /> turnaround time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Two Column Section */}
      <section className="pt-[40px] lg:pt-[90px] pb-[30px]">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="pb-2 lg:max-w-[600px] mx-auto" style={{letterSpacing: '-1.5px', lineHeight: '1.3'}}>Your AI-powered contact center, ready in minutes</h2>
            <p className="pb-0 mb-0 lg:max-w-[800px] mx-auto">Route calls to the right agent, resolve common inquiries with AI, and follow up across voice, SMS, and WhatsApp. No six-month rollout. No enterprise contract. Go live in minutes.</p>
          </div>
          <div className="pt-[40px] md:pt-[80px]">
            <div className="row flex flex-wrap lg:flex-nowrap items-center columns-2 flex-col lg:flex-row">
              <div className="basis-full lg:basis-1/2 pr-0 lg:pr-10 xl:pr-24 order-2 lg:order-1">
                <div>
                  <h2 className="pb-4" style={{letterSpacing: '-1.5px', lineHeight: '1.3'}}>Every call to the right agent, first try</h2>
                  <p>Route by CRM owner, skill, or priority. No guessing, no transfers.</p>
                  <ul className="list-blue-tick [&>li]:mb-[15px]">
                    <li>Route calls to the CRM contact owner automatically</li>
                    <li>Assign by skill, issue type, and priority</li>
                    <li>Set SLA timers on every queue</li>
                    <li>Trigger overflow rules when the team is at capacity</li>
                  </ul>
                  <div className="btn-row mt-[24px] mb-[30px]">
                    <a href="/signup" className="btn btn-primary btn-lg" data-faitracker-click-bind="true">Start Free Trial</a>
                    <a href="/demo" className="btn btn-outline btn-lg" style={{display: 'none !important', visibility: 'hidden !important'}} data-faitracker-click-bind="true">Book a Demo</a>
                  </div>
                </div>
              </div>
              <div className="basis-full lg:basis-1/2 lg:ml-auto pt-0 order-1 lg:order-2 mb-[25px] lg:mb-0">
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/support-contact-center-features-one.webp" width={560} height={345} alt="support contact center screen 2" loading="lazy" className="mx-auto lg:mx-0" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Two Column Section */}
      <section className="pt-[10px] md:pt-[30px] pb-[30px]">
        <div className="container mx-auto">
          <div>
            <div className="row flex flex-wrap lg:flex-nowrap items-center columns-2 flex-col lg:flex-row">
              <div className="basis-full lg:basis-1/2 lg:mr-auto pt-0 pr-0 mb-[25px] lg:mb-0">
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/support-contact-center-features-two.webp" width={530} height={340} alt="support contact center screen 3" loading="lazy" className="mx-auto lg:mx-0" />
              </div>
              <div className="basis-full lg:basis-1/2">
                <div>
                  <h2 className="pb-4 lg:max-w-[500px]" style={{letterSpacing: '-1.5px', lineHeight: '1.3'}}>Answer calls, even when your team can't</h2>
                  <p>AI voice agents handle overflow and after-hours calls. Resolve FAQs, book appointments, escalate the rest.</p>
                  <ul className="list-blue-tick [&>li]:mb-[15px]">
                    <li>Route calls to the CRM contact owner automatically</li>
                    <li>Assign by skill, issue type, and priority</li>
                    <li>Set SLA timers on every queue</li>
                    <li>Trigger overflow rules when the team is at capacity</li>
                  </ul>
                  <div className="btn-row mt-[24px] mb-[30px]">
                    <a href="/signup" className="btn btn-primary btn-lg" data-faitracker-click-bind="true">Start Free Trial</a>
                    <a href="/demo" className="btn btn-outline btn-lg" style={{display: 'none !important', visibility: 'hidden !important'}} data-faitracker-click-bind="true">Book a Demo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Two Column Section */}
      <section className="pt-[10px] md:pt-[30px] pb-[40px]">
        <div className="container mx-auto">
          <div>
            <div className="row flex flex-wrap lg:flex-nowrap items-center columns-2 flex-col lg:flex-row">
              <div className="basis-full lg:basis-1/2 pr-0 lg:pr-10 xl:pr-24 order-2 lg:order-1">
                <div>
                  <h2 className="pb-4" style={{letterSpacing: '-1.5px', lineHeight: '1.3'}}>Surface full context in front of your agents</h2>
                  <p>Unified inbox for messaging. Every call, text, and voicemail synced to the CRM contact timeline automatically.</p>
                  <ul className="list-blue-tick [&>li]:mb-[15px]">
                    <li>Unified inbox for SMS, MMS, and WhatsApp</li>
                    <li>Every call, text, and voicemail synced to CRM</li>
                    <li>SMS follow-ups triggered by missed calls</li>
                    <li>Full history on every contact, no tab-switching</li>
                  </ul>
                  <div className="btn-row mt-[24px] mb-[30px]">
                    <a href="/signup" className="btn btn-primary btn-lg" data-faitracker-click-bind="true">Start Free Trial</a>
                    <a href="/demo" className="btn btn-outline btn-lg" style={{display: 'none !important', visibility: 'hidden !important'}} data-faitracker-click-bind="true">Book a Demo</a>
                  </div>
                </div>
              </div>
              <div className="basis-full lg:basis-1/2 lg:ml-auto pt-0 order-1 lg:order-2 mb-[25px] lg:mb-0">
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/support-contact-center-features-three.webp" width={535} height={
                      370} alt="support contact center sceeen 4" loading="lazy" className="mx-auto lg:mx-0" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Two Column Section */}
      <section className="pt-[10px] md:pt-[30px] pb-[30px]">
        <div className="container mx-auto">
          <div>
            <div className="row flex flex-wrap lg:flex-nowrap items-center columns-2 flex-col lg:flex-row">
              <div className="basis-full lg:basis-1/2 lg:mr-auto pt-0 pr-0 mb-[25px] lg:mb-0">
                <img src="https://cdn.justcall.io/assets-marketing/images/temp/support-contact-center-features-four.webp" width={530} height={340} alt="support contact center screen 5" loading="lazy" className="mx-auto lg:mx-0" />
              </div>
              <div className="basis-full lg:basis-1/2">
                <div>
                  <h2 className="pb-4 lg:max-w-[500px]" style={{letterSpacing: '-1.5px', lineHeight: '1.3'}}>Coach your team with real data, not guesswork</h2>
                  <p>AI scores every conversation. You see exactly where reps need coaching and where they're winning.</p>
                  <ul className="list-blue-tick [&>li]:mb-[15px]">
                    <li>AI call scoring based on custom quality frameworks</li>
                    <li>SLA tracking with automated escalation alerts</li>
                    <li>Agent-level performance patterns surfaced weekly</li>
                    <li>Customer sentiment analysis on every conversation</li>
                  </ul>
                  <div className="btn-row mt-[24px] mb-[30px]">
                    <a href="/signup" className="btn btn-primary btn-lg" data-faitracker-click-bind="true">Start Free Trial</a>
                    <a href="/demo" className="btn btn-outline btn-lg" style={{display: 'none !important', visibility: 'hidden !important'}} data-faitracker-click-bind="true">Book a Demo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[30px] md:py-[60px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center">
            <div className="basis-full text-center">
              <h2 className="pb-[15px]" style={{letterSpacing: '-1.5px', lineHeight: '1.3'}}>How to build an AI contact center</h2>
              <p className="lg:max-w-[750px] mx-auto mb-0">A quick setup guide to build your AI contact center in minutes.</p>
              <div className="tab-img hide-video-border mt-[50px] mb-[30px] px-4 sm:px-0">
                <div className="relative w-full max-w-[712px] mx-auto aspect-video overflow-hidden rounded-[8px] aiva-tutorial-video bg-black">
                  <div className="aiva-tutorial-video__poster absolute inset-0 z-[1]">
                    <button type="button" className="aiva-tutorial-video__trigger group block absolute inset-0 w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#004CE6]" aria-label="Play video: How to build an AI contact center" data-faitracker-form-bind="true" data-faitracker-click-bind="true">
                      <img src="https://cdn.justcall.io/assets-marketing/images/temp/ai-voice-tutorial-video-thumb.png" alt="How to build an AI contact center — video thumbnail" width={1280} height={720} loading="lazy" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/15">
                        <img src="https://cdn.justcall.io/assets-marketing/images/temp/hubspot-youtube-play-button.png" alt="" width={140} height={140} loading="eager" className="playbutton-youtube mx-auto" />
                      </span>
                    </button>
                  </div>
                  <div className="aiva-tutorial-video__embed absolute inset-0 z-0 hidden">
                    <iframe id="aiva-tutorial-video-iframe" title="YouTube video player" data-src="https://www.youtube.com/embed/Ddj_vW08Gn0?si=uCUGQt1GRAByouzh&autoplay=1&mute=1&playsinline=1&controls=1&color=white&rel=0" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="absolute inset-0 w-full h-full" />
                  </div>
                </div>
              </div>
              <div className="btn-row pt-[15px] justify-center">
                <a href="/signup" className="btn btn-lg try_for_free_overall_cta" data-faitracker-click-bind="true">Start Free Trial</a>
                <a href="/demo" className="btn btn-outline btn-lg book_a_demo_cta_overall" style={{display: 'none !important', visibility: 'hidden !important'}} data-faitracker-click-bind="true">Book a Demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ppc-table-section relative overflow-x-visible overflow-y-hidden lg:overflow-hidden p show lg:pt-6 pt-4 lg:pb-[80px] pb-4">
        <div className="container mx-auto relative z-[1] min-w-0 w-full max-w-full">
          <div className="text-center">
            <h2 className="lg:pt-[40px] pt-0 px-10 lg:px-0 pb-[15px]" style={{letterSpacing: '-1.5px', lineHeight: '1.3'}}>Call center software vs. contact center software</h2>
            <p className="mb-6 max-w-[800px] mx-auto">Your phone system was built for an era when customers only called. They don't just call anymore.</p>
          </div>
          <div className="container mx-auto">
            <div className="ppc-table-scroll overflow-x-auto lg:overflow-x-visible touch-pan-x [-webkit-overflow-scrolling:touch] w-full min-w-0 max-w-full">
              <div className="min-w-[500px] lg:min-w-[640px] max-w-[950px] mx-auto rounded-[15px] border-[1px] border-[#CCDEFF] overflow-hidden bg-white">
                <table className="w-full table-fixed border-collapse">
                  <colgroup>
                    <col className="w-[20%]" />
                    <col className="w-[30%] lg:w-1/3" />
                    <col className="w-[50%] lg:w-1/3" />
                  </colgroup>
                  <thead>
                    <tr className="border border-[fff]">
                      <th className="bg-[#1c2939] !text-left py-4">
                        <p className="text-white pl-2 lg:pl-6 font-bold mb-0">
                          Dimension
                        </p>
                      </th>
                      <th className="bg-[#1c2939] !text-left py-4 border-l border-r border-[#e5eeff]">
                        <p className="text-white font-bold mb-0 lg:pl-6 pl-2">
                          Traditional Call Center
                        </p>
                      </th>
                      <th className="bg-[#196AFF] !text-left py-4">
                        <p className="text-white font-bold mb-0 pl-2 lg:pl-5">
                          AI Contact Center (JustCall)
                        </p>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="shadow-lg px-10">
                    <tr className="border border-[#E4E7EC]">
                      <td className="pl-2 lg:pl-6 text-[#475467]">
                        Channels
                      </td>
                      <td className="border-l border-r border-[#CCDEFF] relative py-3 text-[#475467] lg:pl-6 pl-3">
                        Voice only
                      </td>
                      <td className="text-[#101828] bg-[#F6F9FF] font-bold lg:pl-5 pl-2">
                        Voice, SMS, email, WhatsApp, chat
                      </td>
                    </tr>
                    <tr className="border border-[#E4E7EC]">
                      <td className="pl-2 lg:pl-6 text-[#475467]">
                        Routing
                      </td>
                      <td className="border-l border-r border-[#CCDEFF] relative py-3 text-[#475467] lg:pl-6 pl-3">
                        Basic queue, round-robin
                      </td>
                      <td className="text-[#101828] bg-[#F6F9FF] font-bold lg:pl-5 pl-2">
                        Skills-based, CRM-aware, AI-powered
                      </td>
                    </tr>
                    <tr className="border border-[#E4E7EC]">
                      <td className="pl-2 lg:pl-6 text-[#475467]">
                        After-hours
                      </td>
                      <td className="border-l border-r border-[#CCDEFF] relative py-3 text-[#475467] lg:pl-6 pl-3">
                        Voicemail or outsourced answering
                      </td>
                      <td className="text-[#101828] bg-[#F6F9FF] font-bold lg:pl-5 pl-2">
                        AI voice agents handle calls 24/7
                      </td>
                    </tr>
                    <tr className="border border-[#E4E7EC]">
                      <td className="pl-2 lg:pl-6 text-[#475467]">
                        Customer context
                      </td>
                      <td className="border-l border-r border-[#CCDEFF] relative py-3 text-[#475467] lg:pl-6 pl-3">
                        Agent starts from scratch every time
                      </td>
                      <td className="text-[#101828] bg-[#F6F9FF] font-bold lg:pl-5 pl-2">
                        Full CRM history on every interaction
                      </td>
                    </tr>
                    <tr className="border border-[#E4E7EC]">
                      <td className="pl-2 lg:pl-6 text-[#475467]">
                        Analytics
                      </td>
                      <td className="border-l border-r border-[#CCDEFF] relative py-3 text-[#475467] lg:pl-6 pl-3">
                        Call volume and duration reports
                      </td>
                      <td className="text-[#101828] bg-[#F6F9FF] font-bold lg:pl-5 pl-2">
                        Sentiment, resolution, CSAT, agent scoring
                      </td>
                    </tr>
                    <tr className="border border-[#E4E7EC]">
                      <td className="pl-2 lg:pl-6 text-[#475467]">
                        Automation
                      </td>
                      <td className="border-l border-r border-[#CCDEFF] relative py-3 text-[#475467] lg:pl-6 pl-3">
                        IVR menus with numbered options
                      </td>
                      <td className="text-[#101828] bg-[#F6F9FF] font-bold lg:pl-5 pl-2">
                        AI resolution, SMS workflows, auto-follow-ups
                      </td>
                    </tr>
                    <tr className="border border-[#E4E7EC]">
                      <td className="pl-2 lg:pl-6 text-[#475467]">
                        Scaling
                      </td>
                      <td className="border-l border-r border-[#CCDEFF] relative py-3 text-[#475467] lg:pl-6 pl-3">
                        Hire more agents to handle more calls
                      </td>
                      <td className="text-[#101828] bg-[#F6F9FF] font-bold lg:pl-5 pl-2">
                        AI handles overflow, agents focus on complex issues
                      </td>
                    </tr>
                    <tr className="border border-[#E4E7EC]">
                      <td className="pl-2 lg:pl-6 text-[#475467]">
                        Cost model
                      </td>
                      <td className="border-l border-r border-[#CCDEFF] relative py-3 text-[#475467] lg:pl-6 pl-3">
                        Per-seat, scales linearly with volume
                      </td>
                      <td className="text-[#101828] bg-[#F6F9FF] font-bold lg:pl-5 pl-2">
                        AI + automation reduce cost per interaction
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 mb-0">
            <a href="/pricing" className="font-bold text-[#004CE6] flex items-center justify-center gap-2" data-faitracker-click-bind="true">Compare Plans
              <svg xmlns="http://www.w3.org/2000/svg" width={11} height={10} viewBox="0 0 11 10" fill="none">
                <path d="M5.59304 9.27699L4.69815 8.39205L7.8054 5.2848H0V3.99219H7.8054L4.69815 0.889915L5.59304 0L10.2315 4.63849L5.59304 9.27699Z" fill="#004CE6" />
              </svg>
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 z-0 select-none lg:block hidden" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width={198} height={247} viewBox="0 0 198 247" fill="none" className="block w-[min(198px,45vw)] max-w-[198px] h-auto">
            <path d="M10.0477 148.058L10.0477 49.2363C10.0477 27.6906 27.5138 10.2239 49.0594 10.2236C70.6053 10.2236 88.0721 27.6904 88.0721 49.2363L88.0721 78.2529C88.0722 80.1271 88.809 81.9262 90.1229 83.2627L102.458 95.8105C104.088 97.4689 104.088 100.128 102.458 101.786L90.1161 114.341C88.8065 115.673 88.0723 117.466 88.0721 119.334L88.0721 148.058C88.0719 169.603 70.6052 187.069 49.0594 187.069C27.5139 187.069 10.048 169.603 10.0477 148.058Z" stroke="#E6EEFF" strokeWidth="3.15597" />
            <rect x="90.047" y="206.413" width="81.2742" height="81.2742" rx="40.6371" transform="rotate(90 90.047 206.413)" fill="#E6EEFF" />
            <path d="M148.958 107.393C171.392 107.393 189.578 125.579 189.578 148.012L189.578 246.909C189.578 269.342 171.392 287.528 148.958 287.528C126.525 287.528 108.339 269.342 108.339 246.909L108.339 148.012C108.339 125.579 126.525 107.393 148.958 107.393Z" fill="#E6EEFF" />
          </svg>
        </div>
      </section>
      {/* SEO Section */}
      <section className="voip-service-section seo-tabber-redesign py-[30px] md:py-[60px] predictive-dialer-wrapper ">
        <div className="container mx-auto">
          <h2 className="pb-[40px] text-center lg:max-w-[900px] mx-auto" style={{letterSpacing: '-1.5px', lineHeight: '1.3'}}>Understand Contact Center Software before you decide</h2>
          <div className="flex flex-col max-w-[1000px] mx-auto">
            <div className="basis-full pb-7 lg:pb-0 read-more-tabber full-width-tabber">
              <div className="read-more-tab-wrapper">
                <h3 className="read-more-tabber-header cursor-pointer py-4 lg:py-6 pr-6 primary-color text-[#475467] mb-0 hover:text-[#004ce6] relative" id="poor-customer-service-cost" data-tab-id={1} role="tab" aria-controls="tab-panel-1" style={{letterSpacing: '-0.5px'}}>What does poor customer service actually cost you?</h3>
                <div className="readmore-container mx-auto pb-[16px]" id="tab-panel-1" data-tab-id={1} role="tabpanel" aria-labelledby="poor-customer-service-cost" style={{}}>
                  <p>When support breaks down, the damage isn't just a bad CSAT score. It compounds.</p>
                  <p>Customers who can't reach you don't wait. They churn.</p>
                  <p>Agents stuck on repeat calls with no context are slower and burn out faster.</p>
                  <p>Managers flying blind without analytics can't coach or forecast accurately.</p>
                  <p>Teams patching together separate tools for calls, SMS, and email lose context at every handoff.</p>
                  <p>Most of these problems are solvable with the right contact center platform. Game-U, a service business on JustCall, saw an <strong>80% reduction in missed calls</strong> and a <strong>50% improvement in support turnaround time</strong> after moving to our contact center.</p>
                </div>
              </div>
              <div className="read-more-tab-wrapper">
                <h3 className="read-more-tabber-header border-t-[2px]  border-[#E4E7EC] py-4 lg:py-6 pr-6 cursor-pointer text-[#475467] hover:text-[#004ce6] relative" id="contact-center-automation-scale" data-tab-id={2} role="tab" aria-controls="tab-panel-2" style={{letterSpacing: '-0.5px'}}>How contact center automation helps you scale customer service</h3>
                <div className="readmore-container mx-auto pb-[16px] hidden" id="tab-panel-2" data-tab-id={2} role="tabpanel" aria-labelledby="contact-center-automation-scale" style={{display: 'none'}}>
                  <p>Scaling a support team doesn't always mean hiring more agents. Often, it means removing the friction that keeps your current team from working at full capacity.</p>
                  <p>Here's how contact center automation actually moves the needle:</p>
                  <h4 className="!tracking-normal font-inter text-[16px] md:text-[18px] !font-bold !leading-[1.6] !mb-[8px] !mt-4" style={{letterSpacing: '-0.5px'}}>Reduce repetitive work</h4>
                  <p>Things like call logging, post-call summaries, and follow-up SMS can all happen automatically. Avalon Pharmacy cut inbound inquiry volume by <strong>40%</strong> with SMS automation alone, saving roughly <strong>2 hours per team member per day</strong>.</p>
                  <h4 className="!tracking-normal font-inter text-[16px] md:text-[18px] !font-bold !leading-[1.6] !mb-[8px] !mt-4" style={{letterSpacing: '-0.5px'}}>Route smarter, not louder</h4>
                  <p>Automated call distribution, skills-based routing, and CRM-based routing ensure every customer reaches the right agent the first time. Fewer transfers. Fewer dropped handoffs.</p>
                  <h4 className="!tracking-normal font-inter text-[16px] md:text-[18px] !font-bold !leading-[1.6] !mb-[8px] !mt-4" style={{letterSpacing: '-0.5px'}}>Handle overflow without growing headcount</h4>
                  <p>AI Voice Agents answer calls 24/7, qualify leads, book appointments, and route complex issues to humans with full context. JustCall customers like JustSayHello.com saved <strong>$200K in the first year</strong> by handling support after hours without additional staff.</p>
                  <h4 className="!tracking-normal font-inter text-[16px] md:text-[18px] !font-bold !leading-[1.6] !mb-[8px] !mt-4" style={{letterSpacing: '-0.5px'}}>Coach agents at scale</h4>
                  <p>Automatic call scoring, real-time agent assist, and sentiment analysis give managers visibility across every conversation, not just the ones they happen to monitor. Nexford University increased outbound call volume by <strong>50%</strong> after streamlining their workflows, with agents saving <strong>10 to 30 seconds per call</strong>.</p>
                  <p>Contact center automation works best when it's built into your platform, not bolted on. That's where JustCall is different.</p>
                </div>
              </div>
              <div className="read-more-tab-wrapper">
                <h3 className="read-more-tabber-header border-t-[2px]  border-[#E4E7EC] py-4 lg:py-6 pr-6 cursor-pointer text-[#475467] hover:text-[#004ce6] relative" id="maximize-cx-ccaas" data-tab-id={3} role="tab" aria-controls="tab-panel-3" style={{letterSpacing: '-0.5px'}}>How to maximize customer experience with contact center as a service</h3>
                <div className="readmore-container mx-auto pb-[16px] hidden" id="tab-panel-3" data-tab-id={3} role="tabpanel" aria-labelledby="maximize-cx-ccaas" style={{display: 'none'}}>
                  <p>Contact center as a service (CCaaS) means your phone system, routing, AI tools, and CRM integrations all run in the cloud. No hardware. No IT dependency. Just a platform your team can use from anywhere.</p>
                  <p>But software alone doesn't deliver great customer experience. Here's what actually makes the difference:</p>
                  <h4 className="!tracking-normal font-inter text-[16px] md:text-[18px] !font-bold !leading-[1.6] !mb-[8px] !mt-4" style={{letterSpacing: '-0.5px'}}>Meet customers on their preferred channel</h4>
                  <p>Voice is still important. But customers also expect to text, WhatsApp, and email. A contact center platform that unifies all of these means no customer falls through the cracks.</p>
                  <h4 className="!tracking-normal font-inter text-[16px] md:text-[18px] !font-bold !leading-[1.6] !mb-[8px] !mt-4" style={{letterSpacing: '-0.5px'}}>Give agents the context they need</h4>
                  <p>When a call comes in and the agent already sees the customer's history, past interactions, and open issues, resolution times drop. JustCall's CRM integrations make this the default, not the exception.</p>
                  <h4 className="!tracking-normal font-inter text-[16px] md:text-[18px] !font-bold !leading-[1.6] !mb-[8px] !mt-4" style={{letterSpacing: '-0.5px'}}>Never go fully offline</h4>
                  <p>AI Voice Agents handle calls after hours, during peak times, and when every agent is occupied. Customers get a response. Agents get breathing room.</p>
                  <h4 className="!tracking-normal font-inter text-[16px] md:text-[18px] !font-bold !leading-[1.6] !mb-[8px] !mt-4" style={{letterSpacing: '-0.5px'}}>Close the feedback loop</h4>
                  <p>Every call is a data point. Sentiment analysis, call scoring, and analytics dashboards tell you what's working, what's not, and where to coach next.</p>
                  <p>The best CCaaS platforms disappear into your workflow. Your agents just do great work.</p>
                </div>
              </div>
              <div className="read-more-tab-wrapper">
                <h3 className="read-more-tabber-header border-t-[2px]  border-[#E4E7EC] py-4 lg:py-6 pr-6 cursor-pointer text-[#475467] hover:text-[#004ce6] relative" id="setup-contact-center-justcall" data-tab-id={4} role="tab" aria-controls="tab-panel-4" style={{letterSpacing: '-0.5px'}}>How to set up contact center software with JustCall</h3>
                <div className="readmore-container mx-auto pb-[16px] hidden" id="tab-panel-4" data-tab-id={4} role="tabpanel" aria-labelledby="setup-contact-center-justcall" style={{display: 'none'}}>
                  <p>Getting started with JustCall is straightforward. Here's the flow:</p>
                  <ol className="!list-decimal flex flex-col pl-8 gap-2 pb-[10px]">
                    <li>Create your account at justcall.io and confirm your email.</li>
                    <li>Add your team by inviting agents and assigning roles and permissions.</li>
                    <li>Set up your numbers by purchasing local, toll-free, or international numbers, or porting your existing ones.</li>
                    <li>Connect your CRM and tools through the Integrations tab. JustCall natively connects with HubSpot, Salesforce, Pipedrive, Zendesk, and 100+ others.</li>
                    <li>Configure call routing by building your IVR, setting up ring groups, and defining business hours.</li>
                    <li>Enable the features your team needs, including call recording, agent assist, AI scoring, and SMS workflows.</li>
                    <li>Run test calls to make sure everything routes as expected.</li>
                    <li>Train your team on the JustCall dashboard. Most teams are up and running in a day.</li>
                  </ol>
                </div>
              </div>
              <div className="read-more-tab-wrapper">
                <h3 className="read-more-tabber-header border-t-[2px]  border-[#E4E7EC] py-4 lg:py-6 pr-6 cursor-pointer text-[#475467] hover:text-[#004ce6] relative" id="choose-contact-center-provider" data-tab-id={5} role="tab" aria-controls="tab-panel-5" style={{letterSpacing: '-0.5px'}}>How to choose the right contact center software provider</h3>
                <div className="readmore-container mx-auto pb-[16px] hidden" id="tab-panel-5" data-tab-id={5} role="tabpanel" aria-labelledby="choose-contact-center-provider" style={{display: 'none'}}>
                  <p>There's no single best answer here. The right platform depends on your team size, channels, and how your support operation is structured.</p>
                  <p>That said, here's what to evaluate in any platform:</p>
                  <ul className="!list-disc flex flex-col pl-8 gap-2 pb-[10px]">
                    <li><strong>Omnichannel support:</strong> Can it handle calls, SMS, email, and WhatsApp in one place?</li>
                    <li><strong>Routing flexibility:</strong> Does it support IVR, skills-based routing, and CRM-based routing?</li>
                    <li><strong>AI capabilities:</strong> Is AI built into the platform or sold as a separate product?</li>
                    <li><strong>CRM integration:</strong> How deep is the sync? Two-way? Real-time?</li>
                    <li><strong>Analytics and reporting:</strong> Can managers track what matters across agents and channels?</li>
                    <li><strong>Scalability:</strong> Will it handle your volume 12 months from now?</li>
                    <li><strong>Security and compliance:</strong> Does it support SOC 2 Type II, HIPAA, GDPR, and PCI-DSS?</li>
                  </ul>
                  <p>JustCall meets all of these, starting at <strong>$29 per user per month</strong>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Integration logos marquee section */}
      <section className="py-[30px] lg:py-[60px]">
        <div className="container mx-auto">
          <h2 className="text-center mb-[12px]" style={{letterSpacing: '-1.5px', lineHeight: '1.3'}}>Works with all your favorite tools</h2>
          <p className="text-center mb-[20px] lg:mb-[20px]">Calls, texts, notes, and insights are synced instantly. No
            manual work. No lost context. No gaps in visibility.</p>
          <div className="integrations-scroller-with-logo scroller pt-1 relative" data-direction="right" data-speed="medium" data-animated="true">
            <div className="integration-color-zone absolute inset-0 w-1/2 left-[50%] top-0 bottom-0 pointer-events-none z-[5]" aria-hidden="true" />
            <div className="scroller__inner h-[200px]">
              <img src="https://cdn.justcall.io/assets-marketing/images/temp/apollo-integration-slider.png" alt="Apollo Integration" height={55} width={55} className />
              <img src="https://cdn.justcall.io/assets-marketing/images/temp/salesforce-integration-slider.png" alt="Salesforce Integration" height={55} width={55} className />
              <img src="https://cdn.justcall.io/assets-marketing/images/temp/salesloft-integration-slider.png" alt="Salesloft Integration" height={55} width={55} className />
              <img src="https://cdn.justcall.io/assets-marketing/images/temp/hubspot-integration-slider.png" alt="Hubspot Integration" height={55} width={55} className />
              <img src="https://cdn.justcall.io/assets-marketing/images/temp/slack-integration-slider.png" alt="Slack Integration" height={55} width={55} className />
              <img src="https://cdn.justcall.io/assets-marketing/images/temp/clay-integration-slider.png" alt="clay Integration" height={55} width={55} className />
              <img src="https://cdn.justcall.io/assets-marketing/images/temp/close-integration-slider.png" alt="Close Integration" height={55} width={55} className />
              <img src="https://cdn.justcall.io/assets-marketing/images/temp/intercom-integration-slider.png" alt="Intercom Integration" height={55} width={55} className />
              <img src="https://cdn.justcall.io/assets-marketing/images/temp/help-scout-integration-slider.png" alt="Help Scout Integration" height={55} width={55} className />
              <img src="https://cdn.justcall.io/assets-marketing/images/temp/copper-crm-integration-slider.png" alt="Copper Integration" height={55} width={55} className />
              <img src="https://cdn.justcall.io/assets-marketing/images/temp/daton-integration-slider.png" alt="Daton Integration" height={55} width={55} className />
              <img src="https://cdn.justcall.io/assets-marketing/images/temp/follow-up-boss-integration-slider.png" alt="Follow Up Boss Integration" height={55} width={55} className />
              <img src="https://cdn.justcall.io/assets-marketing/images/temp/fireflies-integration-slider.png" alt="Fireflies Integration" height={55} width={55} className />
              <img src="https://cdn.justcall.io/assets-marketing/images/temp/teamwave-integration-slider.png" alt="Teamwave Integration" height={55} width={55} className />
              <img src="https://cdn.justcall.io/assets-marketing/images/temp/bigin-integration-slider.png" alt="Bigin Integration" height={55} width={55} className />
              <img src="https://cdn.justcall.io/assets-marketing/images/temp/apollo-integration-slider.png" alt="Apollo Integration" height={55} width={55} aria-hidden="true" className /><img src="https://cdn.justcall.io/assets-marketing/images/temp/salesforce-integration-slider.png" alt="Salesforce Integration" height={55} width={55} aria-hidden="true" className /><img src="https://cdn.justcall.io/assets-marketing/images/temp/salesloft-integration-slider.png" alt="Salesloft Integration" height={55} width={55} aria-hidden="true" className /><img src="https://cdn.justcall.io/assets-marketing/images/temp/hubspot-integration-slider.png" alt="Hubspot Integration" height={55} width={55} aria-hidden="true" className /><img src="https://cdn.justcall.io/assets-marketing/images/temp/slack-integration-slider.png" alt="Slack Integration" height={55} width={55} aria-hidden="true" className /><img src="https://cdn.justcall.io/assets-marketing/images/temp/clay-integration-slider.png" alt="clay Integration" height={55} width={55} aria-hidden="true" className /><img src="https://cdn.justcall.io/assets-marketing/images/temp/close-integration-slider.png" alt="Close Integration" height={55} width={55} aria-hidden="true" className /><img src="https://cdn.justcall.io/assets-marketing/images/temp/intercom-integration-slider.png" alt="Intercom Integration" height={55} width={55} aria-hidden="true" className /><img src="https://cdn.justcall.io/assets-marketing/images/temp/help-scout-integration-slider.png" alt="Help Scout Integration" height={55} width={55} aria-hidden="true" className /><img src="https://cdn.justcall.io/assets-marketing/images/temp/copper-crm-integration-slider.png" alt="Copper Integration" height={55} width={55} className aria-hidden="true" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/daton-integration-slider.png" alt="Daton Integration" height={55} width={55} className aria-hidden="true" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/follow-up-boss-integration-slider.png" alt="Follow Up Boss Integration" height={55} width={55} className aria-hidden="true" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/fireflies-integration-slider.png" alt="Fireflies Integration" height={55} width={55} className aria-hidden="true" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/teamwave-integration-slider.png" alt="Teamwave Integration" height={55} width={55} className aria-hidden="true" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/bigin-integration-slider.png" alt="Bigin Integration" height={55} width={55} className aria-hidden="true" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/apollo-integration-slider.png" alt="Apollo Integration" height={55} width={55} aria-hidden="true" className /><img src="https://cdn.justcall.io/assets-marketing/images/temp/salesforce-integration-slider.png" alt="Salesforce Integration" height={55} width={55} aria-hidden="true" className="integration-logo-in-view" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/salesloft-integration-slider.png" alt="Salesloft Integration" height={55} width={55} aria-hidden="true" className="integration-logo-in-view" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/hubspot-integration-slider.png" alt="Hubspot Integration" height={55} width={55} aria-hidden="true" className="integration-logo-in-view" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/slack-integration-slider.png" alt="Slack Integration" height={55} width={55} aria-hidden="true" className="integration-logo-in-view" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/clay-integration-slider.png" alt="clay Integration" height={55} width={55} aria-hidden="true" className="integration-logo-in-view" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/close-integration-slider.png" alt="Close Integration" height={55} width={55} aria-hidden="true" className="integration-logo-in-view" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/intercom-integration-slider.png" alt="Intercom Integration" height={55} width={55} aria-hidden="true" className="integration-logo-in-view" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/help-scout-integration-slider.png" alt="Help Scout Integration" height={55} width={55} aria-hidden="true" className="integration-logo-in-view" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/copper-crm-integration-slider.png" alt="Copper Integration" height={55} width={55} className="integration-logo-in-view" aria-hidden="true" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/daton-integration-slider.png" alt="Daton Integration" height={55} width={55} className aria-hidden="true" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/follow-up-boss-integration-slider.png" alt="Follow Up Boss Integration" height={55} width={55} className aria-hidden="true" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/fireflies-integration-slider.png" alt="Fireflies Integration" height={55} width={55} className aria-hidden="true" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/teamwave-integration-slider.png" alt="Teamwave Integration" height={55} width={55} className aria-hidden="true" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/bigin-integration-slider.png" alt="Bigin Integration" height={55} width={55} className aria-hidden="true" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/apollo-integration-slider.png" alt="Apollo Integration" height={55} width={55} aria-hidden="true" className /><img src="https://cdn.justcall.io/assets-marketing/images/temp/salesforce-integration-slider.png" alt="Salesforce Integration" height={55} width={55} aria-hidden="true" className /><img src="https://cdn.justcall.io/assets-marketing/images/temp/salesloft-integration-slider.png" alt="Salesloft Integration" height={55} width={55} aria-hidden="true" className /><img src="https://cdn.justcall.io/assets-marketing/images/temp/hubspot-integration-slider.png" alt="Hubspot Integration" height={55} width={55} aria-hidden="true" className /><img src="https://cdn.justcall.io/assets-marketing/images/temp/slack-integration-slider.png" alt="Slack Integration" height={55} width={55} aria-hidden="true" className /><img src="https://cdn.justcall.io/assets-marketing/images/temp/clay-integration-slider.png" alt="clay Integration" height={55} width={55} aria-hidden="true" className /><img src="https://cdn.justcall.io/assets-marketing/images/temp/close-integration-slider.png" alt="Close Integration" height={55} width={55} aria-hidden="true" className /><img src="https://cdn.justcall.io/assets-marketing/images/temp/intercom-integration-slider.png" alt="Intercom Integration" height={55} width={55} aria-hidden="true" className /><img src="https://cdn.justcall.io/assets-marketing/images/temp/help-scout-integration-slider.png" alt="Help Scout Integration" height={55} width={55} aria-hidden="true" className /><img src="https://cdn.justcall.io/assets-marketing/images/temp/copper-crm-integration-slider.png" alt="Copper Integration" height={55} width={55} className aria-hidden="true" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/daton-integration-slider.png" alt="Daton Integration" height={55} width={55} className aria-hidden="true" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/follow-up-boss-integration-slider.png" alt="Follow Up Boss Integration" height={55} width={55} className aria-hidden="true" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/fireflies-integration-slider.png" alt="Fireflies Integration" height={55} width={55} className aria-hidden="true" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/teamwave-integration-slider.png" alt="Teamwave Integration" height={55} width={55} className aria-hidden="true" /><img src="https://cdn.justcall.io/assets-marketing/images/temp/bigin-integration-slider.png" alt="Bigin Integration" height={55} width={55} className aria-hidden="true" /></div>
            <div className="integration-logo-center flex justify-center items-center absolute right-0 left-0 top-[10px] pointer-events-none z-10">
              <svg className="integration-logo-svg relative" xmlns="http://www.w3.org/2000/svg" width={177} height={177} viewBox="0 0 177 177" fill="none" aria-hidden="true">
                <circle className="integration-logo-ripple integration-logo-ripple-1" cx="88.9081" cy="88.9081" r="56.2811" fill="none" stroke="#196AFF" strokeWidth={20} strokeOpacity="0.4" />
                <circle className="integration-logo-ripple integration-logo-ripple-2" cx="88.9081" cy="88.9081" r="56.2811" fill="none" stroke="#196AFF" strokeWidth={20} strokeOpacity="0.4" />
                <circle cx="88.9081" cy="88.9081" r="56.2811" fill="#196AFF" />
                <path d="M64.6656 75.1689L58.5607 80.3791C57.6985 81.1177 57.6985 82.4474 58.5607 83.186L64.6656 88.3666" fill="white" />
                <path d="M112.844 96.5688L118.949 91.3586C119.811 90.62 119.811 89.2903 118.949 88.5517L112.844 83.3711" fill="white" />
                <path d="M96.7777 67.1646C96.1335 67.1646 95.529 67.2827 94.9046 67.3517C96.0641 69.5579 96.7777 72.0201 96.7777 74.6793V93.8652C96.7777 102.04 90.5638 108.708 82.5859 109.633C85.2618 114.745 90.5837 118.271 96.7777 118.271C105.648 118.271 112.843 111.121 112.843 102.316V83.1298C112.843 74.3149 105.648 67.1646 96.7777 67.1646Z" fill="white" />
                <path d="M80.7328 102.319V83.1334C80.7328 74.9587 86.9467 68.2909 94.9246 67.3651C92.2487 62.2535 86.9268 58.7275 80.7328 58.7275C71.863 58.7275 64.668 65.8779 64.668 74.6829V93.8688C64.668 102.684 71.863 109.824 80.7328 109.824C81.3671 109.824 81.9815 109.706 82.596 109.637C81.4464 107.441 80.7328 104.978 80.7328 102.319Z" fill="white" />
              </svg>
            </div>
          </div>
          <div className="text-center mt-[20px]">
            <a className="group flex justify-center items-center text-[#004CE6] text-[16px] font-semibold transition-all duration-300 hover:underline" href="/integration/" data-faitracker-click-bind="true">See All Integrations<svg className="ml-[8px] transition-transform duration-300 ease-out group-hover:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" width={11} height={10} viewBox="0 0 11 10" fill="none" aria-hidden="true">
                <path d="M5.59304 9.27699L4.69815 8.39205L7.8054 5.2848H0V3.99219H7.8054L4.69815 0.889915L5.59304 0L10.2315 4.63849L5.59304 9.27699Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="product-faq faq-redesign-2026 py-[30px] md:py-[60px] bg-[#F9FAFB]" id="faq-section-block">
        <div className="container mx-auto">
          <div className="product-faq__bg relative">
            <div className="product-faq__title text-center pb-[25px]">
              <h2 className="pb-[30px]" style={{letterSpacing: '-1.5px', lineHeight: '1.3'}}>FAQs about contact center solutions</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10 relative">
              <div>
                <div className="pr-accordion__section">
                  <div className="pr-accordion__head">
                    <h3 id="what-is-contact-center-software" className="min-h-[43px] flex items-center" style={{letterSpacing: '-0.5px'}}>
                      What is a contact center software?
                    </h3>
                    <i className="accordion__plus">
                      <i className="accordion__icon" />
                    </i>
                  </div>
                  <div className="pr-accordion__body">
                    <p>Contact center software is a platform that helps teams manage customer interactions across voice (phone calls), SMS, email, and chat. It handles both inbound and outbound communication and typically includes tools like call routing, IVR, AI agents, CRM integration, analytics, and call recording. It is built for teams that care about the full customer experience, not just call volume.</p>
                  </div>
                </div>
                <div className="pr-accordion__section">
                  <div className="pr-accordion__head">
                    <h3 id="need-cloud-contact-center-solution" className="min-h-[43px] flex items-center" style={{letterSpacing: '-0.5px'}}>
                      Does my business need a cloud-based contact center solution?
                    </h3>
                    <i className="accordion__plus">
                      <i className="accordion__icon" />
                    </i>
                  </div>
                  <div className="pr-accordion__body">
                    <p>If your team handles a high volume of customer interactions or communicates across multiple channels, a cloud contact center solution is worth it. It removes tool-switching, brings conversations into one place, and gives managers the visibility they need to coach well. For support teams especially, it is less about call volume and more about reducing friction on every interaction.</p>
                  </div>
                </div>
                <div className="pr-accordion__section">
                  <div className="pr-accordion__head">
                    <h3 id="contact-center-software-cost" className="min-h-[43px] flex items-center" style={{letterSpacing: '-0.5px'}}>
                      How much does contact center software cost?
                    </h3>
                    <i className="accordion__plus">
                      <i className="accordion__icon" />
                    </i>
                  </div>
                  <div className="pr-accordion__body">
                    <p>Pricing varies by provider and the features included. Most platforms use per-user monthly pricing, ranging from around $20 to $150 per user per month, depending on plan tier and AI capabilities. JustCall starts at $29 per user per month on the Team plan, with AI-powered plans from $49. See the <a href="/pricing" className="text-[#004ce6] hover:underline" data-faitracker-click-bind="true">JustCall pricing page</a> on justcall.io for current details.</p>
                  </div>
                </div>
                <div className="pr-accordion__section">
                  <div className="pr-accordion__head">
                    <h3 id="what-is-contact-center-ai" className="min-h-[43px] flex items-center" style={{letterSpacing: '-0.5px'}}>
                      What is contact center AI?
                    </h3>
                    <i className="accordion__plus">
                      <i className="accordion__icon" />
                    </i>
                  </div>
                  <div className="pr-accordion__body">
                    <p>Contact center AI covers the tools that automate or assist with customer interactions. This includes AI Voice Agents that answer calls and handle FAQs, real-time agent assist that surfaces prompts during live calls, automatic call scoring that evaluates conversations against your criteria, and sentiment analysis that flags customer tone across interactions. The best implementations reduce agent workload without reducing the quality of the customer experience.</p>
                  </div>
                </div>
                <div className="pr-accordion__section">
                  <div className="pr-accordion__head">
                    <h3 id="contact-center-automation-scaling-support" className="min-h-[43px] flex items-center" style={{letterSpacing: '-0.5px'}}>
                      Can contact center automation help with scaling customer service teams?
                    </h3>
                    <i className="accordion__plus">
                      <i className="accordion__icon" />
                    </i>
                  </div>
                  <div className="pr-accordion__body">
                    <p>Yes, and it is in fact the most efficient way to scale. Automation handles the repeatable parts of support: call logging, post-call summaries, follow-up SMS, and basic query resolution. This frees your agents to focus on complex issues that genuinely need a human. An AI voice agent can also handle the first interaction to answer repetitive queries and qualify leads before routing them.</p>
                  </div>
                </div>
                <div className="pr-accordion__section">
                  <div className="pr-accordion__head">
                    <h3 id="ai-contact-center-caller-intent" className="min-h-[43px] flex items-center" style={{letterSpacing: '-0.5px'}}>
                      How does AI contact center software determine caller intent?
                    </h3>
                    <i className="accordion__plus">
                      <i className="accordion__icon" />
                    </i>
                  </div>
                  <div className="pr-accordion__body">
                    <p>JustCall's AI analyzes spoken language in real time to identify what a caller is trying to accomplish. Before the call connects, IVR routing captures initial intent through menu selection. Once connected, real-time transcription and moment analysis track the conversation, detecting topics, sentiment, and keywords. Post-call, AI summarizes outcomes and flags action items. The system learns from your call data over time, making routing and responses more accurate as volume grows.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="pr-accordion__section">
                  <div className="pr-accordion__head">
                    <h3 id="contact-center-ai-scaling-customer-support" className="min-h-[43px] flex items-center" style={{letterSpacing: '-0.5px'}}>
                      Why is contact center AI essential for scaling customer support?
                    </h3>
                    <i className="accordion__plus">
                      <i className="accordion__icon" />
                    </i>
                  </div>
                  <div className="pr-accordion__body">
                    <p>Without AI, scaling support means scaling headcount. AI changes that equation. An AI Voice Agent can handle dozens of simultaneous calls, 24 hours a day, without break or burnout. Automatic call scoring lets one manager review the quality of hundreds of calls instead of hand-picking a few. Real-time agent assist means newer agents perform like experienced ones from day one. The teams that use AI well do not just move faster—they also deliver more consistent customer experiences.</p>
                  </div>
                </div>
                <div className="pr-accordion__section">
                  <div className="pr-accordion__head">
                    <h3 id="best-contact-center-platforms-customer-service" className="min-h-[43px] flex items-center" style={{letterSpacing: '-0.5px'}}>
                      What are the best contact center platforms for customer service?
                    </h3>
                    <i className="accordion__plus">
                      <i className="accordion__icon" />
                    </i>
                  </div>
                  <div className="pr-accordion__body">
                    <p>The most frequently mentioned platforms include JustCall, Salesforce Service Cloud, Dialpad, Nextiva, Genesys Cloud, NICE CXone, and Zendesk. What separates them is depth of AI, ease of CRM integration, and how well they support both inbound and outbound workflows. JustCall stands out for teams that want AI built in from day one, not as a premium add-on. It includes AI transcription on the base plan, native two-way CRM sync with HubSpot and Salesforce, and a full AI Voice Agent available as an add-on at any tier. For support teams specifically, it is built to handle the full loop: routing, resolution, coaching, and reporting.</p>
                  </div>
                </div>
                <div className="pr-accordion__section">
                  <div className="pr-accordion__head">
                    <h3 id="contact-center-remote-distributed-teams" className="min-h-[43px] flex items-center" style={{letterSpacing: '-0.5px'}}>
                      Can contact center software support remote or distributed teams?
                    </h3>
                    <i className="accordion__plus">
                      <i className="accordion__icon" />
                    </i>
                  </div>
                  <div className="pr-accordion__body">
                    <p>Yes. JustCall is cloud-based, which means your agents can work from anywhere with an internet connection. The same features available in-office, including live call monitoring, shared inbox, and AI coaching, are available remotely. Role-based access controls mean managers maintain visibility and oversight regardless of where the team is located.</p>
                  </div>
                </div>
                <div className="pr-accordion__section">
                  <div className="pr-accordion__head">
                    <h3 id="contact-center-high-call-volume-peaks" className="min-h-[43px] flex items-center" style={{letterSpacing: '-0.5px'}}>
                      Can contact center software handle high call volumes during peak times?
                    </h3>
                    <i className="accordion__plus">
                      <i className="accordion__icon" />
                    </i>
                  </div>
                  <div className="pr-accordion__body">
                    <p>Yes. JustCall uses automated call distribution, skills-based routing, and virtual callback queues to manage peak periods without making customers wait on hold indefinitely. AI Voice Agents add another layer: they can handle multiple simultaneous inbound calls and hand off to humans only when needed, keeping response times low even during spikes.</p>
                  </div>
                </div>
                <div className="pr-accordion__section">
                  <div className="pr-accordion__head">
                    <h3 id="contact-center-personalized-customer-interactions" className="min-h-[43px] flex items-center" style={{letterSpacing: '-0.5px'}}>
                      Can customer interactions be personalized with contact center software?
                    </h3>
                    <i className="accordion__plus">
                      <i className="accordion__icon" />
                    </i>
                  </div>
                  <div className="pr-accordion__body">
                    <p>Yes, and this is one of the bigger advantages of a platform with deep CRM integration. When an agent picks up, they can see the customer's past interactions, open issues, and purchase history. JustCall's HubSpot and Salesforce integrations sync this context in real time, so every conversation starts with the right information. AI Voice Agents can also personalize interactions based on CRM data before a human agent gets involved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer CTA component */}
      <section className="footer-cta-component bg-[#FFFDE6] py-[30px] md:py-[60px]">
        <div className="container mx-auto">
          <div className="flex items-center flex-wrap lg:flex-nowrap lg:mx-[-18px]">
            <div className="footer-cta-component-txt basis-[100%] lg:basis-[65%] w-[100%] lg:w-auto lg:px-[18px]">
              <h2 className="h1 mb-[15px] lg:max-w-[600px] mr-auto text-center lg:text-left">Higher connect rates. Fewer wasted hours. </h2>
              <p className="text-center lg:text-left mb-[15px] lg:max-w-[500px]">Take a personalized 30-minute walkthrough of our AI dialer. No commitments, no hard sells.</p>
              <div className="btn-row lg:pt-[10px] justify-center lg:justify-start">
                <a href="/signup" className="btn btn-primary btn-lg try_for_free_footer_cta" style={{}} data-faitracker-click-bind="true">Start Free Trial</a>
                <a href="/demo" className="btn btn-outline btn-lg book_a_demo_footer_cta" style={{display: 'none !important', visibility: 'hidden !important'}} data-faitracker-click-bind="true">Book a Demo</a>
              </div>
            </div>
            <div className="footer-cta-component-img basis-[100%] lg:basis-[35%] lg:px-[18px] pt-[30px] lg:pt-0">
              <img src="https://cdn.justcall.io/assets-marketing/images/temp/footer-cta-fifteen-2026.webp" alt="Footer CTA Component Image" width={405} height={352} loading="lazy" className="w-full h-auto object-contain mx-auto" />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>

  )
}

export default Product