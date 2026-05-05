import { appendBaseUrl } from 'src/helpers/common'
import type {PreFooter1} from 'src/types/cms'

function PreFooter1(props:PreFooter1) {
  // console.log(props.preFooter.)
  return (
    <section className="footer-cta-component bg-[#FFFDE6] py-[30px] md:py-[60px]">
    <div className="container mx-auto ">
      <div className="flex items-center flex-wrap lg:flex-nowrap lg:mx-[-18px]">
        <div className="footer-cta-component-txt basis-[100%] lg:basis-[65%] w-[100%] lg:w-auto lg:px-[18px]">
          <h2 className="h2 mb-[8px] text-center lg:text-left">{props.preFooter.heading}</h2>
          <p className="lg:max-w-[550px] text-center lg:text-left">{props.preFooter.subHeading}</p>
          <div className="pt-[4px] pb-8 lg:pb-0">
            <div className="banner-form-wrap max-w-[500px] mx-auto lg:mx-0">
              <div className="agentos-wrapper footer-cta-form">
                <div className="agentos-form ">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-cta-component-img basis-[100%] lg:basis-[35%] lg:px-[18px]">
          <img src={appendBaseUrl(props.preFooter.image.url)} alt="Footer CTA Component Image" width={405} height={352} loading="lazy" className="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default PreFooter1