import React from 'react';
import './App.css';

import heroImage from '../public/images/hero.png'

//components 
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section className='container mx-auto grid grid-cols-1 lg:grid-cols-2'>
        <div className='text-center '>
          <p className='text-[#0064AF] font-bold text-xl'>چـون آشنـا داری آنـی پـول تـو حسابتـه!</p>
          <p className='text-justify leading-8 lg:pl-36 '>
          در تمـام طـول روز، حتـی روزهـای تعطیـل می‌تونـی مانـده قابـل برداشـت حسابـت پیـش کارگـزاری سهـم آشنـا رو بـه بانـک‌هـای منتخـب منتقـل کنـی.
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <img src={heroImage} alt="hero image" />
        </div>
      </section>
    </div>
  )
}

export default App