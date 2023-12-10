import React, { useState } from 'react';
//images
import arrow from '../../public/icons/arrow.png';



const Faq = () => {
    //Define States
    const [open, setOpen] = useState(false);

    const oepnFaq = () => {
        setOpen(!open);
    }


    return (
        <div className='flex flex-col justify-center mt-10'>
            <button
                onClick={oepnFaq}
                className='bg-[#FF6010] mx-auto w-[260px] py-1 peydaFont font-bold shadow-xl rounded-xl text-white border 
            border-[#FF6010] text-[16pt]'>
                سوالات متداول
            </button>
            <img src={arrow} alt="Arrow" width={20} className={`mx-auto ${open ? 'rotate-[-90deg]' : 'rotate-90'} mt-5 transition-all`} />

            <div className={` faq-content  ${open ? 'openFaq ' : 'closeFaq'} shadow-lg bg-white transition-all`}>
                <div className='px-6 py-4 container mx-auto'>

                    <div className='my-10'>
                        <h4 className='text-[#0064AF]  text-[16pt]'>
                            چطور می‌شه از این خدمت استفاده کرد؟
                        </h4>
                        <p className='text-[12pt] mt-5'>
                            اگـه حسـاب‌هـای بانکیـت یکـی از حسـاب‌هـای بانـک‌هـای منتخـب باشـن، بعـد از درخواسـت برداشـت بصـورت آنـی پـول بـه حسابـت واریـز می‌شـه. اگـه حسابـت مربـوط بـه بانـک‌هـای دیگـه‌ای باشـه مبلـغ درخواستـت در لحظـه پـردازش می‌شـه و در اولیـن چرخـه ساتنـا یـا پایـا بـه حسابـت واریـز می‌شـه.

                        </p>
                    </div>
                    <div className='my-10'>
                        <h4 className='text-[#0064AF]  text-[16pt]'>
                            در صورت فروش سهم یا صندوق، امکان برداشت مبلغ آن در همان روز وجود دارد؟
                        </h4>
                        <p className='text-[12pt] mt-5'>
                            برداشـت وجـه آنـی تنهـا از «مانـده قابـل‌ برداشـت» امکـان‌پذیـر اسـت. مبلـغ حاصـل از فـروش سهـام اوراق بهـادار و صنـدوق‌هـای سهـامی دو روز بعـد (T+2) و صنـدوق‌هـای درآمـد ثابـت یـک روز بعـد (T+1)، بـه مانـده قابـل‌ برداشـت اضافـه می‌شونـد.

                        </p>
                    </div>
                    <div className='my-10'>
                        <h4 className='text-[#0064AF]  text-[16pt]'>
                            محدودیت برداشت در هر درخواست چقد است؟
                        </h4>
                        <p className='text-[12pt] mt-5'>
                            همـراهـان کارگـزاری سهـم آشنـا می‌تواننـد درخواسـت خـود را تـا سقـف 1000 میلیـون ریاـل (صـد میلیـون تومـان) ثبـت نماینـد.
                        </p>
                    </div>
                    <div className='my-10'>
                        <h4 className='text-[#0064AF]  text-[16pt]'>
                            آیا واریز آنی وجه به حساب بانکی در همان لحظه انجام می‌گیرد؟
                        </h4>
                        <p className='text-[12pt] mt-5'>
                            اگـر حسـاب بانکـی ثبـت شـده نـزد بانـک هـای منتخـب باشـد، وجـه مـورد نظـر در همـان لحظـه بـه حسـاب بانکـی شمـا واریـز می‌شـود.
                        </p>
                    </div>
                    <div className='my-10'>
                        <h4 className='text-[#0064AF]  text-[16pt]'>
                            پس از ثبت ، مدت زمان واریز به حساب بانکی چقدر می‌باشد؟
                        </h4>
                        <p className='text-[12pt] mt-5'>
                            پـس از ثبـت درخواسـت برداشـت وجـه، مبلـغ ثبـت در کمتـر از دو دقیقـه بـه حسـاب شمـا نـزد بانـک هـای منتخـب واریـز می‌شـود.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Faq