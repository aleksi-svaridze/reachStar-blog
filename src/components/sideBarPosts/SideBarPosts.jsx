import { months } from "../../utils/Date"
import scrollToTop from "../../functions/scrolToTop";
import { Link } from "react-router-dom";

const SideBarPosts = ({posts, postId, Image}) => {
    return (
        <>
            <h2 className="lg:leading-[56px] text-blue-500 text-lg md:text-xl lg:text-2xl pb-3 font-bold">
                Suggested posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:block gap-5">
            {
                posts ? posts.slice(0, 5).filter(post => post.id !== Number(postId)).map(post => (
                    <Link 
                        to={`/blog/${post.id}`} 
                        className="flex gap-x-3 mb-4 overflow-hidden max-h-20" 
                        key={post.id}
                        onClick={scrollToTop}
                    >
                        <img src={Image} alt="" className="w-[60px] h-[60px] md:w-20 md:h-20 rounded-xl" />
                        <div className="">
                            <div className="flex">
                                <div 
                                    className="font-bold text-sm md:text-base lg:text-lg text-blue-dark line-clamp-2 pb-1" 
                                    dangerouslySetInnerHTML={{__html: post.title}}
                                />
                            </div>
                            
                            <p className="font-opensans text-[10px] lg:text-xs text-black font-thin">
                                {`
                                    ${months[new Date(post.updated_at).getMonth()]}
                                    ${new Date(post.updated_at).getDate()},
                                    ${new Date(post.updated_at).getFullYear()}
                                `}
                            </p>
                        </div>
                    </Link>
                )) :
                'Loading..'
            }
            </div>
        </>
    )
}

export default SideBarPosts;