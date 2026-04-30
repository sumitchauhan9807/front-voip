function Footer() {
  return (
    <footer className="bg-[#001233]">
    <div className="footer-top-row pt-[40px] lg:pt-[60px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap sm:flex-nowrap justify-between mb-[10px] md:mb-[30px] items-start">
          <div className="basis-full md:basis-auto pb-[30px] md:pb-0">
            <a href="/"><img src="https://cdn.justcall.io/assets-marketing/images/svg/logo-footer.svg" width="148.31" height="57.47" alt="JustCall Logo" loading="lazy" /></a>
            <div className="ai-summery-section mt-[20px] lg:mt-[34px]">
              <p className="font-calSans text-[16px] md:text-[20px] text-white mb-[12px] relative">Explore AI Summary </p>
              <ul className="list-none fs-14 flex flex-wrap gap-[10px] ai-tools-list">
                <li>
                  <a className="explore-gpt p-[2px] bg-white rounded-full inline-block ai-logos-footer" href="https://chat.openai.com/?q=Analyze https%3A%2F%2Fjustcall.io%2F and summarize the core value proposition, key features, and strategic insights. Turn them into clear, actionable recommendations." target="_blank">
                    <img className="rounded-full" src="https://cdn.justcall.io/assets-marketing/images/temp/chatgpt-logo-square.png" alt="ChatGPT" width={30} height={30} loading="lazy" />
                  </a>
                </li>
                <li>
                  <a className="explore-claude p-[2px] bg-white rounded-full inline-block ai-logos-footer" href="https://claude.ai/new?q=Analyze https%3A%2F%2Fjustcall.io%2F and summarize the core value proposition, key features, and strategic insights. Turn them into clear, actionable recommendations." target="_blank">
                    <img className="rounded-full" src="https://cdn.justcall.io/assets-marketing/images/temp/claude-logo-square.png" alt="Claude" width={30} height={30} loading="lazy" />
                  </a>
                </li>
                <li>
                  <a className="explore-perplexity p-[2px] bg-white rounded-full inline-block ai-logos-footer" href="https://www.perplexity.ai/search/new?q=Analyze https%3A%2F%2Fjustcall.io%2F and summarize the core value proposition, key features, and strategic insights. Turn them into clear, actionable recommendations." target="_blank">
                    <img className="rounded-full" src="https://cdn.justcall.io/assets-marketing/images/temp/perplexity-logo-square.png" alt="Perplexity" width={30} height={30} loading="lazy" />
                  </a>
                </li>
                <li>
                  <a className="explore-google-search p-[2px] bg-white rounded-full inline-block ai-logos-footer" href="https://www.google.com/search?udm=50&aep=11&q=Analyze https%3A%2F%2Fjustcall.io%2F and summarize the core value proposition, key features, and strategic insights. Turn them into clear, actionable recommendations." target="_blank">
                    <img className="rounded-full" src="https://cdn.justcall.io/assets-marketing/images/temp/gemini-logo-square.png" alt="Google" width={30} height={30} loading="lazy" />
                  </a>
                </li>
                <li>
                  <a className="explore-grok p-[2px] bg-white rounded-full inline-block ai-logos-footer" href="https://x.com/i/grok?text=Analyze https%3A%2F%2Fjustcall.io%2F and summarize the core value proposition, key features, and strategic insights. Turn them into clear, actionable recommendations." target="_blank">
                    <img className="rounded-full" src="https://cdn.justcall.io/assets-marketing/images/temp/grok-logo-square.png" alt="Grok" width={30} height={30} loading="lazy" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="basis-full md:basis-auto footer-reviews flex flex-wrap flex-row justify-between lg:gap-5 pb-[20px] sm:pb-0">
            <div className="w-auto reviews-col">
              <div className="hidden sm:flex pb-[20px] md:pb-[30px] items-center gap-5 sm:mt-[8px]">
                <a href="https://apps.apple.com/in/app/justcall-cloud-phone-system/id1156351688" target="_blank" className="app_store_redirect">
                  <img src="https://cdn.justcall.io/assets-marketing/images/temp/app-store-icon.webp" alt="App Store" width={26} height={26} loading="lazy" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.saaslabs.justcall&hl=en&gl=US&pli=1" target="_blank" className="play_store_redirect">
                  <img src="https://cdn.justcall.io/assets-marketing/images/temp/play-store-icon.webp" alt="Play Store" width={26} height={26} loading="lazy" />
                </a>
              </div>
              <p className="fs-16 font-calSans text-white mb-3">Reviews</p>
              <img src="https://cdn.justcall.io/assets-marketing/images/svg/footer-stars.svg" alt="Stars" width={136} height={19} loading="lazy" />
              <div className="footer-reviews__logos flex gap-6 mt-3">
                <a href="https://www.g2.com/products/saas-labs-justcall/reviews" target="_blank"><img src="https://cdn.justcall.io/assets-marketing/images/temp/g2-crowd-logo.webp" alt="G2" width="25.46" height="26.22" loading="lazy" /></a>
                <a href="https://www.trustpilot.com/review/justcall.io" target="_blank"><img src="https://cdn.justcall.io/assets-marketing/images/temp/trustpilot-logo.webp" alt="Trustpilot" width="26.22" height="26.22" loading="lazy" /></a>
                <a href="https://www.capterra.com/p/157853/JustCall/reviews/" target="_blank"><img src="https://cdn.justcall.io/assets-marketing/images/temp/capterra-logo.webp" alt="Capterra" width="26.22" height="26.22" loading="lazy" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-menu grid grid-cols-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 xl:flex xl:justify-between md:gap-y-7 gap-x-4 gap-y-0 border-t border-b border-[#001E59] py-[15px] md:py-[30px]">
          <div className="col-span-5 md:col-span-1 pt-4 md:pt-0 px-3 md:px-0 xl:max-w-[190px] xl:min-w-[150px]">
            <p className="footer-mobile-trigger font-calSans fs-16 text-white mb-[10px] md:mb-[12px] relative">
              Company
              <img src="https://cdn.justcall.io/assets-marketing/images/svg/footer-mobile-arrow.svg" alt="Arrow" width={15} height={15} loading="lazy" className="absolute top-1/2 -translate-y-1/2 right-1 block md:hidden" />
            </p>
            <div className="footer-mobile hidden md:block pb-5 md:pb-0">
              <ul className="list-none fs-14 flex flex-col gap-[10px]">
                <li><a href="blog/" target="_blank">Blogs</a></li>
                <li><a href="hub/" target="_blank">Content Hub</a></li>
                <li><a href="https://help.justcall.io/en/" target="_blank">Help Articles</a></li>
                <li><a href="customer-stories/" target="_blank">Customer Stories</a></li>
                <li><a href="contact-us/">Contact Us</a></li>
                <li><a href="careers/">Careers</a></li>
                <li><a href="solution-partners/" target="_blank">Find a Partner</a></li>
                <li><a href="security-and-compliance/">Security and Compliance</a></li>
                <li><a href="legal/">Legal</a></li>
                <li><a href="html-sitemap/">Sitemap</a></li>
                <li><a href="https://status.justcall.io/" target="_blank">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="col-span-5 md:col-span-1 border-t border-t-[#001E59] md:border-t-0 pt-4 md:pt-0 px-3 md:px-0 xl:max-w-[190px] xl:min-w-[150px]">
            <p className="footer-mobile-trigger font-calSans fs-16 text-white mb-[10px] md:mb-[12px] relative">
              Solutions
              <img src="https://cdn.justcall.io/assets-marketing/images/svg/footer-mobile-arrow.svg" alt="Arrow" width={15} height={15} loading="lazy" className="absolute top-1/2 -translate-y-1/2 right-1 block md:hidden" />
            </p>
            <div className="footer-mobile hidden md:block pb-5 md:pb-0">
              <ul className="list-none fs-14 flex flex-col gap-[10px]">
                <li>
                  <a href="teams/sales/">Sales</a>
                </li>
                <li><a href="teams/customer-support/">Customer Support</a></li>
                <li><a href="teams/customer-success/">Customer Success</a></li>
                <li><a href="teams/lead-gen-agency/">Lead Generation</a></li>
                <li><a href="industry/real-estate/">Real Estate</a></li>
                <li><a href="industry/healthcare/">Healthcare</a></li>
              </ul>
            </div>
          </div>
          <div className="col-span-5 md:col-span-1 border-t border-t-[#001E59] md:border-t-0 pt-4 md:pt-0 px-3 md:px-0 xl:max-w-[190px] xl:min-w-[190px]">
            <p className="footer-mobile-trigger font-calSans fs-16 text-white mb-[10px] md:mb-[12px] relative">
              Products
              <img src="https://cdn.justcall.io/assets-marketing/images/svg/footer-mobile-arrow.svg" alt="Arrow" width={15} height={15} loading="lazy" className="absolute top-1/2 -translate-y-1/2 right-1 block md:hidden" />
            </p>
            <div className="footer-mobile hidden md:block pb-5 md:pb-0">
              <ul className="list-none fs-14 flex flex-col gap-[10px]">
                <li>
                  <a href="product/ai-voice-agent/">Inbound AI Voice Agent</a>
                </li>
                <li>
                  <a href="product/outbound-ai-voice-agent/">Outbound AI Voice Agent</a>
                </li>
                <li>
                  <a href="solution/business-phone-system/">Business Phone System</a>
                </li>
                <li>
                  <a href="product/send-and-receive-sms/">Messaging</a>
                </li>
                <li>
                  <a href="solution/conversation-intelligence/">AI Copilot</a>
                </li>
                <li>
                  <a href="product/ivr-call-menu/">IVR (Call Menu)</a>
                </li>
                <li>
                  <a href="product/country-coverage/">Country Coverage</a>
                </li>
                <li>
                  <a href="integration/">CRM &amp; Data Integration</a>
                </li>
                <li><a href="https://developer.justcall.io/docs/overview" target="_blank">APIs &amp; Webhooks</a></li>
              </ul>
            </div>
          </div>
          <div className="col-span-5 md:col-span-1 border-t border-t-[#001E59] md:border-t-0 pt-4 md:pt-0 px-3 md:px-0 xl:max-w-[190px] xl:min-w-[150px]">
            <p className="footer-mobile-trigger font-calSans fs-16 text-white mb-[10px] md:mb-[12px] relative">
              Comparison
              <img src="https://cdn.justcall.io/assets-marketing/images/svg/footer-mobile-arrow.svg" alt="Arrow" width={15} height={15} loading="lazy" className="absolute top-1/2 -translate-y-1/2 right-1 block md:hidden" />
            </p>
            <div className="footer-mobile hidden md:block pb-5 md:pb-0">
              <ul className="list-none fs-14 flex flex-col gap-[10px]">
                <li><a href="/hub/compare/aircall-vs-justcall/">JustCall vs Aircall</a></li>
                <li><a href="/hub/compare/ringcentral-vs-justcall/">JustCall vs Ringcentral</a></li>
                <li><a href="/hub/compare/kixie-vs-justcall/">JustCall vs Kixie</a></li>
                <li> <a href="/hub/compare/openphone-vs-justcall/">JustCall vs Openphone</a></li>
                <li><a href="/hub/compare/dialpad-vs-justcall/">JustCall vs Dialpad</a></li>
                <li><a href="/hub/compare/nextiva-vs-justcall/">JustCall vs Nextiva</a></li>
                <li><a href="/hub/compare/mojo-dialer-vs-justcall/">JustCall vs Mojo dialer</a></li>
                <li><a href="/hub/compare/phoneburner-vs-justcall/">JustCall vs Phoneburner</a></li>
                <li><a href="/hub/compare/nooks-vs-justcall/">JustCall vs Nooks</a></li>
                <li><a href="/hub/compare/simpletexting-vs-justcall/">JustCall vs Simpletexting</a></li>
              </ul>
            </div>
          </div>
          <div className="col-span-5 md:col-span-1 border-t border-t-[#001E59] md:border-t-0 pt-4 md:pt-0 px-3 md:px-0 xl:max-w-[190px] xl:min-w-[150px]">
            <p className="footer-mobile-trigger font-calSans fs-16 text-white mb-[10px] md:mb-[12px] relative">
              Top Features
              <img src="https://cdn.justcall.io/assets-marketing/images/svg/footer-mobile-arrow.svg" alt="Arrow" width={15} height={15} loading="lazy" className="absolute top-1/2 -translate-y-1/2 right-1 block md:hidden" />
            </p>
            <div className="footer-mobile hidden md:block pb-5 md:pb-0">
              <ul className="list-none fs-14 flex flex-col gap-[10px]">
                <li><a href="product/auto-dialer/">Auto Dialer</a></li>
                <li><a href="product/predictive-dialer/">Predictive Dialer</a></li>
                <li><a href="solution/sms-automation-tool/">SMS Automation</a></li>
                <li><a href="product/call-analytics/">Call Analytics</a></li>
                <li><a href="product/ai-agent-assist/">AI Agent Assist</a></li>
                <li><a href="product/ai-call-scoring/">AI Call Scoring</a></li>
                <li><a href="product/ai-coaching/">AI Coaching</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex sm:hidden pt-[20px] md:pt-[30px] items-center gap-5">
          <a href="https://apps.apple.com/in/app/justcall-cloud-phone-system/id1156351688" target="_blank" className="app_store_redirect">
            <img src="https://cdn.justcall.io/assets-marketing/images/temp/app-store-icon.webp" alt="App Store" width={26} height={26} loading="lazy" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.saaslabs.justcall&hl=en&gl=US&pli=1" target="_blank" className="play_store_redirect">
            <img src="https://cdn.justcall.io/assets-marketing/images/temp/play-store-icon.webp" alt="Play Store" width={26} height={26} loading="lazy" />
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom-row pt-4 lg:pt-7 pb-[10px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap fs-12 text-[#D0D5DD] gap-3">
          <div className="basis-full lg:basis-[28%] pb-4 lg:pb-0">
            <div className="footer-address">
              <p className="mb-0">
                355 Bryant Street, #403 San Francisco California 94107
              </p>
              <p className="mb-0">
                <span className="text-[21px] relative top-[6px]">©</span> 2016-<span className="current-year">2024</span> JustCall. All Rights
                Reserved
              </p>
            </div>
          </div>
          <div className="basis-full lg:basis-[50%] pb-4 lg:pb-0">
            <div className="footer-terms flex justify-start lg:justify-center">
              <ul className="list-none lg:flex gap-3">
                <li className="inline-block mr-[10px] m-0"><a href="terms-and-conditions/">Terms and Conditions</a></li>
                <li className="inline-block mr-[10px] m-0"><a href="privacy-policy/">Privacy Policy</a></li>
                <li className="inline-block mr-[10px] mb-[10px] lg:m-0">
                  <a href="responsible-disclosure-policy/">Responsible Disclosure Policy</a>
                </li>
                <li className="inline-block mr-[10px] mb-[10px] lg:m-0">
                  <button id="ot-sdk-btn" className="ot-sdk-show-settings">Cookie Settings</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="basis-full lg:basis-[15%] pb-4 lg:pb-0">
            <div className="footer-social flex justify-start lg:justify-end">
              <ul className="list-none flex items-center gap-6">
                <li>
                  <a href="https://www.facebook.com/justcall.io/" target="_blank"><img src="https://cdn.justcall.io/assets-marketing/images/svg/facebook-footer-new.svg" alt="Facebook" width={12} height={20} loading="lazy" /></a>
                </li>
                <li>
                  <a href="https://x.com/justcall_io" target="_blank"><img src="https://cdn.justcall.io/assets-marketing/images/svg/twitter-footer-new.svg" alt="Twitter" width={20} height={20} loading="lazy" /></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/justcall_io/" target="_blank"><img src="https://cdn.justcall.io/assets-marketing/images/svg/instagram-footer.svg" alt="Instagram" width={20} height={20} loading="lazy" /></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/justcall.io/" target="_blank"><img src="https://cdn.justcall.io/assets-marketing/images/svg/linkedin-footer-new.svg" alt="Linkedin" width={20} height={20} loading="lazy" /></a>
                </li>
                <li>
                  <a href="https://www.youtube.com/Justcall" target="_blank"><img src="https://cdn.justcall.io/assets-marketing/images/svg/youtube-footer-new.svg" alt="Youtube" width={20} height={20} loading="lazy" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom-row-mask py-[20px] sm:py-[40px] lg:py-[65px] bg-cover md:bg-contain bg-center bg-repeat-x" style={{backgroundImage: 'url("https://cdn.justcall.io/assets-marketing/images/temp/footer-bottom-mask.png")'}}>
    </div>
  </footer>
  )
}

export default Footer