import React from 'react'
import Contact from '../home/Contact'
import Slider from '../home/Slider'
import Nav from '../common/Nav'
import Hero from '../common/Hero'
import Footer from '../common/Footer'

const Firstcomponent = () => {
    return (
        <>
            <Hero className='bg-lineargradiant'/>
            <Contact />
            <Slider />
            <Footer className='bg-offBlack'/>
        </>
    )
}

export default Firstcomponent