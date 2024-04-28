import { Link } from "react-router-dom";
import { useWindowSize } from "@uidotdev/usehooks";

export const Card = ({post, image, url, scrolToTop, textLimits}) => {
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

export const DashboardCard = ({post, image, url, scrolToTop, textLimits, action, clickHandler}) => {
    let {width} = useWindowSize();

    let icon = '';
    switch(action){
        case 'delete':
            icon = <ion-icon name="trash-outline" size={width >= 768 ? 'large' : 'small'}></ion-icon>;
            break;
        case 'edit':
            icon = <ion-icon name="create-outline" size={width >= 768 ? 'large' : 'small'}></ion-icon>
            break;
        default:
            icon = ''
    }
    return(
        <Link 
            to={icon === '' ? '' : url} 
            className="rounded-xl overflow-hidden bg-white shadow-xl shadow-black-500/100 flex items-center pr-2 gap-x-3 h-[80px]"
            onClick={clickHandler ? () => clickHandler(post.id) : scrolToTop}
        >
            <img src={image} alt="" className='hidden sm:block h-full shrink-1' />

            <h3 
                className='text-blue-500 font-roboto font-sm md:text-base font-normal capitalize pl-3 sm:pl-0' 
                dangerouslySetInnerHTML={{__html: textLimits && width < 640 ? post.title.substring(0, 30) : post.title}} 
            />

            <div className='ml-auto mr-0'>
              {icon}
            </div>
        </Link>
    )
}