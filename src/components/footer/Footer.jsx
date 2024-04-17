import FooterBg from '../../assets/images/footer/Wave.svg'
import FacobookCardImage from '../../assets/images/footer/facebook_card.png'

const Footer = () => {
    return(
        <footer>
            <img src={FooterBg} alt='footer background' className='w-full -mb-1' />
            <div className='bg-blue-dark'>
                <div className="container mx-auto px-5">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6'>

                        <div className='flex flex-col justify-center order-2 lg:order-1'>
                            <h2 className='text-white font-roboto font-bold text-2xl md:text-4xl text-left sm:text-center lg:text-left'>Get our stories delivered From us to your inbox weekly.</h2>
                            <form className='mt-[40px] sm:mt-[50px] mb-8 sm:mb-10 flex flex-col gap-2 sm:flex-row mx-auto w-full sm:w-auto lg:ml-0 lg:mr-auto'>
                                <input type='email' className='sm:w-[320px] md:h-14 pl-3 text-blue-200 placeholder:text-blue-200 placeholder:text-base text-base rounded-lg h-12 bg-white focus:outline-none' />
                                <button className='sm:w-[166px] md:h-14 rounded-lg h-12 bg-blue-light text-white text-base lg:text-lg font-bold'>Get started</button>
                            </form>
                            <p className='text-blue-200 text-sm md:text-base font-opensans text-left sm:text-center lg:text-left'>
                                <span className='text-blue-100 md:text-blue-200 italic sm:not-italic'>Get a response tomorrow</span>&nbsp;
                                 if you submit by 9pm today. If we received after 9pm will get a reponse the following day.
                            </p>
                        </div>

                        <div className='order-1 lg:order-2'>
                            <img src={FacobookCardImage} className='hidden mx-auto sm:block w-[466px]' alt="" />
                        </div>
                    </div>

                    <div className='flex flex-col items-center gap-3 pt-14 pb-10'>
                        <div className='w-14 h-14 rounded-full bg-blue-light flex items-center justify-center text-white'>
                            <ion-icon name="heart" size='large'></ion-icon>
                        </div>
                        <p className='text-blue-200'>Copyright &copy; 2024. ReachStar with love.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;