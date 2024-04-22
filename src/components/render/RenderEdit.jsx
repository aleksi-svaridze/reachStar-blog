import { useState, useEffect } from 'react';
import axios from 'axios'
import {DashboardCard} from '../Cards/Card'
import image from '../../assets/images/card.png'
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import scrolToTop from '../../functions/scrolToTop'


const RenderEditArticle = () => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});

    const handleOnChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }

    let {Id} = useParams();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => console.log(err))
    },[])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${Id}`)
            .then(res => setPost(res.data))
            .catch(err => console.log(err))
    },[Id])

    return(
        <div className='flex gap-5 flex-col'>
            
            {
                Id ? (<form>
                        <div className='flex flex-col gap-y-2'>
                            <label className='capitalize font-bold font-roboto text-blue-500'>Edit Article title</label>
                            <ReactQuill
                                value={post.title}
                                onChange={handleOnChange}
                            />
                        </div>

                        <div className='flex flex-col gap-y-2 mt-10'>
                            <label className='capitalize font-bold font-roboto text-blue-500'>Edit Article description</label>
                            <ReactQuill
                                value={post.body}
                                onChange={handleOnChange}
                            />
                        </div>
                        <button className='rounded-lg py-2 px-4 bg-blue-light text-white font-medium font-roboto mt-5'>Save changes</button>
                    </form>) : posts ? posts.slice(0, 9).map(post => (
                    <DashboardCard 
                        post={post} 
                        url={`${post.id}`} 
                        key={post.id} 
                        image={image} 
                        scrolToTop={scrolToTop}/>
                )) : 'Loading..'
            }
        </div>
    )
}

export default RenderEditArticle;