import { useState, useEffect } from 'react';
import axios from 'axios'
import { DashboardCard } from '../Cards/Card';
import image from '../../assets/images/card.png'


const RenderMainPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://apitest.reachstar.io/blog/list')
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
    },[])
    return(
        <div className='flex gap-5 flex-col'>
            {
                posts ? posts.slice(0, 9).map(post => (
                    <DashboardCard
                        post={post} 
                        url={`${post.id}`} 
                        key={post.id} 
                        image={image}
                    />
                )) : 'Loading..'
            }
        </div>
    )
}

export default RenderMainPage;