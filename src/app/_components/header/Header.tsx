'use client'
import Image from 'next/image'
import React from 'react'
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation'; // Navigation module
import 'swiper/css/pagination'; // Pagination module
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import imgpink from '../../../assests/bgpink.jpg'
import imgpresent from '../../../assests/present.png'
import imgblue from '../../../assests/bgblue.png'
import imgorange from '../../../assests/bgorange.png'
import imgbox from '../../../assests/bgbox.png'
export default function Header() {
    return (
            <div className='flex  flex-wrap'>
                <div className='w-1/3 py-4 pe-4'>
                    <Image src={imgpresent} className='w-full h-[400px] rounded-md object-cover' alt="" />
                </div>
                <div className='w-2/3 py-4 pe-4'>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination]}
                        spaceBetween={15}
                        slidesPerView={1}
                        navigation
                       
                    >
                        <SwiperSlide >
                            <Image src={imgpink} className='w-full object-center h-[400px] object-cover rounded-md' alt="pic" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <Image src={imgpink} className='w-full object-center h-[400px] object-cover rounded-md' alt="pic" />
                        </SwiperSlide>



                    </Swiper>

                </div>
                <div className='w-1/3 py-4 pe-4'>
                    <Image src={imgblue} className='w-full rounded-md h-[250px] object-cover' alt='' />
                </div>
                <div className='w-1/3 py-4 pe-4'>
                    <Image src={imgbox} className='w-full rounded-md h-[250px] object-cover' alt='' />
                </div>
                <div className='w-1/3 py-4 '>
                    <Image src={imgorange} className='w-full rounded-md h-[250px] object-cover' alt='' />
                </div>
            </div>
      
    )
}
