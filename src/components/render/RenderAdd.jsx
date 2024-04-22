import ReactQuill from 'react-quill';
import { useState } from 'react';
import axios from 'axios'

import 'react-quill/dist/quill.snow.css';


const RenderAddArticle = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleArticleData = (e) => {
        e.preventDefault();
       
        setTitle(title);
        setDescription(description)

        axios.post('https://apitest.reachstar.io/blog/add', {
        title: title, 
        description: description,
        id: Math.random()
        })
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }

    return(
        <form>
            <div className='flex flex-col gap-y-2'>
                <label className='capitalize font-bold font-roboto text-blue-500'>Add Article title</label>
                <ReactQuill 
                    placeholder='Write the title'
                    value={title} 
                    onChange={setTitle}
                    theme='snow'
                />
            </div>

            <div className='flex flex-col gap-y-2 mt-20'>
                <label className='capitalize font-bold font-roboto text-blue-500'>Add Article description content</label>
                <ReactQuill 
                    placeholder='Write the description'
                    value={description} 
                    onChange={setDescription}
                    theme='snow'
                />
            </div>

            <button 
                className='rounded-lg py-2 px-4 bg-blue-light text-white font-medium font-roboto mt-5'
                onClick={(e) => handleArticleData(e)}
            >
                Add article
            </button>
        </form>
    )
}

export default RenderAddArticle;