import whiteLogo from '../../public/images/white-logo.png';
import instagram from '../../public/icons/instagram.png';
import linkedin from '../../public/icons/linkedin.png';
import telegram from '../../public/icons/telegram.png';

const Footer = () => {
    return (
        <footer className='footerBg'>
            <div className='container mx-auto lg:grid grid-cols-5  pt-16 pb-4'>
                <div className='col-span-2 px-16 flex flex-col justify-center'>
                    <h4 className='peyda-font text-right font-bold text-[15pt] text-white mb-6'>تمـاس بـا مـا</h4>
                    <p className='text-white text-[13pt] text-justify leading-8'>تهـران، سعـادت آبـاد، بالاتـر از میـدان کـاج، خیابـان شهیـد یعقـوبی (هشتـم)، پـلاک 27، ساختمـان سهـم آشنـا</p>
                    <div className='flex justify-between text-white text-[13pt] mt-6'>
                        <a className='transition-all hover:text-[#eee]' href={'tel:0212771'}>021-2771</a>
                        <a className='transition-all hover:text-[#eee]' href={'mailto:info@abco.ir'}>info@abco.ir</a>
                    </div>
                </div>
                <div className='lg:flex hidden flex-col'>
                    <a href="/">
                        <img src={whiteLogo} width={180} className='mx-auto ' />
                    </a>
                    <div className='flex gap-5 justify-center mt-12'>
                        <a href={'https://www.linkedin.com/company/ashenaholding'} className='transition-all hover:scale-105 hover:translate-y-2'>
                            <img src={linkedin} width={35} />
                        </a>
                        <a href={'https://t.me/sahmashena'} className='transition-all hover:scale-105 hover:translate-y-2'>
                            <img src={telegram} width={35} />
                        </a>
                        <a href={'https://www.instagram.com/ashenaholding/'} className='transition-all hover:scale-105 hover:translate-y-2'>
                            <img src={instagram} width={35} />
                        </a>
                        {/* <a href={'https://wa.me/09331494104'} className='transition-all hover:scale-105 hover:translate-y-2'>
                            <img src={whatsapp} width={35} />
                        </a> */}
                    </div>
                </div>
                <div className='flex flex-col justify-center px-16 text-start  leading-10 mt-10 text-white text-[13pt]'>
                    <a target='_blank' href={'https://abco.ir/'} className='transition-all hover:text-[#eee]'>شرکـت کارگـزاری</a>
                    <a target='_blank' href={'https://www.sapm.ir/'} className='transition-all hover:text-[#eee]'>شرکـت سـبدگـردان</a>
                    <a target='_blank' href={'https://www.iafi.ir/'} className='transition-all hover:text-[#eee]'>شرکـت سـرمایه گـذاری</a>
                </div>
                <div className='flex flex-col justify-center px-16 text-start  leading-10 lg:mt-10 text-white text-[13pt]'>
                    <a target='_blank' href={'https://ashenaexchange.ir/'} className='transition-all hover:text-[#eee]'>شرکـت صـرافی</a>
                    <a target='_blank' href={'https://ashenaleasing.ir/'} className='transition-all hover:text-[#eee]'>شرکـت واسپـاری</a>
                    <a target='_blank' href={'https://saiaco.ir/'} className='transition-all hover:text-[#eee]'>شرکـت مشـاوره سـرمایه گـذاری</a>
                </div>
                <div className='flex lg:hidden flex-col mt-12'>
                    <img alt="امین آشنا" src={whiteLogo} width={180} className='mx-auto ' />
                    <div className='flex gap-5 justify-center mt-4'>
                        <a target='_blank' href={'https://www.linkedin.com/company/ashenaholding'}>
                            <img alt="امین آشنا" VV src={linkedin} width={35} />
                        </a>
                        <a target='_blank' href={'https://t.me/sahmashena'}>
                            <img alt="امین آشنا" src={telegram} width={35} />
                        </a>
                        <a target='_blank' href={'https://www.instagram.com/ashenaholding/'}>
                            <img alt="امین آشنا" src={instagram} width={35} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer