import type {Hero1BlockType} from 'src/types/cms'
import Certifications from './Certifications'
function Hero1(data:Hero1BlockType) {
  return (
    <>
      <section className="home-hero pt-[20px] md:pb-0 xl:pb-0 relative">
        <div className="container header-container-new mx-auto relative">
          <div className="bg-white py-[40px] lg:py-[60px] rounded-[24px] relative px-[20px]">
            <div className="flex items-center flex-wrap columns-1 lg:columns-2 relative z-[1]">
              <div className="basis-full text-center lg:items-end xl:items-start pt-0 md:pb-0 lg:pb-[45px] xl:pb-0 lg:pr-0">
                <div className="max-w-[780px] mx-auto">
                  <h1 className="h0 xl:pt-[0px] mb-[15px]">
                    {data.title.heading}
                  </h1>
                </div>
                <div className="max-w-[585px] mx-auto">
                  <p className="md:mb-[25px]">{data.title.subHeading}</p>
                </div>
                <Certifications data={data.certifications}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero1