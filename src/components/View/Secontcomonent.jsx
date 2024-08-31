import React from 'react'

import Hero from '../common/Hero'
import { CARD } from "../common/Helper"
import Footer from '../common/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Nav from '../common/Nav';



const Secontcomonent = () => {
    return (
        <>
            <Nav/>
            <Hero className='bg-skyBlue' />
            <div className="container mt-[135px]">
                <h2 className=' font-inter font-semibold text-[40px] text-black text-center'>Lorem ipsum</h2>
                <div className="flex gap-[24px] justify-center mt-[40px] mb-[106px] flex-wrap">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {CARD.map((i, index) => (
                            <SwiperSlide>
                                <div key={index} className="pinkbox p-[20px_30px_20px_30px] border-[2px] border-[#FFFFFF] rounded-[22px] max-w-[365px] max-h-[276px] bg-[#FFF3ED]">
                                    {i.icon}
                                    <h2 className=' font-inter font-semibold text-[24px] text-black mt-[32px] mb-[16px]'>{i.title}</h2>
                                    <p className='max-w-[305px] font-inter font-light text-[16px] leading-[24px] text-black'>{i.text} <span><a href="" className='text-[#FF5501]'>{i.link}</a></span></p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div >
            <Footer className='bg-darkBlue' />


        </>
    )
}

export default Secontcomonent