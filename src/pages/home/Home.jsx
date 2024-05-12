import {Card} from "../../components/Cards/Card";
import Hero from "../../components/hero/Hero";
import PostImage from '../../assets/images/card.png'
import { Link } from "react-router-dom";
import scrollToTop from "../../functions/scrolToTop";
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
        <div className="mt-[64px] lg:mt-[100px]">
            <Hero />
            <div className="container mx-auto -mt-[200px] px-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    posts.slice(0, 12).reverse().map(post => (
                        <Card 
                            image={PostImage} 
                            post={post} 
                            url={`blog/${post.id}`} 
                            key={post.id}
                            textLimits={80}
                            scrolToTop={scrollToTop}
                            authorImage={PostImage}
                        />
                    ))
                }
                </div>
                <div className="py-16 text-center">
                    <Link 
                        to={'blog'} 
                        onClick={scrollToTop}
                        className="border-2 rounded-lg px-4 py-2 border-blue-light inline-flex items-center gap-x-2 text-blue-light font-bold hover:shadow-xl">
                        More Articles
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;