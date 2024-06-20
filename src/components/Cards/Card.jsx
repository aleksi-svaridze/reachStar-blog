import { Link } from "react-router-dom";
import { useWindowSize } from "@uidotdev/usehooks";
import verifiedIcon from '../../assets/svgs/Icon.svg'
import {months} from '../../utils/Date';

export const Card = ({post, image, url, scrolToTop, authorImage}) => {
    const isVerified = true;

    return(
        <Link 
            to={url} 
            className="rounded-xl overflow-hidden bg-white shadow-xl shadow-black-500/100"
            onClick={scrolToTop}
        >
            <img src={image} alt="" className='w-full' />
            <div className='py-[22px] px-5 md:px-6 md:py-6 lg:px-8 lg:py-[26px]'>
                <div
                    className='text-blue-500 font-bold text-[20px] leading-[28px] md:text-2xl lg:text-[28px] lg:leading-[36px] line-clamp-2' 
                    dangerouslySetInnerHTML={{__html: post.title}} 
                />
                <div 
                    className='text-blue-500 line-clamp-2 text-sm md:text-lg font-opensans mt-3 mb-5'
                    dangerouslySetInnerHTML={{__html: post.description}} 
                />

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-3">
                        <img src={authorImage} alt="" className="w-9 h-9 md:w-10 md:h-10 rounded-full" />
                        <div className="flex flex-col justify-center">
                            <h4 className="text-sm md:text-base text-blue-dark font-bold font-opensans italic capitalize">Author name</h4>
                            {
                                isVerified && (
                                    <div className="flex items-center gap-y-2 md:gap-y-3 gap-x-2">
                                        <span className="w-4 h-4 rounded-full flex itemc-center justify-center bg-[#e1f4ec]">
                                            <img src={verifiedIcon} className="w-2" alt='is verified' />
                                        </span>                                    
                                        <span className="font-opensans text-xs md:text-sm italic text-blue-200">Verified writer</span>
                                    </div>
                              ) 
                            }
                        </div>
                    </div>
                    <p className="font-opensans italic font-bold text-sm text-blue-200 md:text-base">
                        {new Date(post.created_at).getDate()}
                        &nbsp;
                        {months[new Date(post.created_at).getMonth()]}
                    </p>
                </div>

            </div>
        </Link>
    )
}

export const DashboardCard = ({post, image, url, scrolToTop, action, clickHandler}) => {
    let {width} = useWindowSize();

    let icon = '';
    switch(action) {
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
            to={action === 'edit' ? url : ''}
            className="rounded-xl group overflow-hidden bg-white hover:shadow-xl shadow-lg shadow-black-500/100 flex items-center pr-2 gap-x-3 h-[80px]"
            onClick={clickHandler ? () => clickHandler(post.id) : scrolToTop}
        >
            <div 
                className={`text-blue-500 group-hover:text-red-500 font-sm line-clamp-2 md:text-base font-normal capitalize pl-3`}
                dangerouslySetInnerHTML={{__html: post.title}} 
            />

            <div className='ml-auto mr-0 text-blue-500 group-hover:text-red-500'>
              {icon}
            </div>
        </Link>
    )
}