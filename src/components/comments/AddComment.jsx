import { useState } from "react";
import axios from 'axios';

const AddComment = ({postId}) => {
    const [addComment, setAddComment] = useState('');

    const handleAddNewComment = e => {
        e.preventDefault();
      
        axios
            .post(`https://apitest.reachstar.io/comment/add/${postId}`, {comment: addComment})
            .then(response => console.log(response))
            .catch(error => console.error(error));
            
        setAddComment('');
    }

    return(
        <form className="mt-6">
            <textarea 
                className="w-full border rounded-lg mb-8 h-28 focus:outline-none p-3 font-roboto text-blue-200"
                value={addComment} 
                name="comment"
                onChange={(e) => setAddComment(e.target.value)}
                ></textarea>
            <button 
                className="bg-blue-light text-white py-2 px-4 rounded-lg ml-auto mr-0 block"
                onClick={e => handleAddNewComment(e)}>
                    Add comment
            </button>
        </form>
    )
}

export default AddComment;