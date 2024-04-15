import Card from "../../components/Cards/Card";
import Hero from "../../components/hero/Hero";
import PostImage from '../../assets/images/card.png'
import { Link } from "react-router-dom";

import { useState, useEffect } from 'react';
import axios from 'axios';


const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://apitest.reachstar.io/blog/list')
            .then(res => setPosts(res.data))
            .catch(err => {
                console.log(err.message)
            })
    }, [])
    return(
        <>
        <Hero />
        <div className="container mx-auto -mt-[200px] px-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {
                posts.map(post => (
                    <Card image={PostImage} post={post} url={`blog/${post.id}`} key={post.id}/>
                ))
            }
            </div>
            <div className="py-16 text-center">
                <Link to={'blog'} className="border-2 rounded-lg px-4 py-2 border-blue-light inline-flex items-center gap-x-2 text-blue-light font-bold hover:shadow-xl">
                    More Articles
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Home;