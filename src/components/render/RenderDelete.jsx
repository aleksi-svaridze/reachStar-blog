import { useState, useEffect } from 'react';
import axios from 'axios'
import {DashboardCard} from '../Cards/Card'
import image from '../../assets/images/card.png'


const RenderDeleteArticle = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://apitest.reachstar.io/blog/list')
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
    },[])

    const deleteHandler = (Id) => {
        let userDecide = window.confirm('Do you realy want to delete this article?')
        if(userDecide) {
            axios.delete(`https://apitest.reachstar.io/blog/delete/${Id}`);
            alert('Your article has been deleted')
        }

        setPosts(posts.filter(post => post.id !== Id));
        return posts;
    }

    return(
        <div className='flex gap-5 flex-col'>
            {
                posts ? posts.slice(0, 9).map(post => (
                    <DashboardCard 
                        post={post} 
                        url={`${post.id}`} 
                        key={post.id} 
                        image={image} 
                        action={'delete'}
                        clickHandler={deleteHandler}
                    />
                )) : 'Loading..'
            }
        </div>
    )
}

export default RenderDeleteArticle;