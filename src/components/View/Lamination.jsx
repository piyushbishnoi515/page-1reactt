import React from 'react';
import Lottie from 'react-lottie-player';
import Animation from '../../assets/lotti/Animation - 1725079500148.json';
import cross from '../../assets/lotti/cross.json';
import { Link } from 'react-router-dom';
import hand from '../../assets/lotti/hand.json'

const Lamination = () => {
    return (
        <div>
            <Link to={"/Secontcomonent"}>
                <button className='bg-red-800 text-white p-[30px]'>Back me</button></Link>
            {/* Second Lottie Animation */}
            <Lottie className='w-full h-full mx-auto'
                loop
                animationData={cross}
                play
                style={{ width: 100, height: 100 }}
                speed={5}// Adjust style directly as needed
            />
            {/* First Lottie Animation */}
            <Lottie
                loop
                animationData={Animation}
                play
                style={{ width: 300, height: 300 }} // Adjust style directly as needed
            />
            <Lottie className='w-full h-full'
                animationData={hand}
                play
            />


        </div>
    );
};

export default Lamination;
