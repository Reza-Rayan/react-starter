import { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

//data
import { banks } from '../data/banks.json'




export default function Slider() {
    const [slidesPerView, setSlidesPerView] = useState(window.innerWidth >= 640 ? 4 : 1);

    useEffect(() => {
        const updateSlidesMobilePerView = () => {
            setSlidesPerView(window.innerWidth >= 1024 ? 6 : 4);
        };
        const updateSlidesPerTabletView = () => {
            setSlidesPerView(window.innerWidth >= 1300 ? 6 : 4);
        };

        // Set initial value based on initial screen width
        if (window.innerWidth >= 1024) {
            setSlidesPerView(6);
        } else if (window.innerWidth >= 640) {
            setSlidesPerView(4);
        }

        window.addEventListener('resize', updateSlidesMobilePerView);
        window.addEventListener('resize', updateSlidesPerTabletView);
        return () => {
            window.removeEventListener('resize', updateSlidesMobilePerView);
            window.removeEventListener('resize', updateSlidesPerTabletView);
        };
    }, []);

    return (
        <div className='my-32 container mx-auto'>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                freeMode={false}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwiper"
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
            >

                {banks.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <div className='bg-white rounded-xl mb-2 shadow-lg  transition-all hover:shadow-md 
                            flex justify-center items-center
                            w-[210px] h-[210px] mx-auto'>
                                <img src={item.photoURl} width={100} height={100} />
                            </div>
                        </SwiperSlide>
                    )
                })}


                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </Swiper>

        </div>
    );
}