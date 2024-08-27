import React from 'react'
import {  } from "../../assets/images/svg/twomen.svg";
import { CARD_DATA } from '../common/Helper'

const Slider = () => {
    return (
    <div className=''>
      <div className="container mt-[135px]">
        <h2 className=' font-inter font-semibold text-[40px] text-black text-center'>Lorem ipsum</h2>
        <div className="flex gap-[24px] justify-center mt-[40px] mb-[106px]">
          {CARD_DATA.map((i, index) => (
            <div key={index} className="pinkbox p-[20px_30px_20px_30px] border-[2px] border-[#FFFFFF] rounded-[22px] max-w-[365px] max-h-[276px] bg-[#FFF3ED]">
              <img src={i.icon} alt="" />
              <h2 className=' font-inter font-semibold text-[24px] text-black mt-[32px] mb-[16px]'>{ i.title}</h2>
              <p className='max-w-[305px] font-inter font-light text-[16px] leading-[24px] text-black'>{i.text} <span><a href="" className='text-[#FF5501]'>{ i.link}</a></span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider