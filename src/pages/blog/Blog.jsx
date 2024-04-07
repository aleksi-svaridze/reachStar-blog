import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer';
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setPosts(res.data))
    },[])
    return(
        <div>
            <Header />
            <h1>All posts</h1>
            {
                posts && posts.slice(0, 10).map(post => (
                    <Link to={`${post.id}`} className="card w-50 mb-3" key={post.id}>
                        <h2 className="card-header">{post.title}</h2>
                    </Link>
                ))
            }
            <Footer />
        </div>
    )
}

export default Blog;