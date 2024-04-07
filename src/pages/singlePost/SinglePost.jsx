import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer';
import axios from "axios";
import { useState, useEffect } from "react";
import {useParams, Link} from 'react-router-dom'

const SinglePost = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setPosts(res.data))
    },[])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => setPost(res.data))
    })

    // console.log(post, postId)
    return(
        <div>
            <Header />
            <div className="card w-50 mb-3">
                <h2 className="card-header">{post.title}</h2>
                <p>{post.body}</p>
            </div>

            <div>
                <h2>Suggested posts</h2>
                {
                    posts && posts.slice(0, 10).filter(post => post.id !== Number(postId)).map(post => (
                        <Link to={`/blog/${post.id}`} className="card w-50 mb-3" key={post.id}>
                            <h2 className="card-header">{post.title}</h2>
                        </Link>
                    ))
                }
            </div>

            <Footer />
        </div>
    )
}

export default SinglePost;