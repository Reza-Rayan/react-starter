import React from 'react';
import './App.css';

import heroImage from '../public/images/hero.png';
import rightCircle from '../public/shapes/right-circle.png';
import leftCircle from '../public/shapes/left-circle.png';

//components 
import Header from './components/Header';
import CustomButton from './components/CustomButton';
import RoadMap from './components/RoadMap';
import Faq from './components/Faq';
import Slider from './components/Slider';

const App = () => {
  return (
    <div className='px-4 lg:px-0'>
      <Header />
      {/* Hero Section */}
      <section className='container mx-auto grid grid-cols-1 lg:grid-cols-2 mt-16'>
        <div className='flex flex-col gap-y-10 lg:pl-28 '>
          <p className='text-[#0064AF] font-bold leading-8 text-xl text-[23pt]'>چـون آشنـا داری آنـی پـول تـو حسابتـه!</p>
          <p className='text-justify leading-8 '>
            در تمـام طـول روز، حتـی روزهـای تعطیـل می‌تونـی مانـده قابـل برداشـت حسابـت پیـش کارگـزاری سهـم آشنـا رو بـه بانـک‌هـای منتخـب منتقـل کنـی.
          </p>
          <p className='text-justify leading-8'>
            «برداشـت وجـه آنـی»، سرویـس جدیـد کارگـزاری سهـم آشنـا اسـت کـه امکـان برداشـت فـوری تـا سقـف 100 میلیـون تومـان در هـر ساعـت از شبانـه روز حتـی روزهـای تعطیـل از مانـده‌ حسـاب را بـرای سـرمایه‌گـذاران فراهـم کـرده.
          </p>
          <div className="flex justify-end">
            <CustomButton href={'#'}>ثبت نام می کنم</CustomButton>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <img src={heroImage} alt="hero image" />
        </div>
      </section>



      <div className='relative  py-36 mt-32'>
        <img src={leftCircle} alt="" className='absolute left-0 top-0' width={120} />
        <img src={rightCircle} alt="" className='absolute right-0' width={250} />
        <section className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-56 relative'>
          <div className='h-[280px] bg-[#0064AF] w-full m-auto rounded-xl shadow-xl'></div>
          <div>
            <h2 className='text-[#0064AF] font-bold text-[20pt]'>با یک کلیک از حسابت برداشت کن!</h2>
            <p className='text-justify mt-10 text-[14pt] leading-8'>
              در فراینـد برداشـت وجـه عـادی، معمـولاً یـک روز کـاری طـول می‌کشـه تـا مبلـغ درخواستـی بـه حسـاب شمـا واریـز بشـه. امـا بـا ایـن سرویـس جدیـد، می‌تونیـد هـر روز از مانـده‌ حسابتـون تـا سقـف 100 میلیـون تومـان برداشـت کنیـد و مبلـغ مـورد نظـر، چنـد لحظـه بعـد بـه حسـاب بانـکی شمـا واریـز میشـه.ّ
            </p>
            <div className='flex justify-end mt-10'>
              <CustomButton href={'#'}>ثبت نام می کنم</CustomButton>
            </div>
          </div>
        </section>
      </div>



      <section className='my-20'>
        <h2 className='text-center text-[#0064AF] text-[20pt]'>مراحل برداشت وجه آنی از کارگزاری سهم آشنا</h2>
        <RoadMap />
      </section>


      <section className='my-10'>
        <h2 className='text-center text-[#0064AF] text-[20pt]'>
          مزایا سرویس برداشت وجه آنی
        </h2>
        <div className='mt-10 grid grid-cols-1 lg:grid-cols-3  container mx-auto'>
          <div className='mx-auto w-[300px]'>
            <p className='bg-[#0064AF] border border-[#0064AF] text-white text-[14pt] px-6 py-2 rounded-lg shadow-lg
            w-[300px] text-center block  transition-all
            hover:bg-white hover:text-[#0064AF]  hover:shadow-sm '>برداشت وجه بصورت آنی</p>
            <p className='text-justify text-[13pt] mt-4' >
              می‌تونـی در لحظـه پولـت رو بـه حسابـت پیـش بانـک‌هـای منتخـب منتقـل کنـی.
            </p>
          </div>
          <div className='mx-auto w-[300px]'>
            <p className='bg-[#0064AF] border border-[#0064AF] text-white text-[14pt] px-6 py-2 rounded-lg shadow-lg
             text-center block  transition-all
             hover:bg-white hover:text-[#0064AF] hover:shadow-sm '>
              برداشت تا سقف 100میلیون
            </p>
            <p className='text-justify text-[13pt] mt-4' >
              در هـر بـار درخواسـت می توانیـد تـا سقـف ۱۰۰ میلیـون تومـان از حسابتـان برداشـت کنیـد.
            </p>
          </div>
          <div className='mx-auto w-[300px]'>
            <p className='bg-[#0064AF] border border-[#0064AF] text-white text-[14pt] px-6 py-2 rounded-lg shadow-lg
            text-center block  transition-all
            hover:bg-white hover:text-[#0064AF] hover:shadow-sm '>
              بدون کارمزد
            </p>
            <p className='text-justify text-[13pt] mt-4' >
              ایـن خدمـت کامـلا رایگـان اسـت و کارمـزدی بـرای استفـاده از آن از مشتریـان کسـر نمی شـود.
            </p>
          </div>
        </div>
        <div className='container mx-auto '>
          <Faq />
        </div>
      </section>



      <section className='container mx-auto my-20'>
        <h2 className='text-center text-[#0064AF] text-[20pt]'>
          بانک های منتخب کدامند؟
        </h2>
        <Slider />
      </section>

    </div>
  )
}

export default App