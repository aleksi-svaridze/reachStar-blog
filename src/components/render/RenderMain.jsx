import { useState, useEffect } from 'react';
import axios from 'axios'


const RenderMainPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://apitest.reachstar.io/blog/list')
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
    },[])

    return(
        <div className='flex gap-5 flex-col lg:flex-row'>
           <div className='w-full h-24 bg-blue-light rounded-lg flex justify-center items-center'>
            <h3 className='text-white text-lg lg:text-xl capitalize flex justify-center items-center'>
                Posts quantity:
                <span 
                    className='text-xl lg:text-1xl ml-2 rounded-full w-10 h-10 flex justify-center items-center font-bold bg-blue-200'>
                        {posts ? posts.length : 'No Posts'}
                </span>
            </h3>
           </div>

           <div className='w-full h-24 bg-blue-light rounded-lg flex justify-center items-center'>
            <h3 className='text-white text-lg lg:text-xl capitalize flex justify-center items-center'>
                users quantity:
                <span 
                    className='text-xl lg:text-1xl ml-2 rounded-full w-10 h-10 flex justify-center items-center font-bold bg-blue-200'>
                       ?
                </span>
            </h3>
           </div>
        </div>
    )
}

export default RenderMainPage;