import React from 'react'

import Hero from '../common/Hero'
import { CARD } from "../common/Helper"
import Footer from '../common/Footer'


const Secontcomonent = () => {
    return (
        <>
            <Hero className='bg-skyBlue' />
            <div className="container mt-[135px]">
                <h2 className=' font-inter font-semibold text-[40px] text-black text-center'>Lorem ipsum</h2>
                <div className="flex gap-[24px] justify-center mt-[40px] mb-[106px] flex-wrap">
                    {CARD.map((i, index) => (
                        <div key={index} className="pinkbox p-[20px_30px_20px_30px] border-[2px] border-[#FFFFFF] rounded-[22px] max-w-[365px] max-h-[276px] bg-[#FFF3ED]">
                            {i.icon}
                            <h2 className=' font-inter font-semibold text-[24px] text-black mt-[32px] mb-[16px]'>{i.title}</h2>
                            <p className='max-w-[305px] font-inter font-light text-[16px] leading-[24px] text-black'>{i.text} <span><a href="" className='text-[#FF5501]'>{i.link}</a></span></p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer className='bg-darkBlue' />

        </>
    )
}

export default Secontcomonent