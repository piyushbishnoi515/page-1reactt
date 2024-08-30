import React from 'react'
import { useLocation } from 'react-router-dom';

const Footer = (props) => {
    const year = new Date().getFullYear();
    // let path = window.location.pathname;
    const path = useLocation()
    console.log("text", path)

    return (
        <div className={`${path === "/Secontcomonent" ? "rounded-none bg-black" : "bg-red-800 rounded-[30px_30px_0px_0px]"} ${props.className} `}>
            <div className="container pt-[78px]">
                <div className="row w-full -mx-3 flex flex-row flex-nowrap justify-between">
                    <div className="col-6 px-3 w-1/2">
                        <div className={`${path === "/Secontcomonent" ? "text-gray-600" : ""}`}>
                            <a href=""
                                className={`font-lato font-bold text-[38px] ${props.classcolor}`}>Logo <span className=' '>Here</span></a>
                        </div>
                        <p className='max-w-[431px] font-lato font-normal text-[16px] leading-[22px] text-[#BBBBBB]'>Lorem ipsum dolor sit amet consectetur. Metus mattis cum sem integer est. Amet fringilla tristique hendrerit vestibulum diam est penatibus interdum imperdiet. Duis ut libero suspendisse arcu erat. Pulvinar in est.</p>
                    </div>
                    <div className="col-6 w-4/12 px-3">
                        <div className="row -mx-3 flex flex-row flex-nowrap justify-between">
                            <div className="col-5 w-5/12 px-3">
                                <h2 className=' text-white font-lato font-semibold text-[18px] text-nowrap pb-[24px]'>About website</h2>
                                <ul className='flex flex-col gap-4'>
                                    <li><a href="" className='text-[#BBBBBB] opacity-70 font-lato font-normal text-[16px]  '>Home</a></li>
                                    <li><a href="" className='text-[#BBBBBB] opacity-70 font-lato font-normal text-[16px] text-nowrap'>How It Works</a></li>
                                    <li><a href="" className='text-[#BBBBBB] opacity-70 font-lato font-normal text-[16px]'>Testimonials</a></li>
                                    <li><a href="" className='text-[#BBBBBB] opacity-70 font-lato font-normal text-[16px]'>Why Choose Us</a></li>
                                </ul>
                            </div>
                            <div className="col-5 w-5/12 px-3">
                                <h2 className=' text-white font-lato font-semibold text-[18px] text-nowrap pb-[24px]'>Follow links</h2>
                                <ul className='flex flex-col gap-4'>
                                    <li><a href="" className='text-[#BBBBBB]  opacity-70 font-lato font-normal text-[16px]'>Instagram</a></li>
                                    <li><a href="" className='text-[#BBBBBB]  opacity-70 font-lato font-normal text-[16px]'>Twitter</a></li>
                                    <li><a href="" className='text-[#BBBBBB]  opacity-70 font-lato font-normal text-[16px]'>Discord</a></li>
                                    <li><a href="" className='text-[#BBBBBB]  opacity-70 font-lato font-normal text-[16px]'>You Tube</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-white h-px w-full opacity-40 my-4 mt-[61px]'></div>
            <p className='text-[#BBBBBB] opacity-70 font-lato font-normal text-[16px] justify-center flex pb-[24px] mt-[24px]'> Copyright©{year} (Logo) All Rights Reserved.</p>
        </div>
    )
}

export default Footer