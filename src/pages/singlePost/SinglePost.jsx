import axios from "axios";
import { useState, useEffect } from "react";
import {useParams, Link} from 'react-router-dom'
import Image from '../../assets/images/card.png'
import scrolToTop from '../../functions/scrolToTop'
import Footer from "../../components/footer/Footer";

const SinglePost = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    const [posts, setPosts] = useState([]);

    const [addComment, setAddComment] = useState('');

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


    const handleAddNewComment = e => {
        axios
            .post(`https://apitest.reachstar.io/comment/add/${postId}`, {comment: addComment})
            .then(response =>  console.log(response.data + ' - from axios'))
            .catch(error => console.error(error));
        setAddComment('');
    }

    console.log(post)
 
    return(
        <div>
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 py-12">
                    <div className="grid lg:col-span-2">
                        <h1 className="pb-[50px] text-blue-500 text-[31px] md:text-5xl lg:text-[56px] font-bold font-roboto">{post.title}</h1>
                        <img className="w-full rounded-lg" src={post.image ? post.image : Image} alt=""/>
                        
                        <p className="py-10">Description - {post.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum temporibus voluptate facilis rem saepe cumque quo dolor. Qui, sit numquam eos, velit veniam laboriosam hic recusandae exercitationem a aspernatur laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab magnam iusto, quaerat dolores odit a dicta laborum deserunt nostrum facilis quam maiores labore beatae laudantium voluptas illum delectus eos! Adipisci.</p>

                        <div>
                            <h3 className="capitalize mb-4">comments:</h3>
                            {post.comments ? post.comments.map(comment => (
                                <div key={comment.id} className="bg-[#F2F4F5] text-blue-200 p-3 rounded-md mb-5 last:mb-0 flex gap-x-5">
                              
                                    <div className="rounded-full w-12 h-12 bg-red-500 shrink-0"></div>

                                    <div className="font-roboto">
                                        <h4 className="font-bold text-base mb-2">
                                            User name here{comment.id}
                                            <span className="block font-normal text-xs">{comment.created_at}</span>
                                        </h4>
                                        <p className="text-sm">{comment.comment} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio libero suscipit veritatis sequi voluptatum reprehenderit alias, officia molestiae totam nihil, id soluta ullam? Odit eaque, accusamus consequatur corporis maxime ea?</p> 
                                    </div>
                                </div>
                                 )) : 'No comments yet.. Be first to write one'
                            }
                        </div>
                        
                        <form className="mt-6">
                            <textarea 
                            className="w-full border rounded-lg mb-8 h-28 focus:outline-none p-3 font-roboto text-blue-200"
                                value={addComment} 
                                name="comment"
                                onChange={(e) => setAddComment(e.target.value)}
                                ></textarea>
                            <button 
                                className="bg-blue-light text-white py-2 px-4 rounded-lg ml-auto mr-0 block"
                                onClick={e => handleAddNewComment(e)}>Add comment</button>
                        </form>
                    </div>

                    <div className="">
                        <h2 className="pb-[50px] lg:leading-[56px] text-blue-500 text-lg md:text-xl lg:text-2xl lg:text-center font-bold font-roboto">Suggested posts</h2>
                        {
                            posts ? posts.filter(post => post.id !== Number(postId)).map(post => (
                                <Link 
                                    to={`/blog/${post.id}`} 
                                    className="flex gap-x-5 mb-4 border rounded-lg overflow-hidden hover:shadow" 
                                    key={post.id}
                                    onClick={scrolToTop}
                                >
                                    <img src={Image} alt="" className="w-20 h-20" />
                                    <h2 className="pt-3 font-bold text-lg">{post.title}</h2>
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