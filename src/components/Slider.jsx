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
    const [slidesPerView, setSlidesPerView] = useState(7);

    useEffect(() => {
        const updateSlidesMobilePerView = () => {
            setSlidesPerView(window.innerWidth >= 640 ? 7 : 1);
        };
        const updateSlidesPerTabletView = () => {
            setSlidesPerView(window.innerWidth >= 1300 ? 7 : 7);
        };

        // Set initial value
        updateSlidesMobilePerView();
        updateSlidesPerTabletView();

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
                            w-[210px] h-[210px]'>
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