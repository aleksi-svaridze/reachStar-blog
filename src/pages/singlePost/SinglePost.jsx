import axios from "axios";
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import Image from '../../assets/images/card.png';
import User_1 from '../../assets/images/users/user_1.jpg';
import Comment from "../../components/comments/Comment";
import { months } from "../../utils/Date";
import SideBarPosts from "../../components/sideBarPosts/SideBarPosts";
import { useWindowSize } from "@uidotdev/usehooks";
import Head from "../../seo/Head";

const SinglePost = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({title: '', description: '', id: ''});
    const [posts, setPosts] = useState([]);
    let { width } = useWindowSize();

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
        <>
        <Head title={post.title} desc={post.description.substring(0, 170)} url={`http://localhost:3000/${post.id}`} />
        <div className={`my-[64px] lg:mt-[100px] bg-blue-100`}>
            <div className="container mx-auto px-5">
                <div className={`grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 lg:gap-x-7 pt-12 pb-20 gap-y-10 lg:gap-y-0`}>
                    <div className="grid lg:col-span-3 xl:col-span-2">
                        <div className={``}>
                            <img className="w-full rounded-xl" src={'https://www.sammobile.com/wp-content/uploads/2024/05/Galaxy-Watch-7-Ultra-leaked-2.jpg'} alt=""/>
                            <h3 className="text-blue-600 text-sm md:text-base tracking-widest uppercase mt-3">education</h3>
                            <div 
                                className="pb-8 pt-6 text-blue-500 text-xl md:text-2xl lg:text-5xl font-bold"
                                dangerouslySetInnerHTML={{__html: post.title}} 
                            />
                            <div className="pb-10 text-blue-500 indent-4 text-justify" dangerouslySetInnerHTML={{__html: post.description}} />

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
                                            ${new Date(post.created_at).getHours()}:${ (new Date(post.created_at).getMinutes() === 0 || new Date(post.created_at).getMinutes() < 10) ? new Date(post.created_at).getMinutes() + "0" : new Date(post.created_at).getMinutes() }
                                        `}
                                    </span>
                                    <span>
                                        Update date: 
                                        {`
                                            ${new Date(post.updated_at).getDate()} 
                                            ${months[new Date(post.updated_at).getMonth()]} 
                                            ${new Date(post.updated_at).getFullYear()}, 
                                            ${new Date(post.updated_at).getHours()}:${ (new Date(post.created_at).getMinutes() === 0 || new Date(post.created_at).getMinutes() < 10) ? new Date(post.created_at).getMinutes() + "0" : new Date(post.created_at).getMinutes() }
                                        `}
                                    </span>
                                </div>
                            </div>
                        </div>                       
                    </div>
                    {
                        width >= 1024 && posts.length > 1 ?
                        (<div className="bg-white lg:col-span-2 xl:col-span-1 shadow-xl px-5 py-6 rounded-lg h-min">
                            <SideBarPosts posts={posts} postId={postId} Image={Image} />
                        </div>)
                        :
                        (<div className="lg:col-span-2 xl:col-span-1"></div>)
                    }
                </div>
            </div>
        </div>
        <Comment postId={postId} />
        {
            width < 1024 && posts.length > 1 ?
                (<div className="container mx-auto px-5 pb-10 lg:pb-0">
                    <div className="shadow-xl py-6 px-5 rounded-lg h-min">
                        <SideBarPosts posts={posts} postId={postId} Image={Image} />
                    </div>
                </div>)
                :
                (<></>)
        }
        </>
    )
}

export default SinglePost;