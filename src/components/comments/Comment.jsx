import { months } from '../../utils/Date';
import User_1 from '../../assets/images/users/SB-Standees-Spong-1_700x.webp'
import AddComment from './AddComment';
import DeleteComment from './DeleteComment';
import { useEffect, useState } from 'react';
import axios from 'axios';



export default function Comment({postId}) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        axios.get(`https://apitest.reachstar.io/blog/get/${postId}`)
            .then(res => setComments(res.data.comments))
            .catch(err => console.log(err))
    }, [postId])

    return (
        <>
            <div>
                <h3 className="capitalize text-blue-500 font-bold my-4">comments:</h3>

                {comments && comments.map(comment => (
                    <div 
                        key={comment.id} 
                        className="bg-[#F2F4F5] relative text-blue-200 p-3 rounded-md mb-5 last:mb-0 flex gap-x-5">
                
                        <div className="rounded-full w-12 h-12 shrink-0 overflow-hidden">
                            <img 
                                src={comment.image ? comment.image : User_1} 
                                className='rounded-full w-12 h-12' 
                                alt={comment.comment} 
                            />
                        </div>

                        <div className="">
                            <h4 className="font-bold text-base mb-2">
                                Comment ID - {comment.id}
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
                        <DeleteComment 
                            comment={comment} 
                            setComments={setComments} 
                            comments={comments} 
                        />
                    </div>
                ))}
            </div>
            <AddComment 
                postId={postId} 
                setComments={setComments} 
                comments={comments}
            />
        </>
    )
}
