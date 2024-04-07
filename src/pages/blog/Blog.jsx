import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer';
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Image from '../../assets/images/card.png'

const Blog = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
        .get('https://apitest.reachstar.io/blog/list')
        .then(res => setPosts(res.data))
        .catch(err => {
            console.log(err.message)
        })
    },[])

    return(
        <div>
            <Header />
            <h1>All posts</h1>
            {
                posts && posts.slice(0, 10).map(post => (
                    // <Link to={`${post.id}`} className="card w-50 mb-3" key={post.id}>
                    //     <h2 className="card-header">{post.title}</h2>
                    // </Link>

                    <Link to={`${post.id}`} className="card w-25 mb-3 d-block" key={post.id}>
                        <img className="card-img-top w-100" src={post.image ? post.image : Image} alt=""/>
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                        </div>
                    </Link>
                ))
            }
            <Footer />
        </div>
    )
}

export default Blog;