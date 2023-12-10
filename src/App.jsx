import React from 'react';
import './App.css';

import heroImage from '../public/images/hero.png';
import rightCircle from '../public/shapes/right-circle.png';
import leftCircle from '../public/shapes/left-circle.png';
import leftCircle2 from '../public/shapes/asdqwe.png';
import rightCircle2 from '../public/shapes/12345.png';
import clickImage from '../public/images/click.png';
import headphoneImage from '../public/images/headphone.png';
import orangePhone from '../public/icons/orangePhone.png'

//components 
import Header from './components/Header';
import CustomButton from './components/CustomButton';
import RoadMap from './components/RoadMap';
import Faq from './components/Faq';
import Slider from './components/Slider';
import Footer from './components/footer';


const App = () => {
  return (
    <main>
      <Header />
      {/* Hero Section */}
      <section className='container mx-auto grid grid-cols-1 lg:grid-cols-2 mt-16 px-4'>
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
        <div className='flex justify-center items-center mt-2 lg:mt-0 '>
          <img src={heroImage} alt="hero image" />
        </div>
      </section>



      <div className='relative  py-36 mt-32 px-4'>
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



      <img src={leftCircle2} alt="right circle" className='absolute left-0' width="200pt" />
      <section className='my-20 relative'>
        <h2 className='text-center text-[#0064AF] text-[20pt]'>مراحل برداشت وجه آنی از کارگزاری سهم آشنا</h2>
        <RoadMap />
      </section>


      <section className='my-10 relative'>
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
        <img src={rightCircle2} className='absolute right-0 bottom-0  ' width="120pt" />
      </section>



      <section className='container mx-auto my-20 relative px-4'>
        <h2 className='text-center text-[#0064AF] text-[20pt]'>
          بانک های منتخب کدامند؟
        </h2>
        <Slider />

        <div className='text-center text-[22pt] font-medium'>
          <p className='text-[#FF6010] peydaFont leading-[60px]'>
            با سرویس ویژه برداشت وجه آنی، آشنا شدی؟؟
            <br />
            حالا می تونی مسیر سرمایه گذاریتو با سهم آشنا سریع تر کنی
          </p>
        </div>
      </section>



      <section className='my-20 px-4'>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className='flex flex-col gap-4 lg:pl-20'>
            <h2 className='text-[#0064AF] text-[25pt]'>با سه كليك با ما آشنا شو</h2>
            <p className='text-[14pt] mt-4 leading-[50px] text-justify'>
              مـا ثبـت نامـت رو در کارگـزاری سهـم آشنـا راحـت کردیـم.
              <br />
              فقـط بـا چنـد کلیـک ثبـت‌نـام کـن و از خدمـات متنـوع کارگـزاری سهـم آشنـا لـذت ببـر.
              <br />
              تمـام مراحـل ثبـت‌نـام آنلایـنه  و بـه ارسـال مـدارک نیـازی نیسـت.
            </p>
            <div className="flex justify-end mt-4">
              <CustomButton href={'#'}>
                ثبت نام در چند ثانیه
              </CustomButton>
            </div>
          </div>
          <div>
            <img src={clickImage} alt="" className='m-auto' width={400} />
          </div>
        </div>
      </section>



      <div className='relative  py-36 mt-32 px-4'>
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



      <section className='my-20 relative'>
        <div className=' container mx-auto grid grid-cols-1 '>
          <h2 className='text-[#0064AF] text-[20pt] text-center'>
            چگونه می توان در کارگزاری سهم آشنا ثبت نام کرد؟
          </h2>
          <p className='mt-6 text-center text-[14pt] leading-10'>
            کافیـه حسـاب سجـام داشتـه باشـی تـا تنهـا بـا چنـدکلیـک ثبـت نامـت در کارگـزاری سهـم آشنـا
            <br />
            انجـام بشـه و بـه تمـام خدمـات در 24 ساعـت شبانـه روز و 7 روز هفتـه دستـرسی داشتـه باشـی
          </p>
        </div>
        <div className="mt-20 px-4">
          <h3 className='text-[#FF6010] peydaFont text-[18pt] text-center'>
            از ثبـت نـام تـا ارسـال کـد معامـلاتی و شـروع معامـلات در چنـد ثانیـه بـا شماییـم
          </h3>
        </div>
        <img src={leftCircle2} alt="right circle" className='absolute left-0 top-10' width="200pt" />
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 my-10 lg:px-48 px-4 ">

          <div>
            <img src={headphoneImage} alt="" className='m-auto' width={300} />
          </div>

          <div className='text-center flex flex-col w-full gap-y-7 items-center justify-center'>
            <h3 className=' text-[20pt] text-[#0064AF] '>همکـاران مـا در کنـار شمـا هستنـد</h3>
            <p className='text-[13pt] text-[#0064AF] '>
              هـر روز هفتـه (حتـی روزهـای تعطیـل) از ساعـت 8 الـی 22
            </p>

            <a href="tel:" className='flex items-center justify-center gap-4 border px-6 py-1 rounded-lg border-[#FF6010]'>
              <span className='text-[#0064AF] text-[16pt]'> 2771 - 021</span>
              <img src={orangePhone} alt="" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default App