import axios from "axios";
import { useState, useEffect } from "react";
import {useParams, Link} from 'react-router-dom';
import Image from '../../assets/images/card.png';
import User_1 from '../../assets/images/users/user_1.jpg';
import scrolToTop from '../../functions/scrolToTop'
import Comment from "../../components/comments/Comment";
import { months } from "../../utils/Date";

const SinglePost = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
        .get('https://apitest.reachstar.io/blog/list/')
        .then(res => setPosts(res.data))
        .catch(err => {
            console.log(err.message)
        })
    },[])

    useEffect(() => {
        axios
        .get(`https://apitest.reachstar.io/blog/get/${postId}`)
        .then(res => setPost(res.data))
        .catch(err => {
            console.log(err.message)
        })
    },[postId])
 
    return(
        <div className="mt-[64px] lg:mt-[100px]">
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 lg:gap-x-7 py-12 gap-y-10 lg:gap-y-0">
                    <div className="grid lg:col-span-3 xl:col-span-2">
                        <div className="flex flex-col">
                            <img className="w-full rounded-xl" src={post.image ? post.image : Image} alt=""/>
                            <h3 className="text-blue-600 text-sm md:text-base tracking-widest uppercase mt-3">education</h3>
                            <h1 
                                className="pb-8 pt-6 text-blue-500 text-xl md:text-2xl lg:text-5xl font-bold"
                                dangerouslySetInnerHTML={{__html: post.title}} 
                            />
                            <p className="pb-10 text-blue-500 indent-4 text-justify" dangerouslySetInnerHTML={{__html: post.description}} />

                            <div className="font-normal text-xs flex flex-col sm:flex-row sm:justify-between capitalize text-blue-200">
                                <div className="flex gap-x-4 items-center mb-2 sm:mb-0">
                                    <img src={post.image ? post.image : User_1} className="w-10 rounded-full" alt="" />
                                    <span className="font-bold text-sm">post author: {post.user_id}</span>
                                </div>
                              
                                <div className="flex flex-col">
                                    <span>
                                        Publish date: 
                                        {`
                                            ${new Date(post.created_at).getDate()} 
                                            ${months[new Date(post.created_at).getMonth()]} 
                                            ${new Date(post.created_at).getFullYear()}, 
                                            ${new Date(post.created_at).getHours()}:${new Date(post.created_at).getMinutes()}
                                        `}
                                    </span>
                                    <span>
                                        Update date: 
                                        {`
                                            ${new Date(post.updated_at).getDate()} 
                                            ${months[new Date(post.updated_at).getMonth()]} 
                                            ${new Date(post.updated_at).getFullYear()}, 
                                            ${new Date(post.updated_at).getHours()}:${new Date(post.updated_at).getMinutes()}
                                        `}
                                    </span>
                                </div>
                            </div>
                            
                            <Comment postId={postId} />
                        </div>
                    </div>

                    <div className="lg:col-span-2 xl:col-span-1 shadow-xl px-5 py-6 rounded-lg h-min">
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
                                    onClick={scrolToTop}
                                >
                                    <img src={Image} alt="" className="w-[60px] h-[60px] md:w-20 md:h-20 rounded-xl" />
                                    <div className="">
                                        <div className="flex">
                                            <h2 
                                                className="font-bold text-sm md:text-base lg:text-lg text-blue-dark pb-1 leading-[22px] md:leading-[27px]" 
                                                dangerouslySetInnerHTML={{__html: post.title.length >= 50 ? post.title.substring(0,50) + '..' : post.title}}
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePost;