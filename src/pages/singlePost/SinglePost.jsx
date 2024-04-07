import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer';
import axios from "axios";
import { useState, useEffect } from "react";
import {useParams, Link} from 'react-router-dom'
import Image from '../../assets/images/card.png'

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
        <div>
            <Header />
            <div className="card w-25 mb-3">
                <img className="card-img-start" src={post.image ? post.image : Image} alt=""/>
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p className="card-text">{post.description}</p>
                </div>
            </div>

            <div>
                {/* {
                    post.comments.length > 0 ? post.comments.map(comment => (
                        <p>{comment}</p>
                    )) : 'No Comments'
                } */}
            </div>

            <div>
                <h2>Suggested posts</h2>
                {
                    posts ? posts.filter(post => post.id !== Number(postId)).map(post => (
                        <Link to={`/blog/${post.id}`} className="card w-50 mb-3" key={post.id}>
                            <h2 className="card-header">{post.title}</h2>
                        </Link>
                    )) :
                    'Loading..'
                }
            </div>

            <Footer />
        </div>
    )
}

export default SinglePost;