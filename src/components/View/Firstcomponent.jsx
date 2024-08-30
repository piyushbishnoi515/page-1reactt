import React from 'react'
import Contact from '../home/Contact'
import Hero from '../common/Hero'
import Footer from '../common/Footer'
import SwiperSlider from '../home/SwiperSlider'

const Firstcomponent = () => {
    return (
        <>
            <Hero className='bg-lineargradiant' />
            <Contact />
            <SwiperSlider />
            <Footer className='bg-offBlack' />
        </>
    )
}

export default Firstcomponent