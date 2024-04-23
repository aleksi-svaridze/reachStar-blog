import { useState, useEffect } from 'react';
import axios from 'axios'
import {DashboardCard} from '../Cards/Card'
import image from '../../assets/images/card.png'
import { useParams, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import scrollToTop from '../../functions/scrolToTop'


const RenderEditArticle = () => {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    let {Id} = useParams();

    useEffect(() => {
        axios.get('https://apitest.reachstar.io/blog/list')
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
    },[])

    useEffect(() => {
        axios.get(`https://apitest.reachstar.io/blog/get/${Id}`)
            .then(res => {
                setTitle(res.data.title);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err.message))
    },[Id])

    const handleEdit = e => {
        e.preventDefault();
        axios.put(`https://apitest.reachstar.io/blog/edit/${Id}`, {title, description})
            .then(res => console.log(res))
            .catch(err => console.log(err))

            navigate('/dashboard')
            scrollToTop();
    }

    return(
        <div className='flex gap-5 flex-col'>           
            {   Id ? (<form>
                        <div className='flex flex-col gap-y-2'>
                            <label className='capitalize font-bold font-roboto text-blue-500'>Edit Article title</label>
                            <ReactQuill
                                value={title}
                                onChange={setTitle}
                            />
                        </div>

                        <div className='flex flex-col gap-y-2 mt-10'>
                            <label className='capitalize font-bold font-roboto text-blue-500'>Edit Article description</label>
                            <ReactQuill
                                value={description}
                                onChange={setDescription}
                            />
                        </div>

                        <button 
                            className='rounded-lg py-2 px-4 bg-blue-light text-white font-medium font-roboto mt-5'
                            onClick={e => handleEdit(e)}>
                                Save changes
                        </button>
                    </form>) : posts ? posts.slice(0, 9).map(post => (
                    <DashboardCard 
                        post={post} 
                        url={`${post.id}`} 
                        key={post.id} 
                        action='edit'
                        image={image} 
                    />
                )) : 'Loading..'
            }
        </div>
    )
}

export default RenderEditArticle;