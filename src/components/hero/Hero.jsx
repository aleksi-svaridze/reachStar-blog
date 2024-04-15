import HeroBg from '../../assets/images/hero/hero_bg_new.png'

const Hero =() => {
    return(
        <div className='bg-blue-100 pt-[100px] pb-[300px]'>
            <div className='container mx-auto px-5'>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="">
                        <h1 className="text-blue-500 lg:w-full leading-10 md:leading-[60px] lg:leading-[68px] text-center lg:text-start text-[31px] md:text-5xl lg:text-[56px] font-bold font-roboto">Read the most interesting articles</h1>
                        <p className="text-center lg:text-start font-opensans text-base md:text-[20px] leading-7 md:leading-9 text-blue-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className="hidden lg:block">
                        <img src={HeroBg} className='w-full' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;