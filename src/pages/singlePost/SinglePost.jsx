import axios from "axios";
import { useState, useEffect } from "react";
import {useParams, Link} from 'react-router-dom';
import Image from '../../assets/images/card.png';
import User_1 from '../../assets/images/users/user_1.jpg';
import scrolToTop from '../../functions/scrolToTop'
import Footer from "../../components/footer/Footer";
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
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-5 py-12">
                    <div className="grid lg:col-span-2">
                        <div className="flex flex-col">
                            <h1 
                                className="pb-[50px] text-blue-500 text-xl md:text-2xl lg:text-5xl font-bold font-roboto"
                                dangerouslySetInnerHTML={{__html: post.title}} />
                            <img className="w-full rounded-lg" src={post.image ? post.image : Image} alt=""/>
                            
                            <p className="py-10 text-blue-500 indent-4 text-justify" dangerouslySetInnerHTML={{__html: post.description}} />

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
                            
                            <Comment postId={postId} post={post} />
                        </div>
                    </div>

                    <div className="">
                        <h2 className="pb-[50px] lg:leading-[56px] text-blue-500 text-lg md:text-xl lg:text-2xl lg:text-center font-bold font-roboto">Suggested posts</h2>
                        {
                            posts ? posts.slice(0, 5).filter(post => post.id !== Number(postId)).map(post => (
                                <Link 
                                    to={`/blog/${post.id}`} 
                                    className="flex gap-x-5 mb-4 border rounded-lg overflow-hidden hover:shadow" 
                                    key={post.id}
                                    onClick={scrolToTop}
                                >
                                    <img src={Image} alt="" className="w-20 h-20" />
                                    <h2 className="pt-3 font-bold text-lg" dangerouslySetInnerHTML={{__html: post.title}}/>
                                </Link>
                            )) :
                            'Loading..'
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SinglePost;