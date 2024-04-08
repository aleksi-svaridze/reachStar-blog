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
        <div>
            <div className="card w-25 mb-3">
                <img className="card-img-start" src={post.image ? post.image : Image} alt=""/>
                <div className="card-body">
                    <h2 className="card-title">Title - {post.title}</h2>
                    <p className="card-text">Description - {post.description}</p>
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
        </div>
    )
}

export default SinglePost;