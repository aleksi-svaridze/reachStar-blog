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
        window.location.reload()
    }

    return(
        <form className="mb-10 relative h-40">
            <textarea 
                className="w-full border rounded-lg mb-8 h-full focus:outline-none p-3 text-blue-200"
                value={addComment} 
                placeholder="Leave your comment here..."
                name="comment"
                onChange={(e) => setAddComment(e.target.value)}
                ></textarea>
            <button 
                className="bg-blue-light text-white py-2 px-6 rounded-lg right-2 bottom-2 absolute capitalize"
                onClick={e => handleAddNewComment(e)}>
                    send
            </button>
        </form>
    )
}

export default AddComment;