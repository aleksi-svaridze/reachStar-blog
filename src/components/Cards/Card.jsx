import { Link } from "react-router-dom";

const Card = ({post, image, url, scrolToTop, textLimits}) => {
    return(
        <Link 
            to={url} 
            className="rounded-xl overflow-hidden bg-white shadow-xl shadow-black-500/100"
            onClick={scrolToTop}
        >
            <img src={image} alt="" className='w-full' />
            <div className='py-3 px-2'>
                <h3 className='text-blue-500 font-bold font-roboto text-[20px] md:text-2xl lg:text-[28px] leading-6 md:leading-8 lg:leading-9' dangerouslySetInnerHTML={{__html:post.title}} />
                <p 
                    className='text-blue-500 text-sm md:text-lg leading-6 md:leading-8 font-opensans mt-3 mb-5'
                    dangerouslySetInnerHTML={{__html: textLimits ? post.description.slice(0, 100) : post.description}} 
                />
            </div>
        </Link>
    )
}

export default Card;