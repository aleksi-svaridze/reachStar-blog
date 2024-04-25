import { useState} from 'react';
import axios from 'axios'
import { months } from '../../utils/Date';
import User_1 from '../../assets/images/users/SB-Standees-Spong-1_700x.webp'



export default function Comment({postId, post}) {
    const [addComment, setAddComment] = useState('');

    const handleAddNewComment = e => {
        e.preventDefault();
        axios
            .post(`https://apitest.reachstar.io/comment/add/${postId}`, {comment: addComment})
            .then(response =>  console.log(response.data))
            .catch(error => console.error(error));
        setAddComment('');
    }

    const handleDeleteComment = commentId => {
        axios.delete(`https://apitest.reachstar.io/comment/delete/${commentId}`);
    }

    return (
        <>
            <div>
                <h3 className="capitalize text-blue-500 font-bold my-4">comments:</h3>

                {post.comments && post.comments.map(comment => (
                    <div 
                        key={comment.id} 
                        className="bg-[#F2F4F5] relative text-blue-200 p-3 rounded-md mb-5 last:mb-0 flex gap-x-5">
                
                        <div className="rounded-full w-12 h-12 shrink-0 overflow-hidden">
                            <img src={comment.image ? comment.image : User_1} className='rounded-full w-12 h-12' alt={comment.comment} />
                        </div>

                        <div className="font-roboto">
                            <h4 className="font-bold text-base mb-2">
                                user - {comment.id}
                                <span className="block font-normal text-xs">
                                    {`
                                        ${new Date(comment.created_at).getDate()} 
                                        ${months[new Date(comment.created_at).getMonth()]} 
                                        ${new Date(comment.created_at).getFullYear()}, 
                                        ${new Date(comment.created_at).getHours()}:${new Date(comment.created_at).getMinutes()}
                                    `}
                                </span>
                            </h4>
                            <p className="text-sm" dangerouslySetInnerHTML={{__html: comment.comment}}/>
                        </div>
                        <div 
                            className='top-3 right-3 cursor-pointer absolute'
                            onClick={() => handleDeleteComment(comment.id)}>
                            <ion-icon name="trash-bin-outline" style={{width: '20px', height: '20px'}}></ion-icon>
                        </div>
                    </div>
                    ))
                }
            </div>

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
        </>
    )
}
