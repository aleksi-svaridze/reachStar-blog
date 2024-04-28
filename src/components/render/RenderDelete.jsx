import { useState, useEffect } from 'react';
import axios from 'axios'
import {DashboardCard} from '../Cards/Card'
import image from '../../assets/images/card.png'
import scrollToTop from '../../functions/scrolToTop';
import { useNavigate } from 'react-router-dom';

const RenderDeleteArticle = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://apitest.reachstar.io/blog/list')
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
    },[])

    const deleteHandler = (Id) => {
        axios.delete(`https://apitest.reachstar.io/blog/delete/${Id}`);
        
        navigate('/dashboard');
        scrollToTop();
    }

    return(
        <div className='flex gap-5 flex-col'>
            {
                posts && posts.map(post => (
                    <DashboardCard 
                        post={post} 
                        url={`${post.id}`} 
                        key={post.id} 
                        image={image} 
                        action={'delete'}
                        clickHandler={deleteHandler}
                    />
                ))
            }
        </div>
    )
}

export default RenderDeleteArticle;