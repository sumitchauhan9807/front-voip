import { Link } from "react-router"

function Header() {
  return (
    <header className="header js-header navbar-header sticky top-0">
        <div className="relative py-[5px]">
          <div className="container mx-auto header-container-new">
            <div className="header__inner">
              <div className="header__inner-row">
                <aside className="header__logo">
                  <Link to="/" className="logo ps-md-1 ps-lg-0 menu_justcall_logo relative" data-faitracker-click-bind="true">
                    <img style={{height:"70px",marginTop:"0px"}} src="https://724voip.net/logo4.png" alt="JustCall Logo"  loading="eager" className="pointer-events-none" />
                  </Link>
                </aside>
                <div className="ml-auto mr-[20px] md:hidden">
                  <a href="/demo?internal-redirect=demo-mobile" className="btn btn-blue book-demo-nav opacity-0 start_free_trial_mobile_fixed" style={{display: 'none !important', visibility: 'hidden !important'}} data-faitracker-click-bind="true">Book a Demo</a>
                </div>
                <div className="mobile-trigger">
                  <span />
                </div>
                <div className="header__menu-col">
                  <nav className="header__menu-nav">
                    <ul className="top__nav justify-stretch">
                      <li className="header__menu-item has__sub-menu-lg has-dropdown">
                        <span data-id="products-menu">Products</span>
                      </li>
                      <li className="header__menu-item has__sub-menu-lg has-dropdown">
                        <span data-id="solutions-menu">Solutions</span>
                      </li>
                      <li className="header__menu-item has__sub-menu-sm has-dropdown resources-nav" id="ai-menu">
                        <span className="new_menu_migratetop menu_direct_link">Migrate</span>
                        <ul className="sub-menu-sm ai-sm-menu lg:!min-w-[850px]">
                          <li className="sub-menu-sm__col !w-full">
                            <div className="lg:w-full">
                              <div className="sub-menu__banner d-none">
                                <a href="migration/" className="new_menu_migratetojustcal w-full !text-[#000]" data-faitracker-click-bind="true">
                                  <div className="sub-menu__banner-inner pointer-events-none">
                                    <div>
                                      <p className="text-[20px] lg:text-[22px] leading-[1.2] font-calSans mb-[5px] tracking-wide flex items-center">
                                        Migrate to JustCall</p>
                                      <p className="flex items-center mb-0 text-[12px] font-[400] text-[#667085] mt-0">
                                        Hassle-free migration, 24/7 support, and zero downtime</p>
                                    </div>
                                    <div>
                                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="inline-block ml-1">
                                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                      </svg>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div className="lg:flex">
                                <ul className="sub-menu__links-col">
                                  <li className="header__sub-menu-item">
                                    <a href="migration/aircall-to-justcall/" className="new_menu_aircalltojustcall" data-faitracker-click-bind="true" />
                                    <div className="sub-menu-text">
                                      <p><strong>From Aircall</strong></p>
                                      <span>Upgrade to smarter call routing and more effective outreach</span>
                                    </div>
                                  </li>
                                  <li className="header__sub-menu-item">
                                    <a href="migration/kixie-to-justcall/" className="new_menu_kixietojustcall" data-faitracker-click-bind="true" />
                                    <div className="sub-menu-text">
                                      <p><strong>From Kixie</strong></p>
                                      <span>Unlock multi-channel outreach and AI-powered coaching</span>
                                    </div>
                                  </li>
                                  <li className="header__sub-menu-item">
                                    <a href="migration/ringcentral-to-justcall/" className="new_menu_ringcentraltojustcall" data-faitracker-click-bind="true" />
                                    <div className="sub-menu-text">
                                      <p><strong>From RingCentral</strong></p>
                                      <span>Add powerful SMS automations and ditch the bloat</span>
                                    </div>
                                  </li>
                                </ul>
                                <ul className="sub-menu__links-col">
                                  <li className="header__sub-menu-item">
                                    <a href="migration/phoneburner-to-justcall/" className="new_menu_phoneburnertojustcall" data-faitracker-click-bind="true" />
                                    <div className="sub-menu-text">
                                      <p><strong>From PhoneBurner</strong></p>
                                      <span>Automate SMS follow-ups and unlock AI coaching for more wins</span>
                                    </div>
                                  </li>
                                  <li className="header__sub-menu-item">
                                    <a href="migration/dialpad-to-justcall/" className="new_menu_dialpadtojustcall" data-faitracker-click-bind="true" />
                                    <div className="sub-menu-text">
                                      <p><strong>From Dialpad</strong></p>
                                      <span>Upgrade to AI-powered call coaching and CRM-friendly workflows</span>
                                    </div>
                                  </li>
                                  <li className="header__sub-menu-item">
                                    <a href="migration/orum-to-justcall/" className="new_menu_orumtojustcall" data-faitracker-click-bind="true" />
                                    <div className="sub-menu-text">
                                      <p><strong>From Orum</strong></p>
                                      <span>Level up outreach with SMS automations and AI-powered insights</span>
                                    </div>
                                  </li>
                                </ul>
                                <ul className="sub-menu__links-col">
                                  <li className="header__sub-menu-item">
                                    <a href="migration/nooks-to-justcall/" className="new_menu_nookstojustcall" data-faitracker-click-bind="true" />
                                    <div className="sub-menu-text">
                                      <p><strong>From Nooks</strong></p>
                                      <span>Go from dialer to a multi-channel communication platform</span>
                                    </div>
                                  </li>
                                  <li className="header__sub-menu-item">
                                    <a href="migration/cloudtalk-to-justcall/" className="new_menu_cloudtalktojustcall" data-faitracker-click-bind="true" />
                                    <div className="sub-menu-text">
                                      <p><strong>From CloudTalk</strong></p>
                                      <span>Replace basic IVRs with smarter call routing and automation</span>
                                    </div>
                                  </li>
                                  <li className="header__sub-menu-item">
                                    <a href="migration/openphone-to-justcall/" className="new_menu_openphonetojustcall" data-faitracker-click-bind="true" />
                                    <div className="sub-menu-text">
                                      <p><strong>From OpenPhone</strong></p>
                                      <span>Upgrade to powerful CRM automations and 24/7 support</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="header__menu-item has__sub-menu-sm has-dropdown resources-nav" id="resource-menu">
                        <span>Resources</span>
                        <ul className="sub-menu-sm !py-0 !px-0 z-10">
                          <div className="lg:flex">
                            <div className="lg:w-[27%] bg-[#F8FAFF] lg:py-[35px] px-[10px] lg:px-[15px] rounded-[10px] lg:rounded-bl-[10px] mt-[10px] lg:mt-0">
                              <ul className="!py-[10px] lg:!py-0 sm:grid sm:grid-cols-2 lg:grid-cols-1">
                                <li className="header__sub-menu-item">
                                  <a href="partner-program/solutions/" className="new_menu_solutionpartners" data-faitracker-click-bind="true" />
                                  <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/solution-partners-new-nav.svg" alt="solution partners" />
                                  <div className="sub-menu-text">
                                    <p><strong>Solution Partners</strong></p>
                                    <span>Become an expert and get access to help your customers win</span>
                                  </div>
                                </li>
                                <li className="header__sub-menu-item">
                                  <a href="partner-program/tech/" className="new_menu_technologypartners" data-faitracker-click-bind="true" />
                                  <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/technology-partnerships-new-nav.svg" alt="Integration partnerships" />
                                  <div className="sub-menu-text">
                                    <p><strong>Integration Partnerships</strong></p>
                                    <span>Add powerful customer communications capabilities to your platform</span>
                                  </div>
                                </li>
                                <li className="header__sub-menu-item">
                                  <a href="affiliates/" className="new_menu_affiliatepartners" data-faitracker-click-bind="true" />
                                  <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/hire-an-expert-nav.svg" alt="affiliate partnerships" />
                                  <div className="sub-menu-text">
                                    <p><strong>Affiliate Partnerships</strong></p>
                                    <span>Refer your audience and build revenue from each subscription</span>
                                  </div>
                                </li>
                                <li className="header__sub-menu-item">
                                  <a href="/solution-partners" className="new_menu_hire" data-faitracker-click-bind="true" />
                                  <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/hire-an-expert-nav-new.svg" alt="" />
                                  <div className="sub-menu-text">
                                    <p><strong>Hire An Expert</strong></p>
                                    <span>Set up your team for success with our partners</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="lg:w-[72%] py-0 lg:pt-[35px] lg:pb-[25px] lg:ml-auto">
                              <li className="sub-menu-sm__col !w-full lg:!w-[65%]">
                                <ul className="!pt-[10px] lg:!pt-0">
                                  <div className="sub-menu-sm__col_inner-container">
                                    <ul>
                                      <li className="header__sub-menu-item">
                                        <a href="https://justcall.io/webinar/" className="new_menu_webinars" data-faitracker-click-bind="true" />
                                        <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/blue-webinar-nav.svg" alt="Platform" />
                                        <div className="sub-menu-text">
                                          <p><strong>Webinars</strong></p>
                                          <span>Join live webinars &amp; expert sessions, or watch demos on
                                            demand</span>
                                        </div>
                                      </li>
                                      <li className="header__sub-menu-item">
                                        <a href="ai-agent-directory/" className="new_menu_ai_agent_directory" data-faitracker-click-bind="true" />
                                        <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/ai-agent-nav.svg" alt="AI Agent Directory" />
                                        <div className="sub-menu-text">
                                          <p><strong>AI Agent Directory</strong></p>
                                          <span> Discover AI agents for all your needs</span>
                                        </div>
                                      </li>
                                      <li className="header__sub-menu-item">
                                        <a href="free-tools/" className="new_menu_free_business_tools" data-faitracker-click-bind="true" />
                                        <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/free-business-nav.svg" alt="Free Business Tools" />
                                        <div className="sub-menu-text">
                                          <p><strong>Free Business Tools</strong></p>
                                          <span>Measure impact. Find savings. Drive growth.</span>
                                        </div>
                                      </li>
                                      <li className="header__sub-menu-item">
                                        <a href="resource-hub/guides/" className="new_menu_guides" data-faitracker-click-bind="true" />
                                        <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/guides-nav.svg" alt="Guides" />
                                        <div className="sub-menu-text">
                                          <p><strong>Guides</strong></p>
                                          <span>Explore our up-to-date guides and resources</span>
                                        </div>
                                      </li>
                                      <li className="header__sub-menu-item">
                                        <a href="blog/" className="new_menu_blog" data-faitracker-click-bind="true" />
                                        <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/blog-nav.svg" alt="Platform" />
                                        <div className="sub-menu-text">
                                          <p><strong>Blog</strong></p>
                                          <span>Learn latest insights and tips for customer-centric
                                            communications</span>
                                        </div>
                                      </li>
                                      {/* <li class="header__sub-menu-item">
                                          <a href="https://justcall.io/tools/call-center-roi-calculator/" class="new_menu_videos"></a>
                                          <img width="30" height="30" loading="lazy"
                                              src="https://cdn.justcall.io/assets-marketing/images/svg/videos-nav.svg" alt="Platform">
                                          <div class="sub-menu-text">
                                              <p><strong>Videos</strong></p>
                                              <span>Watch JustCall in action</span>
                                          </div>
                                      </li> */}
                                    </ul>
                                    <ul>
                                      <li className="header__sub-menu-item">
                                        <a href="just-talk/" className="new_menu_justtalk" data-faitracker-click-bind="true" />
                                        <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/justtalk-nav.svg" alt="Platform" />
                                        <div className="sub-menu-text">
                                          <p><strong>Just Talk</strong></p>
                                          <span>Bi-weekly newsletter with sales insights and tips you can actually use</span>
                                        </div>
                                      </li>
                                      <li className="header__sub-menu-item">
                                        <a href="customer-stories/" className="new_menu_customerstories" data-faitracker-click-bind="true" />
                                        <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/customer-stories-nav.svg" alt="Platform" />
                                        <div className="sub-menu-text">
                                          <p><strong>Customer Stories</strong></p>
                                          <span>Discover our customers' stories of
                                            transformation</span>
                                        </div>
                                      </li>
                                      <li className="header__sub-menu-item">
                                        <a href="customers-wall-of-love/" className="new_menu_walloflove" data-faitracker-click-bind="true" />
                                        <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/wall-of-fame-nav.svg" alt="Platform" />
                                        <div className="sub-menu-text">
                                          <p><strong>Customer Reviews</strong></p>
                                          <span>See why our customers love us</span>
                                        </div>
                                      </li>
                                      <li className="header__sub-menu-item">
                                        <a href="/referral-program/" className="new_menu_referralprogram" data-faitracker-click-bind="true" />
                                        <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/referral-program-nav.svg" alt="Platform" />
                                        <div className="sub-menu-text">
                                          <p><strong>Referral Program</strong></p>
                                          <span>Introduce your circle to JustCall and get rewarded</span>
                                        </div>
                                      </li>
                                      <li className="header__sub-menu-item">
                                        <a href="https://help.justcall.io/en/" className="new_menu_helpcenter" data-faitracker-click-bind="true" />
                                        <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/help-center-nav.svg" alt="help center" />
                                        <div className="sub-menu-text">
                                          <p><strong>Help Center</strong></p>
                                          <span>Got questions? Find answers in our knowledge base</span>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </ul>
                              </li>
                              <li className="sub-menu-sm__col hidden lg:block !w-[32%]">
                                <ul className="sub-menu__links-col last-col">
                                  <p className="font-[600] text-[#667085] text-[10px] uppercase mb-[10px]">
                                    Featured
                                  </p>
                                  <img src="https://cdn.justcall.io/assets-marketing/images/temp/justcall_solution_program.webp" alt="Menu Feature Dialer" loading="lazy" width={220} height={177} className="rounded-[7px] w-full" />
                                  <p className="text-[16px] leading-[1.5] mt-3 mb-0 font-[400]">Join our Solutions Program
                                    to bring the JustCall difference to your clients</p>
                                  <a href="partner-program/solutions/" className="btn btn-arrow btn-sm menu-feature-business-podcast" data-faitracker-click-bind="true">Learn More</a>
                                </ul>
                              </li>
                              <li className="see-all-features see-resources !w-full lg:!w-[63%]">
                                <a href="resource-hub" className="new_menu_allresources" data-faitracker-click-bind="true">View
                                  all resources <img width={30} height={30} src="https://cdn.justcall.io/assets-marketing/images/svg/sub-menu-arrow.svg" alt="Menu Icon" className="pointer-events-none" /></a>
                              </li>
                            </div>
                          </div>
                        </ul>
                      </li>
                      <li className="header__menu-item" id="customers-menu">
                        <a href="pricing/" className="new_menu_pricing menu_direct_link" data-faitracker-click-bind="true">Pricing</a>
                      </li>
                      {/* <li class="header__menu-item has__sub-menu-sm has-dropdown resources-nav" id="customers-menu">
          <span>Customers</span>
          <ul class="sub-menu-sm single-col">
              <li class="sub-menu-sm__col !w-full">
                  <div>
                      <ul>
                      </ul>
                  </div>
              </li>
          </ul>
      </li> */}
                      <li className="header__menu-item" id="contact-menu" style={{display: 'none !important', visibility: 'hidden !important'}}>
                        <a href="contact-us/" className="new_menu_contact menu_direct_link" data-faitracker-click-bind="true">Contact</a>
                      </li>
                      <li className="header__menu-item call-gradient-btn-nav relative lg:mr-[10px] !ml-auto">
                        <a href="tel:+19516668896" target="_blank" className="call-gradient-btn btn btn-outline !flex sm:!hidden justify-center lg:justify-start new_menu_sales_agent hover:!bg-transparent active" rel="noopener noreferrer" style={{opacity: 1}} data-faitracker-click-bind="true">
                          <svg width={31} height={32} className="call-icon" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.78" d="M16.3413 4.76099C16.3413 4.76099 19.0994 5.01172 22.6096 8.52197C26.1199 12.0322 26.3706 14.7903 26.3706 14.7903" stroke="#004ce6" strokeWidth="2.05145" strokeLinecap="round" />
                            <path opacity="0.78" d="M16.6011 9.19354C16.6011 9.19354 17.8421 9.54813 19.7037 11.4097C21.5653 13.2713 21.9199 14.5124 21.9199 14.5124" stroke="#004ce6" strokeWidth="2.05145" strokeLinecap="round" />
                            <path d="M11.3738 8.9184L12.1875 10.3763C12.9217 11.692 12.627 13.418 11.4705 14.5745C11.4705 14.5745 10.0677 15.9772 12.6111 18.5206C15.1544 21.0639 16.5572 19.6612 16.5572 19.6612C17.7137 18.5047 19.4397 18.2099 20.7554 18.9442L22.2133 19.7579C24.2 20.8666 24.4347 23.6528 22.6884 25.3991C21.639 26.4484 20.3536 27.2649 18.9326 27.3187C16.5404 27.4094 12.4779 26.804 8.40276 22.7289C4.32763 18.6538 3.72221 14.5913 3.8129 12.1991C3.86677 10.7781 4.68326 9.49266 5.73258 8.44334C7.47888 6.69706 10.265 6.93168 11.3738 8.9184Z" stroke="#004ce6" strokeWidth="2.05145" strokeLinecap="round" />
                          </svg>
                          <span>+1 (951) 666-8896</span>
                        </a>
                        <span className="hover:!bg-transparent call-gradient-btn desktop-call-gradient-btn btn btn-outline !hidden sm:!flex justify-center lg:justify-start new_menu_sales_agent !cursor-text w-full lg:w-auto opacity-0 active" style={{opacity: 1}}>
                          <svg width={31} height={32} className="call-icon" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.78" d="M16.3413 4.76099C16.3413 4.76099 19.0994 5.01172 22.6096 8.52197C26.1199 12.0322 26.3706 14.7903 26.3706 14.7903" stroke="#004ce6" strokeWidth="2.05145" strokeLinecap="round" />
                            <path opacity="0.78" d="M16.6011 9.19354C16.6011 9.19354 17.8421 9.54813 19.7037 11.4097C21.5653 13.2713 21.9199 14.5124 21.9199 14.5124" stroke="#004ce6" strokeWidth="2.05145" strokeLinecap="round" />
                            <path d="M11.3738 8.9184L12.1875 10.3763C12.9217 11.692 12.627 13.418 11.4705 14.5745C11.4705 14.5745 10.0677 15.9772 12.6111 18.5206C15.1544 21.0639 16.5572 19.6612 16.5572 19.6612C17.7137 18.5047 19.4397 18.2099 20.7554 18.9442L22.2133 19.7579C24.2 20.8666 24.4347 23.6528 22.6884 25.3991C21.639 26.4484 20.3536 27.2649 18.9326 27.3187C16.5404 27.4094 12.4779 26.804 8.40276 22.7289C4.32763 18.6538 3.72221 14.5913 3.8129 12.1991C3.86677 10.7781 4.68326 9.49266 5.73258 8.44334C7.47888 6.69706 10.265 6.93168 11.3738 8.9184Z" stroke="#004ce6" strokeWidth="2.05145" strokeLinecap="round" />
                          </svg>
                          <span className="!cursor-text border-b-[1.5px] border-b-[#004CE6]">+1 (951) 666-8896</span>
                        </span>
                      </li>
                      <li className="header__menu-item menu-btn-new lg:!ml-[5px] menu-btn-start-free-trial">
                        <a href="signup/" className="btn btn-outline try_for_free_menu_cta ampl-signup signup-link" id="signup-cta-nav" data-faitracker-click-bind="true">Start Free Trial</a>
                      </li>
                      <li className="header__menu-item !hidden lg:!block lg:!ml-[5px] book-demo-nav opacity-0 menu-btn-new" style={{display: 'none !important', visibility: 'hidden !important'}}>
                        <a href="/demo/?internal-redirect=book-demo-menu" className="book_a_demo_menu_CTA ampl-demo demo-link btn btn-primary" style={{display: 'none !important', visibility: 'hidden !important'}} data-faitracker-click-bind="true">Book a Demo</a>
                      </li>
                      <li className="header__menu-item relative menu-btn-new lg:!ml-[5px] mt-[10px] lg:mt-0 !hidden lg:!block">
                        <a href="/login" className="new_menu_login login-link header-login-new" data-faitracker-click-bind="true">
                          <div className="w-[40px] h-[40px] flex items-center border border-[#98A2B3] justify-center rounded-[5px] bg-transparent pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" className="pointer-events-none">
                              <g clipPath="url(#clip0_5227_35736)">
                                <path d="M8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7Z" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </g>
                              <defs>
                                <clipPath id="clip0_5227_35736">
                                  <rect width={24} height={24} fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </a>
                      </li>
                      <li className="header__menu-item relative menu-btn-new login-menu-item lg:!ml-[5px] mt-0 !pb-[15px] !block lg:!hidden !mb-[20px] lg:!mb-0">
                        <a href="/login" className="new_menu_login login-link header-login-new" data-faitracker-click-bind="true">
                          Login
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* /.header__aside */}
                {/* /.header__content */}
              </div>
              {/* /.row */}
            </div>
            {/* /.header__inner */}
          </div>
          {/* /.container */}
          <div className="sub-menu-sm menu-solutions menu-product full-width-menu bg-white" id="products-menu">
            <div className="container mx-auto">
              <div className="sub-menu-lg">
                <div className="sub-menu-lg__left">
                  <ul>
                    <li data-id="bs-phone-system" className="sub-menu-active">
                      <span>Cloud Phone System</span>
                    </li>
                    <li data-id="messaging-m">
                      <span>Messaging</span>
                    </li>
                    <li data-id="ai-agents">
                      <span>AI Agents <span className="new-pill">New</span></span>
                    </li>
                    <li data-id="agent-coaching-ai">
                      <span>AI Copilot</span>
                    </li>
                    <li data-id="automation-m">
                      <span>Automation &amp; Workflows</span>
                    </li>
                    <li data-id="integrations">
                      <span>Integrations</span>
                    </li>
                    <li data-id="platform">
                      <span>Platform Overview</span>
                    </li>
                    <li className="see-all-features dark-blue">
                      <a href="features/" className="new_menu_features" data-faitracker-click-bind="true">See all features <img src="https://cdn.justcall.io/assets-marketing/images/svg/sub-menu-arrow.svg" alt="Menu Icon" width={15} height={15} loading="lazy" className="!w-[15px] h-auto pointer-events-none" /></a>
                    </li>
                  </ul>
                </div>
                <div className="sub-menu-lg__right">
                  <div className="sub-menu-toggle" id="bs-phone-system">
                    <div className="sub-menu__links-row sub-menu__links-2col">
                      <div className="lg:w-2/3">
                        <div className="sub-menu__banner ">
                          <a href="product/ai-voice-agent/" className="new_menu_ai_voice_agent" data-faitracker-click-bind="true">
                            <div className="sub-menu__banner-inner pointer-events-none">
                              <div>
                                <p className="text-[20px] lg:text-[22px] leading-[1.2] font-calSans mb-[5px] tracking-wide flex items-center">
                                  AI Voice Agent <span className="new-pill font-inter ml-[10px] font-[500] tracking-normal !text-[11px]">New</span></p>
                                <p className="flex items-center mb-0 text-[12px] font-[400] text-[#667085] mt-0">
                                  The only AI solution thats built for you</p>
                              </div>
                              <div>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="ml-2">
                                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="lg:flex">
                          <ul className="sub-menu__links-col">
                            {/* <li class="header__sub-menu-item">
                                  <a href="product/ai-voice-agent/" class="new_menu_ai-voice-agent"></a>
                                  <img width="30" height="30" loading="lazy"
                                      src="https://cdn.justcall.io/assets-marketing/images/svg/ai-voice-agent-menu-nav.svg"
                                      alt="Platform">
                                  <div class="sub-menu-text">
                                      <p><strong>AI Voice Agent</strong><span
                                              class="new-pill !text-[#004ce6] !inline-block !ml-[10px] !relative -top-px !w-auto">New</span>
                                      </p>
                                      <span>Answer inbound calls 24/7, book more meetings</span>
                                  </div>
                              </li> */}
                            <li className="header__sub-menu-item">
                              <Link to="/product" className="new_menu_inbound" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/inbound-call-center-nav.svg" alt="Inbound call center" />
                              <div className="sub-menu-text">
                                <p><strong>Inbound Contact Center</strong></p>
                                <span>Build superior customer <br /> experiences</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <Link to="/product" className="new_menu_businessphone" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/bs-phone-system-nav.svg" alt="Business phone system" />
                              <div className="sub-menu-text">
                                <p><strong>Business Phone System</strong></p>
                                <span>Build seamless voice and SMS workflows on a single
                                  platform</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <Link to="/product" className="new_menu_multilevel" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/multilevel-ivr-nav.svg" alt="Multi-level IVR" />
                              <div className="sub-menu-text">
                                <p><strong>IVR (Call Menu)</strong></p>
                                <span>Guide your customers to the right solution with
                                  interactive options</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/forward-to-phone/" className="new_menu_callforwarding" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/call-fw-nav.svg" alt="Call forwarding" />
                              <div className="sub-menu-text">
                                <p><strong>Call Forwarding</strong></p>
                                <span>Redirect incoming calls for faster handling and resolution</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/call-distribution/" className="new_menu_automatedcalldistribution" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/acd-nav.svg" alt="ACD" />
                              <div className="sub-menu-text">
                                <p><strong>Automated Call Distribution</strong></p>
                                <span>Automatically receive and distribute calls to the
                                  right agents</span>
                              </div>
                            </li>
                          </ul>
                          <ul className="sub-menu__links-col">
                            <li className="header__sub-menu-item">
                              <a href="product/sales-dialer/" className="new_menu_salesdialer" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/power-dialer-nav.svg" alt="Power dialer" />
                              <div className="sub-menu-text">
                                <p><strong>Sales Dialer</strong></p>
                                <span>Maximize sales outreach with dialing automation</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="solution/outbound-call-center-software/" className="new_menu_outbound" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/outbound-call-center-nav.svg" alt="Outbound call center" />
                              <div className="sub-menu-text">
                                <p><strong>Outbound Call Center</strong></p>
                                <span>Reach customers with seamless outbound calling capabilities</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/record-phone-calls/" className="new_menu_callrecording" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/call-rec-nav.svg" alt="Call recording" />
                              <div className="sub-menu-text">
                                <p><strong>Call Recording</strong></p>
                                <span>Automatically record calls and improve customer
                                  interactions</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/call-center-analytics/" className="new_menu_advancedanalytics" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/advanced-analytics-nav.svg" alt="Advanced analytics" />
                              <div className="sub-menu-text">
                                <p><strong>Advanced Analytics</strong></p>
                                <span>Monitor real-time performance of agents with
                                  meaningful metrics</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <ul className="sub-menu__links-col last-col">
                        <p className="font-[600] text-[#667085] text-[10px] uppercase mb-[10px]">Featured</p>
                        <a href="webinar/justcall-weekly-demo/?internal-redirect=weekly-demo-nav-bar" className="menu-feature-weeklydemo" data-faitracker-click-bind="true">
                          <img src="https://cdn.justcall.io/assets-marketing/images/temp/jc-weekly-demo-navbar.png" alt="Menu Feature Dialer" loading="lazy" width={220} height={177} />
                        </a>
                        <p className="leading-normal text-[16px] mt-3 mb-0 font-[400]">Join JustCall Power Hour: A no-pitch, 30-minute group demo.</p>
                        <a href="webinar/justcall-weekly-demo/?internal-redirect=weekly-demo-nav-bar" className="btn btn-arrow btn-sm menu-feature-weeklydemo" data-faitracker-click-bind="true">Learn More</a>
                      </ul>
                    </div>
                  </div>
                  <div className="sub-menu-toggle menu-pink-banner" id="messaging-m">
                    <div className="sub-menu__links-row sub-menu__links-2col">
                      <div className="lg:w-2/3">
                        <div className="sub-menu__banner ">
                          <a href="product/email/" className="new_menu_email" data-faitracker-click-bind="true">
                            <div className="sub-menu__banner-inner pointer-events-none">
                              <div>
                                <p className="text-[20px] lg:text-[22px] leading-[1.2] font-calSans mb-[5px] tracking-wide flex items-center">
                                  JustCall Email</p>
                                <p className="flex items-center mb-0 text-[12px] font-[400] text-[#667085] mt-0">
                                  Work together on customer emails with your team</p>
                              </div>
                              <div>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="ml-2">
                                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="lg:flex">
                          <ul className="sub-menu__links-col">
                            <li className="header__sub-menu-item">
                              <a href="product/send-and-receive-sms/" className="new_menu_smsmmsinbox" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/sms-mms-inbox-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>SMS &amp; MMS Inbox</strong></p>
                                <span>Send and receive texts and multimedia messages</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/sms-workflows/" className="new_menu_smsworkflows" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/sms-worflows-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>SMS Workflows</strong></p>
                                <span>Build dynamic workflows for seamless business
                                  messaging</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/whatsapp-sms-messaging/" className="new_menu_whatsappinbox" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/whatsapp-inbox-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>WhatsApp Inbox</strong></p>
                                <span>Connect and collaborate with a shared WhatsApp
                                  inbox</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/sms-copilot/" className="new_menu_smscopilot" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/sms-copilot-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>SMS Copilot</strong></p>
                                <span>Frame on-point business texts with AI-powered
                                  insights</span>
                              </div>
                            </li>
                          </ul>
                          <ul className="sub-menu__links-col">
                            <li className="header__sub-menu-item">
                              <a href="solution/sms-campaign/" className="new_menu_smscampaigns" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/sms-campaigns-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>SMS Campaigns</strong></p>
                                <span>Send promotions, reminders, and updates</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/bulk-sms/" className="new_menu_bulksms" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/bulk-sms-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>Bulk SMS</strong></p>
                                <span>Reach your prospects and customers at scale</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/sms-bot/" className="new_menu_smsbot" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/sms-bots-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>SMS Bots</strong></p>
                                <span>Send automated answers, follow-ups, and responses</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <ul className="sub-menu__links-col last-col">
                        <p className="font-[600] text-[#667085] text-[10px] uppercase mb-[10px]">Featured</p>
                        <a href="webinar/justcall-weekly-demo/?internal-redirect=weekly-demo-nav-bar" className="menu-feature-weeklydemo" data-faitracker-click-bind="true">
                          <img src="https://cdn.justcall.io/assets-marketing/images/temp/jc-weekly-demo-navbar.png" alt="Menu Feature Dialer" loading="lazy" width={220} height={177} />
                        </a>
                        <p className="leading-normal text-[16px] mt-3 mb-0 font-[400]">Join JustCall Power Hour: A no-pitch, 30-minute group demo.</p>
                        <a href="webinar/justcall-weekly-demo/?internal-redirect=weekly-demo-nav-bar" className="btn btn-arrow btn-sm menu-feature-weeklydemo" data-faitracker-click-bind="true">Learn More</a>
                      </ul>
                    </div>
                  </div>
                  <div className="sub-menu-toggle" id="ai-agents">
                    <div className="sub-menu__links-row sub-menu__links-2col">
                      <div className="lg:w-2/3">
                        <div className="sub-menu__banner ">
                          <a href="product/ai-voice-agent/" className="new_menu_ai_voice_agent" data-faitracker-click-bind="true">
                            <div className="sub-menu__banner-inner pointer-events-none">
                              <div>
                                <p className="text-[20px] lg:text-[22px] leading-[1.2] font-calSans mb-[5px] tracking-wide flex items-center">
                                  AI Voice Agent <span className="new-pill font-inter ml-[10px] font-[500] tracking-normal !text-[11px]">New</span> </p>
                                <p className="flex items-center mb-0 text-[12px] font-[400] text-[#667085] mt-0">
                                  The only AI solution thats built for you</p>
                              </div>
                              <div>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="ml-2">
                                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="lg:flex">
                          <ul className="sub-menu__links-col">
                            <li className="header__sub-menu-item">
                              <a href="product/outbound-ai-voice-agent/" className="new_menu_outbound_ai_voice_agent" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/outbound-ai-voice-agent-nav.svg" alt="outbound ai voice agent" />
                              <div className="sub-menu-text">
                                <p><strong>Outbound AI Voice Agent</strong></p>
                                <span>Turn form fills into qualified sales leads in under 60 seconds</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/answering-services/" className="new_menu_answering_service" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/answering-service-nav.svg" alt="answering service" />
                              <div className="sub-menu-text">
                                <p><strong>Answering service</strong></p>
                                <span>Reliable answering service to manage calls around the clock without extra staffing.</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/ai-voice-agent/ai-sdr/" className="new_menu_ai_sdr" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/ai-sdr-nav.svg" alt="ai sdr" />
                              <div className="sub-menu-text">
                                <p><strong>AI SDR</strong></p>
                                <span>AI-driven sales agent that qualifies leads and schedules meetings for your team.</span>
                              </div>
                            </li>
                          </ul>
                          <ul className="sub-menu__links-col">
                            <li className="header__sub-menu-item">
                              <a href="product/ai-receptionist/" className="new_menu_ai_receptionist" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/ai-receptionist-nav.svg" alt="ai receptionist" />
                              <div className="sub-menu-text">
                                <p><strong>AI receptionist</strong></p>
                                <span>Smart, human-like receptionist to handle calls, book meetings, and route inquiries.</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/virtual-phone-answering/" className="new_menu_virtual_phone_answering" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/virtual-phone-answering-nav.svg" alt="virtual phone answering" />
                              <div className="sub-menu-text">
                                <p><strong>Virtual phone answering</strong></p>
                                <span>Professional phone answering service that engages callers and captures messages.
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <ul className="sub-menu__links-col last-col">
                        <p className="font-[600] text-[#667085] text-[10px] uppercase mb-[10px]">Featured</p>
                        <a href="webinar/justcall-weekly-demo/?internal-redirect=weekly-demo-nav-bar" className="menu-feature-weeklydemo" data-faitracker-click-bind="true">
                          <img src="https://cdn.justcall.io/assets-marketing/images/temp/jc-weekly-demo-navbar.png" alt="Menu Feature Dialer" loading="lazy" width={220} height={177} />
                        </a>
                        <p className="leading-normal text-[16px] mt-3 mb-0 font-[400]">Join JustCall Power Hour: A no-pitch, 30-minute group demo.</p>
                        <a href="webinar/justcall-weekly-demo/?internal-redirect=weekly-demo-nav-bar" className="btn btn-arrow btn-sm menu-feature-weeklydemo" data-faitracker-click-bind="true">Learn More</a>
                      </ul>
                    </div>
                  </div>
                  <div className="sub-menu-toggle" id="agent-coaching-ai">
                    <div className="sub-menu__links-row sub-menu__links-2col">
                      <div className="lg:w-2/3">
                        <div className="sub-menu__banner ">
                          <a href="product/ai-voice-agent/" className="new_menu_ai_voice_agent" data-faitracker-click-bind="true">
                            <div className="sub-menu__banner-inner pointer-events-none">
                              <div>
                                <p className="text-[20px] lg:text-[22px] leading-[1.2] font-calSans mb-[5px] tracking-wide flex items-center">
                                  AI Voice Agent <span className="new-pill font-inter ml-[10px] font-[500] tracking-normal !text-[11px]">New</span></p>
                                <p className="flex items-center mb-0 text-[12px] font-[400] text-[#667085] mt-0">
                                  The only AI solution thats built for you</p>
                              </div>
                              <div>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="ml-2">
                                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="lg:flex">
                          <ul className="sub-menu__links-col">
                            <li className="header__sub-menu-item">
                              <a href="solution/conversation-intelligence/" className="new_menu_conversationintelligence" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/ci-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>Conversation Intelligence</strong></p>
                                <span>Achieve peak agent productivity and drive customer
                                  delight</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/ai-coaching/" className="new_menu_aicoaching" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/ai-coaching-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>AI Coaching</strong></p>
                                <span>Ramp up and train agents rapidly with personalized
                                  coaching plans</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/ai-agent-assist/" className="new_menu_agentassist" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/agent-assist-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>Agent Assist</strong></p>
                                <span>Boost agents' success rate with real-time AI-powered
                                  guidance</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/sms-copilot/" className="new_menu_smscopilot" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/sms-copilot-pink-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>SMS Copilot</strong></p>
                                <span>Frame on-point business texts with AI-powered insights
                                </span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/ai-call-scoring/" className="new_menu_callscoring" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/automatic-call-scoring-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>Automatic Call Scoring</strong></p>
                                <span>Evaluate performance instantly and save hours on
                                  manual assessment</span>
                              </div>
                            </li>
                          </ul>
                          <ul className="sub-menu__links-col">
                            <li className="header__sub-menu-item">
                              <a href="product/ai-analytics/" className="new_menu_agentanalytics" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/agent-analytics-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>Agent Analytics</strong></p>
                                <span>Get a 360 degree view of agent performance</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/ai-call-transcription-summary/" className="new_menu_calltranscription" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/call-transcription-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>Call Transcription</strong></p>
                                <span>Ditch manual note taking with AI-based summary &amp;
                                  transcriptions</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/moment-analysis/" className="new_menu_momentanalysis" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/sentiment-analysis-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>Moment Analysis</strong></p>
                                <span>Highlight and revisit key moments from calls</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/ai-sentiment-analysis/" className="new_menu_sentimentanalysis" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/moment-analysis-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>Sentiment Analysis</strong></p>
                                <span>Track and detect customer sentiment </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <ul className="sub-menu__links-col last-col">
                        <p className="font-[600] text-[#667085] text-[10px] uppercase mb-[10px]">Featured</p>
                        <a href="webinar/justcall-weekly-demo/?internal-redirect=weekly-demo-nav-bar" className="menu-feature-weeklydemo" data-faitracker-click-bind="true">
                          <img src="https://cdn.justcall.io/assets-marketing/images/temp/jc-weekly-demo-navbar.png" alt="Menu Feature Dialer" loading="lazy" width={220} height={177} />
                        </a>
                        <p className="leading-normal text-[16px] mt-3 mb-0 font-[400]">Join JustCall Power Hour: A no-pitch, 30-minute group demo.</p>
                        <a href="webinar/justcall-weekly-demo/?internal-redirect=weekly-demo-nav-bar" className="btn btn-arrow btn-sm menu-feature-weeklydemo" data-faitracker-click-bind="true">Learn More</a>
                      </ul>
                    </div>
                  </div>
                  <div className="sub-menu-toggle" id="automation-m">
                    <div className="sub-menu__links-row sub-menu__links-2col">
                      <div className="lg:w-2/3">
                        <div className="sub-menu__banner ">
                          <a href="product/workflows/ " className="new_menu_workflow_main" data-faitracker-click-bind="true">
                            <div className="sub-menu__banner-inner pointer-events-none">
                              <div>
                                <p className="text-[20px] lg:text-[22px] leading-[1.2] font-calSans mb-[5px] tracking-wide flex items-center">
                                  Workflows <span className="new-pill font-inter ml-[10px] font-[500] tracking-normal !text-[11px]">New</span></p>
                                <p className="flex items-center mb-0 text-[12px] font-[400] text-[#667085] mt-0">Manage multi-channel conversations with AI agents in your workflows.</p>
                              </div>
                              <div>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="ml-2">
                                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="lg:flex">
                          <ul className="sub-menu__links-col">
                            <li className="header__sub-menu-item">
                              <a href="integration/" className="new_menu_integration" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/crm-integration-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>CRM Integration</strong></p>
                                <span>Build automated calling and SMS workflows with CRM
                                  integrations</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/call-distribution/" className="new_menu_automatedcalldistribution" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/acd-green-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>Automated Call Distribution</strong></p>
                                <span>Automatically receive and distribute calls to the
                                  right agents</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/call-disposition/" className="new_menu_calldisposition" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/call-disposition-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>Call Disposition</strong></p>
                                <span>Seamlessly group and track conversations by
                                  outcomes</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/sms-bot/" className="new_menu_smsbots" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/sms-bots-pink-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>SMS Bots</strong></p>
                                <span>Send automated answers, follow-ups, and responses</span>
                              </div>
                            </li>
                          </ul>
                          <ul className="sub-menu__links-col">
                            <li className="header__sub-menu-item">
                              <a href="product/sms-workflows/" className="new_menu_smsworkflows" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/sms-worflows-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>SMS Workflows</strong></p>
                                <span>Build dynamic workflows for seamless business
                                  messaging</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/ai-call-scoring/" className="new_menu_automatedcallscoring" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/automated-call-scoring-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>Automated Call Scoring</strong></p>
                                <span>Assign call scores and build customized agent training
                                  pathways</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/predictive-dialer/" className="new_menu_predictivedialer" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/pre-dialer-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>Predictive Dialer</strong></p>
                                <span>Enhance contact rates with dialing automation
                                  software</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <ul className="sub-menu__links-col last-col">
                        <p className="font-[600] text-[#667085] text-[10px] uppercase mb-[10px]">Featured</p>
                        <a href="webinar/justcall-weekly-demo/?internal-redirect=weekly-demo-nav-bar" className="menu-feature-weeklydemo" data-faitracker-click-bind="true">
                          <img src="https://cdn.justcall.io/assets-marketing/images/temp/jc-weekly-demo-navbar.png" alt="Menu Feature Dialer" loading="lazy" width={220} height={177} />
                        </a>
                        <p className="leading-normal text-[16px] mt-3 mb-0 font-[400]">Join JustCall Power Hour: A no-pitch, 30-minute group demo.</p>
                        <a href="webinar/justcall-weekly-demo/?internal-redirect=weekly-demo-nav-bar" className="btn btn-arrow btn-sm menu-feature-weeklydemo" data-faitracker-click-bind="true">Learn More</a>
                      </ul>
                    </div>
                  </div>
                  <div className="sub-menu-toggle" id="integrations">
                    <div className="lg:flex h-full">
                      <div className="lg:w-2/3">
                        <div className="sub-menu__links-row column">
                          <ul className="sub-menu-integrations">
                            <li className="integration-item">
                              <a href="integration/hubspot/" className="new_menu_hubspot" data-faitracker-click-bind="true">
                                <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/temp/hubspot-int-nav.webp" alt="Integrations" />
                                <span>Hubspot</span>
                              </a>
                            </li>
                            <li className="integration-item">
                              <a href="integration/salesforce/" className="new_menu_salesforce" data-faitracker-click-bind="true">
                                <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/temp/salesforce-int-nav.webp" alt="Integrations" />
                                <span>Salesforce</span>
                              </a>
                            </li>
                            <li className="integration-item">
                              <a href="integration/pipedrive/" className="new_menu_pipedrive" data-faitracker-click-bind="true">
                                <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/temp/pipedrive-int-nav.webp" alt="Integrations" />
                                <span>Pipedrive</span>
                              </a>
                            </li>
                            <li className="integration-item">
                              <a href="integration/active-campaign/" className="new_menu_activecampaign" data-faitracker-click-bind="true">
                                <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/temp/active-camp-nav.webp" alt="Integrations" />
                                <span>ActiveCampaign</span>
                              </a>
                            </li>
                            <li className="integration-item">
                              <a href="integration/monday/" className="new_menu_monday" data-faitracker-click-bind="true">
                                <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/temp/monday-int-nav.webp" alt="Integrations" />
                                <span>monday.com</span>
                              </a>
                            </li>
                            <li className="integration-item">
                              <a href="integration/zoho-crm/" className="new_menu_zohocrm" data-faitracker-click-bind="true">
                                <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/zoho-int-nav.svg" alt="Integrations" />
                                <span>Zoho</span>
                              </a>
                            </li>
                            <li className="integration-item">
                              <a href="integration/zendesk/" className="new_menu_zendesk" data-faitracker-click-bind="true">
                                <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/temp/zendesk-int-nav.webp" alt="Integrations" />
                                <span>Zendesk</span>
                              </a>
                            </li>
                            <li className="integration-item">
                              <a href="integration/freshdesk/" className="new_menu_freshdesk" data-faitracker-click-bind="true">
                                <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/temp/freshdesk-int-nav.webp" alt="Integrations" />
                                <span>Freshdesk</span>
                              </a>
                            </li>
                            <li className="integration-item">
                              <a href="integration/copper/" className="new_menu_cooper" data-faitracker-click-bind="true">
                                <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/temp/copper-int-nav.webp" alt="Integrations" />
                                <span>Copper</span>
                              </a>
                            </li>
                            <li className="integration-item">
                              <a href="integration/zapier/" className="new_menu_zapier" data-faitracker-click-bind="true">
                                <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/temp/zapier-int-nav.webp" alt="Integrations" />
                                <span>Zapier</span>
                              </a>
                            </li>
                            <li className="integration-item">
                              <a href="integration/intercom/" className="new_menu_intercom" data-faitracker-click-bind="true">
                                <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/temp/intercom-int-nav.webp" alt="Integrations" />
                                <span>Intercom</span>
                              </a>
                            </li>
                            <li className="integration-item">
                              <a href="integration/slack/" className="new_menu_slack" data-faitracker-click-bind="true">
                                <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/temp/slack-int-nav.webp" alt="Integrations" />
                                <span>Slack</span>
                              </a>
                            </li>
                            <li className="integration-item">
                              <a href="integration/outreach/" className="new_menu_msteams" data-faitracker-click-bind="true">
                                <img className="border-[1px] border-[#f0f3ff] rounded-md" width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/temp/outreach-integration-filter.png" alt="Integrations" />
                                <span>Outreach</span>
                              </a>
                            </li>
                            <li className="integration-item">
                              <a href="integration/apollo/" className="new_menu_apollo" data-faitracker-click-bind="true">
                                <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/temp/apollo-logo.webp" alt="Integrations" />
                                <span>Apollo.io</span>
                              </a>
                            </li>
                            <li className="integration-item">
                              <a href="integration/highlevel/" className="new_menu_api" data-faitracker-click-bind="true">
                                <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/temp/highlevel-logo-nav.webp" alt="HighLevel" />
                                <span>HighLevel</span>
                              </a>
                            </li>
                          </ul>
                          <div className="integrations-more">
                            <a href="integration/" className="new_menu_integration" data-faitracker-click-bind="true">
                              <span>Discover our 100+ other integrations</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width={9} height={6} viewBox="0 0 9 6" fill="none" className="inline-block ml-1">
                                <path d="M5.56015 5.83856C5.45253 5.73094 5.40087 5.6009 5.40517 5.44843C5.40983 5.29596 5.46598 5.16592 5.5736 5.0583L7.09378 3.53812H1.09378C0.941314 3.53812 0.813422 3.48646 0.710104 3.38314C0.607144 3.28018 0.555664 3.15247 0.555664 3C0.555664 2.84753 0.607144 2.71964 0.710104 2.61632C0.813422 2.51336 0.941314 2.46188 1.09378 2.46188H7.09378L5.56015 0.928251C5.45253 0.820627 5.39871 0.692735 5.39871 0.544574C5.39871 0.396771 5.45253 0.269058 5.56015 0.161435C5.66777 0.0538115 5.79566 0 5.94383 0C6.09163 0 6.21934 0.0538115 6.32696 0.161435L8.78885 2.62332C8.84266 2.67713 8.88087 2.73543 8.90347 2.79821C8.92571 2.86099 8.93683 2.92825 8.93683 3C8.93683 3.07175 8.92571 3.13901 8.90347 3.20179C8.88087 3.26457 8.84266 3.32287 8.78885 3.37668L6.31351 5.85202C6.21486 5.95067 6.09163 6 5.94383 6C5.79566 6 5.66777 5.94619 5.56015 5.83856Z" fill="#707070" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                      <ul className="sub-menu__links-col last-col">
                        <p className="font-[600] text-[#667085] text-[10px] uppercase mb-[10px]">APIs and Webhooks</p>
                        <img src="https://cdn.justcall.io/assets-marketing/images/temp/menu-feature-integration.webp" alt="Menu Feature Dialer" loading="lazy" width={220} height={177} />
                        <p className="leading-normal text-[16px] mt-3 mb-0 font-[400]">Build custom integrations using our robust <span className="font-semibold">APIs and Webhooks</span> — and scale effortlessly.</p>
                        <a href="product/api-and-webhooks/?internal-redirect=nav-api" className="btn btn-arrow btn-sm menu-feature-integration" data-faitracker-click-bind="true">Learn More</a>
                      </ul>
                    </div>
                  </div>
                  <div className="sub-menu-toggle" id="platform">
                    <div className="sub-menu__links-row sub-menu__links-2col">
                      <div className="lg:w-2/3">
                        <div className="sub-menu__banner ">
                          <a href="platform/" className="new_menu_platform_overview" data-faitracker-click-bind="true">
                            <div className="sub-menu__banner-inner pointer-events-none">
                              <div>
                                <p className="text-[20px] lg:text-[22px] leading-[1.2] font-calSans mb-[5px] tracking-wide">
                                  Platform Overview</p>
                                <p className="flex items-center mb-0 text-[12px] font-[400] text-[#667085] mt-0">
                                  The only platform you need for customer
                                  communication</p>
                              </div>
                              <div>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="ml-2">
                                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="lg:flex">
                          <ul className="sub-menu__links-col">
                            <li className="header__sub-menu-item">
                              <a href="/" className="new_menu_connect" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/connect-nav.svg" alt="Connect" />
                              <div className="sub-menu-text">
                                <p><strong>Connect</strong></p>
                                <span>Connect with customers over Voice, SMS and WhatsApp</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="product/sales-dialer/" className="new_menu_prospect" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/prospect-nav.svg" alt="Prospect" />
                              <div className="sub-menu-text">
                                <p><strong>Prospect</strong></p>
                                <span>Connect with more leads with automated outbound dialing</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="platform/helpwise/" className="new_menu_assist" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/assist-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>Assist</strong></p>
                                <span>Resolve customer queries better and faster with one shared
                                  inbox</span>
                              </div>
                            </li>
                          </ul>
                          <ul className="sub-menu__links-col">
                            <li className="header__sub-menu-item">
                              <a href="platform/callpage/" className="new_menu_convert" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/convert-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>Convert</strong></p>
                                <span>Turn website traffic into leads and connect with prospects
                                  instantly</span>
                              </div>
                            </li>
                            <li className="header__sub-menu-item">
                              <a href="ai/" className="new_menu_coach" data-faitracker-click-bind="true" />
                              <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/coach-nav.svg" alt="Platform" />
                              <div className="sub-menu-text">
                                <p><strong>Coach</strong></p>
                                <span>Improve your team's performance and productivity, assisted by
                                  AI</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <ul className="sub-menu__links-col last-col">
                        <p className="font-[600] text-[#667085] text-[10px] uppercase mb-[10px]">Featured</p>
                        <a href="webinar/justcall-weekly-demo/?internal-redirect=weekly-demo-nav-bar" className="menu-feature-weeklydemo" data-faitracker-click-bind="true">
                          <img src="https://cdn.justcall.io/assets-marketing/images/temp/jc-weekly-demo-navbar.png" alt="Menu Feature Dialer" loading="lazy" width={220} height={177} />
                        </a>
                        <p className="leading-normal text-[16px] mt-3 mb-0 font-[400]">Join JustCall Power Hour: A no-pitch, 30-minute group demo.</p>
                        <a href="webinar/justcall-weekly-demo/?internal-redirect=weekly-demo-nav-bar" className="btn btn-arrow btn-sm menu-feature-weeklydemo" data-faitracker-click-bind="true">Learn More</a>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-menu-sm menu-solutions menu-product new-menu-solutions full-width-menu bg-white" id="solutions-menu">
            <div className="container mx-auto">
              <div className="sub-menu-lg">
                <div className="sub-menu-lg__left">
                  <ul>
                    <li data-id="team-menu" className="sub-menu-active">
                      {/* <img width="30" height="30"loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/team-nav-h.svg"
                      alt="Menu Icon"> */}
                      <span>Team</span>
                    </li>
                    <li data-id="industry-menu">
                      {/* <img width="30" height="30"loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/industry-nav-h.svg" alt="Menu Icon"> */}
                      <span>Industry</span>
                    </li>
                  </ul>
                </div>
                <div className="sub-menu-lg__right">
                  <div className="sub-menu-toggle" id="team-menu">
                    <div className="sub-menu__links-row">
                      <ul className="sub-menu__links-col">
                        <li className="header__sub-menu-item">
                          <a href="teams/sales/" className="new_menu_sales" data-faitracker-click-bind="true" />
                          <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/sales-nav.svg" alt="Outbound call center" />
                          <div className="sub-menu-text">
                            <p><strong>Sales</strong></p>
                            <span>Seal more deals, accelerate your pipeline, and coach with AI</span>
                          </div>
                        </li>
                        <li className="header__sub-menu-item">
                          <a href="teams/lead-gen-agency/" className="new_menu_leadgen" data-faitracker-click-bind="true" />
                          <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/lead-gen-nav.svg" alt="Business phone system" />
                          <div className="sub-menu-text">
                            <p><strong>Lead Generation</strong></p>
                            <span>Never miss a lead generation and instant engagement opportunity</span>
                          </div>
                        </li>
                        <li className="header__sub-menu-item">
                          <a href="teams/marketing/" className="new_menu_marketing" data-faitracker-click-bind="true" />
                          <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/marketing-nav.svg" alt="Business phone system" />
                          <div className="sub-menu-text">
                            <p><strong>Marketing</strong></p>
                            <span>Reach and convert more leads with omnichannel campaigns</span>
                          </div>
                        </li>
                        <li className="header__sub-menu-item">
                          <a href="teams/it-operations/" className="new_menu_it_operations" data-faitracker-click-bind="true" />
                          <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/it-operations-nav.svg" alt="Call forwarding" />
                          <div className="sub-menu-text">
                            <p><strong>IT &amp; Operations</strong></p>
                            <span>Simplify IT operations with a modular platform</span>
                          </div>
                        </li>
                      </ul>
                      <ul className="sub-menu__links-col">
                        <li className="header__sub-menu-item">
                          <a href="teams/customer-success/" className="new_menu_customer_success" data-faitracker-click-bind="true" />
                          <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/customer-success-nav.svg" alt="Power dialer" />
                          <div className="sub-menu-text">
                            <p><strong>Customer Success</strong></p>
                            <span>Delight and retain your customers with great service experiences</span>
                          </div>
                        </li>
                        <li className="header__sub-menu-item">
                          <a href="teams/customer-support/" className="new_menu_customer_support" data-faitracker-click-bind="true" />
                          <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/customer-support-nav.svg" alt="Inbound call center" />
                          <div className="sub-menu-text">
                            <p><strong>Customer Support</strong></p>
                            <span>Ensure personalized and smarter interactions for your customers</span>
                          </div>
                        </li>
                        <li className="header__sub-menu-item">
                          <a href="teams/recruitment/" className="new_menu_recruitment" data-faitracker-click-bind="true" />
                          <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/recruitment-nav.svg" alt="ACD" />
                          <div className="sub-menu-text">
                            <p><strong>Recruitment</strong></p>
                            <span>Manage all things hiring and candidate communication at scale</span>
                          </div>
                        </li>
                        <li className="header__sub-menu-item">
                          <a href="teams/dispatch/" className="new_menu_dispatch" data-faitracker-click-bind="true" />
                          <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/dispatch-nav.svg" alt="Advanced analytics" />
                          <div className="sub-menu-text">
                            <p><strong>Dispatch</strong></p>
                            <span>Win over customers and their loyalty with great delivery experiences</span>
                          </div>
                        </li>
                      </ul>
                      <ul className="sub-menu__links-col last-col">
                        <p className="font-[600] text-[#667085] text-[10px] uppercase mb-[10px]">Featured</p>
                        <a href="webinar/justcall-weekly-demo/?internal-redirect=weekly-demo-nav-bar" className="menu-feature-weeklydemo" data-faitracker-click-bind="true">
                          <img src="https://cdn.justcall.io/assets-marketing/images/temp/jc-weekly-demo-navbar.png" alt="Menu Feature Dialer" loading="lazy" width={220} height={177} />
                        </a>
                        <p className="leading-normal text-[16px] mt-3 mb-0 font-[400]">Join JustCall Power Hour: A no-pitch, 30-minute group demo.</p>
                        <a href="webinar/justcall-weekly-demo/?internal-redirect=weekly-demo-nav-bar" className="btn btn-arrow btn-sm menu-feature-weeklydemo" data-faitracker-click-bind="true">Learn More</a>
                      </ul>
                    </div>
                    <div className="integrations-more teams-more">
                      <a href="teams/" className="new_menu_teams" data-faitracker-click-bind="true">
                        <span className="pointer-events-none">See all teams</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width={9} height={6} viewBox="0 0 9 6" fill="none" className="inline-block ml-1 pointer-events-none">
                          <path d="M5.56015 5.83856C5.45253 5.73094 5.40087 5.6009 5.40517 5.44843C5.40983 5.29596 5.46598 5.16592 5.5736 5.0583L7.09378 3.53812H1.09378C0.941314 3.53812 0.813422 3.48646 0.710104 3.38314C0.607144 3.28018 0.555664 3.15247 0.555664 3C0.555664 2.84753 0.607144 2.71964 0.710104 2.61632C0.813422 2.51336 0.941314 2.46188 1.09378 2.46188H7.09378L5.56015 0.928251C5.45253 0.820627 5.39871 0.692735 5.39871 0.544574C5.39871 0.396771 5.45253 0.269058 5.56015 0.161435C5.66777 0.0538115 5.79566 0 5.94383 0C6.09163 0 6.21934 0.0538115 6.32696 0.161435L8.78885 2.62332C8.84266 2.67713 8.88087 2.73543 8.90347 2.79821C8.92571 2.86099 8.93683 2.92825 8.93683 3C8.93683 3.07175 8.92571 3.13901 8.90347 3.20179C8.88087 3.26457 8.84266 3.32287 8.78885 3.37668L6.31351 5.85202C6.21486 5.95067 6.09163 6 5.94383 6C5.79566 6 5.66777 5.94619 5.56015 5.83856Z" fill="#707070" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="sub-menu-toggle" id="industry-menu">
                    <div className="sub-menu__links-row">
                      <ul className="sub-menu__links-col">
                        <li className="header__sub-menu-item">
                          <a href="industry/dental-services/" className="new_menu_dental_services" data-faitracker-click-bind="true" />
                          <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/dental-care-nav.svg" alt="Platform" />
                          <div className="sub-menu-text">
                            <p><strong>Dental</strong></p>
                            <span>Stop losing patients to <br className="hidden xl:block" /> missed calls</span>
                          </div>
                        </li>
                        <li className="header__sub-menu-item">
                          <a href="industry/healthcare/" className="new_menu_healthcare" data-faitracker-click-bind="true" />
                          <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/healthcare-nav.svg" alt="Platform" />
                          <div className="sub-menu-text">
                            <p><strong>Healthcare</strong></p>
                            <span>Offer contextual and reliable support to your patients and providers</span>
                          </div>
                        </li>
                        <li className="header__sub-menu-item">
                          <a href="industry/education/" className="new_menu_education" data-faitracker-click-bind="true" />
                          <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/education-nav.svg" alt="Platform" />
                          <div className="sub-menu-text">
                            <p><strong>Education</strong></p>
                            <span>Manage workflows for admissions, enrollment, and counselling in one
                              place</span>
                          </div>
                        </li>
                        <li className="header__sub-menu-item">
                          <a href="industry/fitness-wellness/" className="new_menu_fitness" data-faitracker-click-bind="true" />
                          <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/fitness-wellness-nav.svg" alt="Platform" />
                          <div className="sub-menu-text">
                            <p><strong>Fitness &amp; Wellness</strong></p>
                            <span>Grow bookings and memberships, deliver great client experiences</span>
                          </div>
                        </li>
                        {/* <li class="header__sub-menu-item">
                          <a href="industry/software-technology/" class="new_menu_technology"></a>
                          <img width="30" height="30" loading="lazy"
                              src="https://cdn.justcall.io/assets-marketing/images/svg/technology-nav.svg" alt="Platform">
                          <div class="sub-menu-text">
                              <p><strong>Technology</strong></p>
                              <span>Offer the best-in-class customer communication platform to your team</span>
                          </div>
                      </li> */}
                      </ul>
                      <ul className="sub-menu__links-col">
                        <li className="header__sub-menu-item">
                          <a href="industry/solar/" className="new_menu_solar" data-faitracker-click-bind="true" />
                          <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/solar-nav.svg" alt="Platform" />
                          <div className="sub-menu-text">
                            <p><strong>Solar</strong></p>
                            <span>Respond to every lead first,<br className="hidden xl:block" /> from inquiry to PTO</span>
                          </div>
                        </li>
                        <li className="header__sub-menu-item">
                          <a href="industry/real-estate/" className="new_menu_realestate" data-faitracker-click-bind="true" />
                          <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/real-estate-nav.svg" alt="Platform" />
                          <div className="sub-menu-text">
                            <p><strong>Real Estate</strong></p>
                            <span>Accelerate property deals by handling calls and showings efficiently</span>
                          </div>
                        </li>
                        <li className="header__sub-menu-item">
                          <a href="industry/financial-services/" className="new_menu_finance" data-faitracker-click-bind="true" />
                          <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/finance-nav.svg" alt="Platform" />
                          <div className="sub-menu-text">
                            <p><strong>Financial Services</strong></p>
                            <span>Deliver secure conversations with your customers and built trust</span>
                          </div>
                        </li>
                        <li className="header__sub-menu-item">
                          <a href="industry/retail/" className="new_menu_retail" data-faitracker-click-bind="true" />
                          <img width={30} height={30} loading="lazy" src="https://cdn.justcall.io/assets-marketing/images/svg/retail-nav.svg" alt="Platform" />
                          <div className="sub-menu-text">
                            <p><strong>Retail</strong></p>
                            <span>Enhance retail customer engagement and service</span>
                          </div>
                        </li>
                      </ul>
                      <ul className="sub-menu__links-col last-col">
                        <p className="font-[600] text-[#667085] text-[10px] uppercase mb-[10px]">Featured</p>
                        <a href="webinar/justcall-weekly-demo/?internal-redirect=weekly-demo-nav-bar" className="menu-feature-weeklydemo" data-faitracker-click-bind="true">
                          <img src="https://cdn.justcall.io/assets-marketing/images/temp/jc-weekly-demo-navbar.png" alt="Menu Feature Dialer" loading="lazy" width={220} height={177} />
                        </a>
                        <p className="leading-normal text-[16px] mt-3 mb-0 font-[400]">Join JustCall Power Hour: A no-pitch, 30-minute group demo.</p>
                        <a href="webinar/justcall-weekly-demo/?internal-redirect=weekly-demo-nav-bar" className="btn btn-arrow btn-sm menu-feature-weeklydemo" data-faitracker-click-bind="true">Learn More</a>
                      </ul>
                    </div>
                    <div className="integrations-more teams-more">
                      <a href="industry/" className="new_menu_industry" data-faitracker-click-bind="true">
                        <span className="pointer-events-none">See all industries</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width={9} height={6} viewBox="0 0 9 6" fill="none" className="inline-block ml-1 pointer-events-none">
                          <path d="M5.56015 5.83856C5.45253 5.73094 5.40087 5.6009 5.40517 5.44843C5.40983 5.29596 5.46598 5.16592 5.5736 5.0583L7.09378 3.53812H1.09378C0.941314 3.53812 0.813422 3.48646 0.710104 3.38314C0.607144 3.28018 0.555664 3.15247 0.555664 3C0.555664 2.84753 0.607144 2.71964 0.710104 2.61632C0.813422 2.51336 0.941314 2.46188 1.09378 2.46188H7.09378L5.56015 0.928251C5.45253 0.820627 5.39871 0.692735 5.39871 0.544574C5.39871 0.396771 5.45253 0.269058 5.56015 0.161435C5.66777 0.0538115 5.79566 0 5.94383 0C6.09163 0 6.21934 0.0538115 6.32696 0.161435L8.78885 2.62332C8.84266 2.67713 8.88087 2.73543 8.90347 2.79821C8.92571 2.86099 8.93683 2.92825 8.93683 3C8.93683 3.07175 8.92571 3.13901 8.90347 3.20179C8.88087 3.26457 8.84266 3.32287 8.78885 3.37668L6.31351 5.85202C6.21486 5.95067 6.09163 6 5.94383 6C5.79566 6 5.66777 5.94619 5.56015 5.83856Z" fill="#707070" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header