import { appendBaseUrl } from 'src/helpers/common'
import type {CertificationGridBlockType} from 'src/types/cms'

function CertificationGrid(props:CertificationGridBlockType) {
  console.log(props)
  return (
    <section className="py-[30px] lg:py-[60px] bg-[#F9FAFB]">
    <div className="container mx-auto">
      <h2 className="text-center mb-[12px]">{props.title.heading}</h2>
      <p className="max-w-[720px] mx-auto text-center mb-[20px] lg:mb-[40px]">{props.title.subHeading}</p>
      <div className="flex flex-wrap lg:flex-nowrap gap-x-[15px] justify-center">
        {props.certifications.map((item,index)=>{
          return (
            <div className="w-[45%] md:w-[30%] lg:w-[20%] text-center">
            <div className='mx-auto'>
            <center>    <img src={appendBaseUrl(item.certification.image.url)}/></center>
                <p className="mb-0 font-semibold text-[#667085] mt-[10px]">{item.certification.heading}</p>
                <p className="text-[15px] leading-[1.4] text-[#667085]">{item.certification.subHeading}</p>
              </div>
              </div>
            )
        })}
      </div>
      <div className="text-center mt-[15px] lg:mt-[30px]">
        <a className="group flex justify-center items-center text-[#004CE6] text-[16px] font-semibold transition-all duration-300 hover:underline" >Learn More <svg className="ml-[8px] transition-transform duration-300 ease-out group-hover:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" width={11} height={10} viewBox="0 0 11 10" fill="none" aria-hidden="true">
            <path d="M5.59304 9.27699L4.69815 8.39205L7.8054 5.2848H0V3.99219H7.8054L4.69815 0.889915L5.59304 0L10.2315 4.63849L5.59304 9.27699Z" fill="currentColor" />
          </svg>
        </a>
      </div>
    </div>
  </section>
  )
}

export default CertificationGrid