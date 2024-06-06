import axios from "axios";
import { useState, useEffect } from "react";
import Image from '../../assets/images/card.png'
import scrolToTop from '../../functions/scrolToTop'

import {Card} from '../../components/Cards/Card'
import SearchInput from "../../components/searchInput/SearchInput";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [searchArticle, setSearchArticle] = useState('')
    
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
                <h1 className="py-[50px] text-blue-500 leading-10 md:leading-[60px] lg:leading-[68px] text-[31px] md:text-5xl lg:text-[56px] font-bold sm:text-center">All posts</h1>
                <div className="mb-12 mx-auto sm:w-[500px] md:w-[600px] lg:w-[800px]">
                    <SearchInput setSearchArticle={setSearchArticle} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-28">
                    
                    {   
                        // eslint-disable-next-line array-callback-return
                        posts.filter(post => {
                            if(searchArticle === '') return post;
                            else if(post.title.toLowerCase().includes(searchArticle.toLowerCase().trim())) return post;
                        }).map(post => (
                            <Card 
                                image={Image} 
                                post={post} 
                                url={`${post.id}`} 
                                key={post.id} 
                                scrolToTop={scrolToTop}
                                authorImage={Image}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Blog;