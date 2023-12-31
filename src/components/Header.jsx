import React from 'react';
import Logo from './Logo';

//icons
import phoneIcon from '../../public/icons/phone.png';
import topCircle from '../../public/shapes/topCircle.png'

const Header = () => {
    return (
        <header>
            <div className='relative'>
                <img src={topCircle} alt="top circle" width={300}
                    className='absolute left-0 top-0 hidden lg:block ' />
            </div>
            <div className='container mx-auto flex justify-between items-center py-10 px-2'>
                <div className='flex gap-x-4 items-center justify-center'>
                    <Logo />
                    <ul className='lg:flex hidden gap-5 text-[13pt] font-semibold overflow-hidden'>
                        <a className='navItem transition-all hover:text-[#0064AF] relative' href="#">
                            <li>کارگزاری</li>
                        </a>
                        <a className='navItem transition-all hover:text-[#0064AF] relative' href="#">
                            <li>باشگاه مشتریان</li>
                        </a>
                        <a className='navItem transition-all hover:text-[#0064AF] relative' href="#">
                            <li>آشناپلاس</li>
                        </a>
                    </ul>
                </div>
                <div className='flex gap-4'>
                    <a href="tel:#" className='bg-[#ffffff] z-10 rounded-xl py-2 px-4 items-center font-medium text-[13pt] buttonShadow'>
                        <img src={phoneIcon} alt="call us" />
                    </a>
                    <a href="tel:#" className='bg-[#ffffff] z-10 rounded-xl px-6 py-2 font-medium text-[13pt] buttonShadow'>
                        ثبت نام
                    </a>
                </div>

            </div>
        </header>
    )
}

export default Header