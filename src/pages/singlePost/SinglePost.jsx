import axios from "axios";
import { useState, useEffect } from "react";
import {useParams, Link} from 'react-router-dom'
import Image from '../../assets/images/card.png'

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
        e.preventDefault();
        console.log(addComment);
        axios
            .post(`https://apitest.reachstar.io/comment/add/${postId}`, addComment)
            .then(response =>  console.log(response.data + ' - from axios'))
            .catch(error => console.error(error));
        setAddComment('');
    }
 
    return(
        <div className="container mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 py-12">
                <div className="">
                    <h1 className="pb-[50px] text-blue-500 text-[31px] md:text-5xl lg:text-[56px] font-bold font-roboto">{post.title}</h1>
                    <img className="w-full" src={post.image ? post.image : Image} alt=""/>
                    
                    <p className="p-10">Description - {post.description}</p>
                    
                    <form>
                        <textarea 
                            value={addComment} 
                            name="comment"
                            cols="30" 
                            rows="10"
                            onChange={(e) => setAddComment(e.target.value)}
                            ></textarea>
                        <button onClick={e => handleAddNewComment(e)}>Add comment</button>
                    </form>
                </div>

                <div className="">
                    <h2 className="pb-[50px] lg:leading-[56px] text-blue-500 text-lg md:text-xl lg:text-2xl lg:text-center font-bold font-roboto">Suggested posts</h2>
                    {
                        posts ? posts.filter(post => post.id !== Number(postId)).map(post => (
                            <Link to={`/blog/${post.id}`} className="flex gap-x-5 mb-4 border rounded-lg overflow-hidden hover:shadow" key={post.id}>
                                <img src={Image} alt="" className="w-28 h-28" />
                                <h2 className="pt-3 font-bold text-lg">{post.title}</h2>
                            </Link>
                        )) :
                        'Loading..'
                    }
                </div>
            </div>
        </div>
    )
}

export default SinglePost;