import type {FilterBlockType} from 'src/types/cms'
import Testimonials from './Testimonials'
import {appendBaseUrl} from 'src/helpers/common'
import { useState } from 'react'

function Filter1(data:FilterBlockType) {

  const [activeTabIndex,setActiveTabIndex] = useState(0)
  
  return (
    <section className="py-[60px] pt-[30px] lg:pt-[60px] home-tabber-comp overflow-hidden"> 
    <div className="container mx-auto">
      <div className="section-heading text-center mb-[42px]">
        <h2 className="mb-[12px]">{data.title.heading}</h2>
        <p className="mb-0">{data.title.subHeading}</p>
      </div>
      <div className="tabber-container" role="region" aria-label="Capture, connect, and convert - by role">
        <div className="tabber-top flex justify-start lg:justify-center items-center gap-[14px] md:gap-[24px] mb-[24px] pb-0 flex-wrap md:flex-nowrap overflow-hidden md:overflow-auto" role="tablist">
          {data.items.map((item,index)=>{
            return activeTabIndex == index ? (
              <a key={index} onClick={(e)=>{e.preventDefault(); setActiveTabIndex(index)}}><ActiveButton name={item.name}/></a>
            ) : (
              <a key={index} onClick={(e)=>{e.preventDefault(); setActiveTabIndex(index)}}><InActiveButton name={item.name}/></a>
            )
          })}
        </div>
        <div className="tabber-content">
          {data.items.map((item,index)=>{
            return (
              <div key={item.id} className={`${activeTabIndex == index ? '' : 'hidden'}`} role="tabpanel">
                <div className="flex flex-wrap lg:flex-nowrap columns-1 lg:columns-2">
                  <div className="w-full lg:w-[50%] basis-full lg:basis-1/2 lg:pr-[15px]">
                    <img src={appendBaseUrl(item.image.url)} alt="Be the first to respond" width={620} height={500} loading="lazy" className="w-full h-auto object-contain" />
                  </div>
                  <div className="w-full lg:w-[50%] basis-full lg:basis-1/2 pb-0 lg:pb-[36px] py-[36px] lg:pl-[15px] flex flex-col">
                    <div className="tabber-description mb-[40px]">
                      <h3 className="h4 mb-[10px]">{item.contents.title.heading}</h3>
                      <p className="mb-[24px]"> {item.contents.title.subHeading}</p>
                      <div className="btn-row justify-start">
                        <a href="/signup" className="btn btn-md try_for_free_cta_overall">Start Free Trial</a>
                        {/* <a href="/demo" className="btn btn-outline btn-md book_a_demo_overall">Book a Demo</a> */}
                      </div>
                    </div>
                    <Testimonials data={item.contents.testimonials}/>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </section>
  )
}


const ActiveButton = ({name}) => {
  return (
    <button type="button" className="tabber-item tabber-item--active rounded-[25px] bg-[#F2F4F7] py-[6px] px-[14px] flex items-center gap-[4px] cursor-pointer border-0 text-left whitespace-nowrap box-border shrink-0 w-[calc(50%-7px)] md:w-auto justify-center text-[14px] sm:text-[16px]" role="tab" id="tabber-item-1" aria-selected="true" aria-controls="tabber-content-1" tabIndex={0} data-tab-index={1}>
      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none" className="shrink-0">
        <g clipPath="url(#clip0_2361_2366)">
          <path d="M3.33333 2.6665H6L7.33333 5.99984L5.66667 6.99984C6.38064 8.44752 7.55231 9.6192 9 10.3332L10 8.6665L13.3333 9.99984V12.6665C13.3333 13.0201 13.1929 13.3593 12.9428 13.6093C12.6928 13.8594 12.3536 13.9998 12 13.9998C9.39951 13.8418 6.94677 12.7375 5.10455 10.8953C3.26234 9.05307 2.15803 6.60033 2 3.99984C2 3.64622 2.14048 3.30708 2.39052 3.05703C2.64057 2.80698 2.97971 2.6665 3.33333 2.6665Z" stroke="#475467" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 5.99984L13.3333 2.6665" stroke="#475467" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 3.3335V6.00016H12.6667" stroke="#475467" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2361_2366">
            <rect width={16} height={16} fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span className="leading-[25px] text-[#475467]">{name}</span>
    </button>
  )
}

const InActiveButton = ({name}) => {
  return (
    <button type="button" className="tabber-item rounded-[25px] bg-[#F2F4F7] py-[6px] px-[14px] flex items-center gap-[4px] cursor-pointer border-0 text-left text-inherit font-inherit whitespace-nowrap shrink-0 w-[calc(50%-7px)] md:w-auto justify-center text-[14px] sm:text-[16px]" role="tab" id="tabber-item-2" aria-selected="false" aria-controls="tabber-content-2" tabIndex={-1} data-tab-index={2}>
      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none" className="shrink-0">
        <g clipPath="url(#clip0_2361_640)">
          <path d="M3.33333 2.6665H6L7.33333 5.99984L5.66667 6.99984C6.38064 8.44752 7.55231 9.6192 9 10.3332L10 8.6665L13.3333 9.99984V12.6665C13.3333 13.0201 13.1929 13.3593 12.9428 13.6093C12.6928 13.8594 12.3536 13.9998 12 13.9998C9.39951 13.8418 6.94677 12.7375 5.10455 10.8953C3.26234 9.05307 2.15803 6.60033 2 3.99984C2 3.64622 2.14048 3.30708 2.39052 3.05703C2.64057 2.80698 2.97971 2.6665 3.33333 2.6665Z" stroke="#475467" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 5.99984L13.3333 2.6665" stroke="#475467" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10.666 2.6665H13.3327V5.33317" stroke="#475467" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2361_640">
            <rect width={16} height={16} fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span className="leading-[20px] text-[#475467]">{name}</span>
    </button>
  )
}


export default Filter1