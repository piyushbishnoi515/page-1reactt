import React from 'react'
import lence from '../../assets/images/svg/lence.svg'
import Lottie from 'react-lottie-player'
import lottieJson from '../../assets/lotti/Animation - 1725079500148.json'

const Hero = (props) => {
    return (
        <div className={`min-h-[700px] pt-[160px] ${props.className}`}>
            <div className="container">
          
                <h2 className='font-extrabold text-[60px] leading-[72px] font-lato text-white max-w-[786px] mx-auto text-center'>Lorem ipsum dolor sit amet consectetur. Sceleris</h2>
                <p className=' font-Montserrat font-medium text-white leading-[22.4px] text-[16px] mx-auto text-center pt-[20px]'>Lorem ipsum dolor sit amet consectetur. Id mattis at tristique duis.</p>
                <div className=" flex items-centerborder-[1px] border-[#BDBDBD]  outline-none max-w-[435px] h-[53px] p-[3px_3px_3px_15px] rounded-[15px] min-h-[53px] bg-white justify-between mx-auto mt-[40px]">
                    <div className='flex items-center gap-[20px]'>
                        <img src={lence} alt="" />
                        <input type="text" placeholder='seacrh' className='outline-none' />
                    </div>
                    <button className='p-[14px_24px] bg-lineargradiant font-lato font-semibold text-center text-[16px] text-white p[14px_27px] rounded-[13px] items-center'>Start</button>

                </div>
            </div>
        </div>
    )
}

export default Hero;