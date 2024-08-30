import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/autoplay';  // Import autoplay CSS
import { EffectCards, Autoplay } from 'swiper/modules';  // Import autoplay module
import sliderCard from '../../assets/images/webp/slider-img-1.png';
import sliderCard1 from '../../assets/images/webp/slider-img-2.png';
import sliderCard2 from '../../assets/images/webp/slider-img-3.png';
import sliderCard3 from '../../assets/images/webp/slider-img-4.png';

const SwiperSlider = () => {
    return (
        <div className='mb-[50px]'>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}  // Include Autoplay module here
                className="mySwiper"
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide><img src={sliderCard} alt="" /></SwiperSlide>
                <SwiperSlide><img src={sliderCard1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={sliderCard2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={sliderCard3} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SwiperSlider;
