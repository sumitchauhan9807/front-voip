import type {GridBlockType} from 'src/types/cms'
import {appendBaseUrl} from 'src/helpers/common'

function Grid1(props:GridBlockType) {
  return (
    <section className="py-[30px] lg:py-[60px]">
    <div className="container mx-auto">
      <h2 className="text-center mb-[12px]">{props.title.heading}</h2>
      <p className="max-w-[680px] mx-auto text-center mb-[20px] lg:mb-[30px]">{props.title.subHeading}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {props.lists.map((list,index)=>{
          return (
            <div key={index} className="bg-[#F2F4F7] rounded-[8px] p-[20px] flex">
              <div>
                <div className="p-[5px] bg-white rounded-[5px] mr-[18px] w-[50px] h-[50px] flex justify-center items-center">
                  <img src={appendBaseUrl(list.image.url)}/>
                </div>
              </div>
              <p className="mb-0 text-[#475467]">{list.heading}</p>
            </div>
          )
        })}
      </div>
    </div>
  </section>
  )
}

export default Grid1