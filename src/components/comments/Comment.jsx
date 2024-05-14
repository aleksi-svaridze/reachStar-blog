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
         <div className={`grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 lg:gap-x-7 gap-y-10 lg:gap-y-0 container mx-auto px-5 pb-10`}>
            <div className="grid lg:col-span-3 xl:col-span-2">
                    <AddComment 
                        postId={postId} 
                        setComments={setComments} 
                        comments={comments}
                    />

                    <h3 className='capitalize text-[#283646] font-bold text-base mb-8 font-raleway'>All Comments ({comments.length})</h3>

                    {comments && comments.reverse().map(comment => (
                        <div 
                            key={comment.id} 
                            className="bg-[#F2F4F5] relative text-blue-200 p-3 pb-5 rounded-md mb-5 last:mb-0 flex gap-x-5">
                    
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
                                            ${new Date(comment.created_at).getHours()}:${ (new Date(comment.created_at).getMinutes() === 0 || new Date(comment.created_at).getMinutes() < 10) ? new Date(comment.created_at).getMinutes() + "0" : new Date(comment.created_at).getMinutes() }
                                        `}
                                    </span>
                                </h4>
                                <div className="text-sm" dangerouslySetInnerHTML={{__html: comment.comment}} />
                            </div>
                            <DeleteComment 
                                comment={comment} 
                                setComments={setComments} 
                                comments={comments} 
                            />
                        </div>
                    ))}
            </div>
        </div>
    )
}
