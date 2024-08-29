import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ bgclassName = 'bg-[#F7F7F7]' }) => {
    
    return (
        <div className={`${bgclassName} p-[26px] flex items-center justify-between`}>
            <h2 className=' font-lato font-bold text-[38px] text-black'>Logo</h2>
            <div className='flex items-center gap-[139px]'>
                <ul className='flex items-center gap-[24px]'>
                    <li><Link to="/" className='font-lato font-normal text-[16px]'>Home</Link></li>
                    <li> <Link to="/Secontcomonent" className=' font-lato font-normal text-[16px]'>How It Works</Link></li>
                    <li><a href="/" className=' font-lato font-normal text-[16px]'>Testimonials</a></li>
                    <li><a href="/" className=' font-lato font-normal text-[16px]'>Why Choose Us</a></li>

                </ul>
                <div className=" flex gap-[24px]">
                    <button className=' font-semibold text-[16px] font-Montserrat border-[1px] border-[#FF5501] p-[14px_24px] rounded-[14px] text-[#FF722C]'>Login</button>
                    <button className=' font-semibold text-[16px] font-Montserrat border-[1px] border-[#FF5501] p-[14px_24px] rounded-[14px] text-[#FF722C]'>Login</button>

                </div>
            </div>
        </div>
    )
}

export default Nav