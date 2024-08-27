import React from 'react'
import computer from '../../assets/images/webp/computer.png'
const Contact = () => {
    return (
        <div>
            <div className=" container mb-[155px] mt-[155px]">
                <div className="row -mx-3 flex flex-row flex-nowrap justify-between">
                    <div className="col-5 w-5/12 px-3">
                        <img src={computer} alt="" className='min-h-[523px] max-w-[388px]' />
                    </div>
                    <div className="col-7 w-8/12 px-3 justify-center flex flex-col">
                        <h2 className='text-black font-lato font-bold text-[48px] leading-[60px]'>Get Updated With Us</h2>
                        <p className=' font-lato font-normal text-[16px] leading-[25px] text-black mt-[16px] max-w-[578px]'>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.</p>
                        <form action="" className='mt-[28px]'>
                            <div className='flex gap-[24px]'>
                                <div className='border-[1px] border-[#00000036] p-[19px_229px_12px_16px] '>
                                    <input type="text" placeholder='Your Name' className=' font-lato font-normal text-[16px] outline-none' required="" />
                                </div>
                                <div className='border-[1px] border-[#00000036] p-[19px_170px_12px_16px] '>
                                    <input type="email" placeholder='Your Email Address' className=' font-lato font-normal text-[16px] outline-none' required="" />
                                </div>
                            </div>
                            <div className='flex gap-[24px] mt-[24px]'>
                                <div className='border-[1px] border-[#00000036] p-[19px_229px_12px_16px] '>
                                    <input type="password" placeholder='Enter Password' className=' font-lato font-normal text-[16px] outline-none' required="" />
                                </div>
                                <div className='border-[1px] border-[#00000036] p-[19px_170px_12px_16px] '>
                                    <input type="email" placeholder='Confirm Password' className=' font-lato font-normal text-[16px] outline-none' required="" />

                                </div>
                            </div>
                            <button className='p-[14px_24px] bg-[#92140C] rounded-[5px] text-white mt-[49px]'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact