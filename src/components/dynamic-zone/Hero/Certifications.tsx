import type {CertificationBlockType} from 'src/types/cms/dynamic-zone-blocks/relational'
import {appendBaseUrl} from 'src/helpers/common'

type CertificationsProps = {
  data:CertificationBlockType[]
}
function Certifications({ data }: CertificationsProps) {
  return (
    <div className="flex justify-center flex-wrap md:flex-nowrap xl:flex-nowrap gap-[10px] md:gap-0">
       {data.map((cert,index)=>{
        return (
        <div key={cert.id} className="g2-pipe flex justify-center md:justify-start border md:border-0 border-[#F2F4F7] w-[calc(50%-5px)] md:w-auto p-[10px] md:pl-0 pr-[18px] md:mr-[18px] rounded-[8px] md:rounded-none">
          <img src={appendBaseUrl(cert.certification.image.url)} alt="SOC2" width={32} height={39} loading="eager" />
          <div className="text-[12px] leading-[1.4] flex flex-col text-left ml-2 justify-center">
            {index == 0 ? <SVG/> : <span className="font-[600] text-[#667085]">{cert.certification.heading}</span>}
            <span className="text-[#667085]">{cert.certification.subHeading}</span>
            </div>
          </div>
          )
      })}  
    </div>
  )
}

export default Certifications


function SVG() {
  return (
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
  )
}