import Card from "../../components/Cards/Card";
import Hero from "../../components/hero/Hero";
import PostImage from '../../assets/images/card.png'

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card posts={posts} image={PostImage} />
            </div>
        </div>
        </>
    )
}

export default Home;