import laptopImg from '../../public/icons/laptop.png';
import arrowImage from '../../public/icons/arrow.png';
import backImage from '../../public/icons/back.png';
import walletImage from '../../public/icons/wallet.png';

const RoadMap = () => {
    return (
        <div className="lg:flex justify-center  relative mt-12 mb-[220px] gap-x-8 mx-auto w-[50%]">
            <div>

                <img alt="امین آشنا" src={laptopImg} width={120} height={110} className='bg-white rounded-xl mx-auto shadow-lg p-6 transition-all hover:shadow-md' />
                <div className=' mx-auto text-center mt-4'>
                    <h4 className='text-[#0064AF] text-[13pt]'>
                        سامانه مشتریان
                    </h4>
                    <p className='mt-2 text-[11pt]'>
                        در ابتـدا وارد سامـانه مشتریـان کارگـزاری سهـم آشنـا شویـد.
                    </p>
                </div>
            </div>


            <div className='flex justify-between mt-5 lg:mt-0'>
                <div className='w-full h-full lg:flex hidden justify-center items-start'>
                    <img alt=" arrow" src={arrowImage} width={20} className='arrow' />
                </div>
                <div className='flex flex-col justify-center items-center '>
                    <img src={backImage} width={110} height={110} className='bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-md' />
                    <div className=' mx-auto text-center mt-4'>
                        <h4 className='text-[#0064AF] text-[13pt]'>
                            درخواست وجه
                        </h4>
                        <p className='mt-2 text-[11pt]  text-justify'>
                            روی گزینـه درخواسـت وجـه کلیـک کـرده اولیـن تاریـخ (نزدیـک ترین زمـان) را انتخـاب، و مبلـغ مـورد نیـاز را وارد کنیـد.
                        </p>
                    </div>
                </div>
                <div className='w-full h-full lg:flex hidden justify-center items-start'>
                    <img alt=" arrow" src={arrowImage} width={20} className='arrow' />
                </div>
            </div>

            <div className='flex flex-col justify-center items-center mt-5 lg:mt-0'>
                <img alt="امین آشنا" src={walletImage} width={120} height={110} className='bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-md' />
                <div className=' mx-auto text-center mt-4'>
                    <h4 className='text-[#0064AF] text-[13pt]'>
                        دریافت وجه
                    </h4>
                    <p className='mt-2 text-[11pt]  text-justify'>
                        بعـد از درخواسـت وجـه ثبـت شـده بـه حسـاب بانکـی شمـا واریـز شـده اسـت.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RoadMap