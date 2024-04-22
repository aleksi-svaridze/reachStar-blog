import axios from "axios";
import { useState, useEffect } from "react";
import Image from '../../assets/images/card.png'
import scrolToTop from '../../functions/scrolToTop'

import {Card} from '../../components/Cards/Card'
import Footer from "../../components/footer/Footer";

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
        <div className="mt-[64px] lg:mt-[100px]">
            <div className="container mx-auto px-5">
                <h1 className="py-[50px] text-blue-500 leading-10 md:leading-[60px] lg:leading-[68px] text-[31px] md:text-5xl lg:text-[56px] font-bold font-roboto">All posts</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-28">
                    {
                        posts.map(post => (
                            <Card 
                                image={Image} 
                                post={post} 
                                url={`${post.id}`} 
                                key={post.id} 
                                scrolToTop={scrolToTop}
                                textLimits={true}
                            />
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog;