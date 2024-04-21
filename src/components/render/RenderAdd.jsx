import ReactQuill from 'react-quill';
import { useEffect, useState } from 'react';
import axios from 'axios'

import 'react-quill/dist/quill.snow.css';


const RenderAddArticle = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleArticleData = (e) => {
        e.preventDefault();
        console.log(title, description)
       
           setTitle(title);
           setDescription(description)

           console.log(title, description)
 
    }

    useEffect(() => {
        axios.post('https://apitest.reachstar.io/blog/add', {
            title: title, 
            description: description,
            id: Math.random()
        }).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    },[description, title])



    

    console.log(title, description)

    return(
        <form>
            <div className='group flex flex-col gap-y-2'>
                <label className='capitalize font-bold font-roboto text-blue-500'>Add Article title</label>
                <ReactQuill 
                    placeholder='Write the title'
                    value={title} 
                    onChange={setTitle}
                    theme='snow'
                />
            </div>

            <div className='group flex flex-col gap-y-2 mt-20'>
                <label className='capitalize font-bold font-roboto text-blue-500'>Add Article description content</label>
                <ReactQuill 
                    placeholder='Write the description'
                    value={description} 
                    onChange={setDescription}
                    theme='snow'
                />
            </div>
            <button 
                    className='rounded-lg py-2 px-4 bg-blue-light text-white font-medium font-roboto'
                    onClick={(e) => handleArticleData(e)}
                >
                    Add article
                </button>
        </form>
    )
}

export default RenderAddArticle;