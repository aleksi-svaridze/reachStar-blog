import FooterBg from '../../assets/images/footer/Wave.svg'

const Footer = () => {
    return(
        <footer>
            <img src={FooterBg} alt='footer background' className='w-full -mb-1' />
            <div className='bg-blue-dark'>
                <div className="container mx-auto px-5">
                    Footer
                </div>
            </div>
        </footer>
    )
}

export default Footer;