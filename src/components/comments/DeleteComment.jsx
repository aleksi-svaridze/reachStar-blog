import axios from 'axios'

const DeleteComment = ({comment, setComments, comments}) => {
    const handleDeleteComment = commentId => {
        axios.delete(`https://apitest.reachstar.io/comment/delete/${commentId}`);
        setComments(comments.filter(comment => comment.id !== commentId));
    }

    return(
        <div 
            className='top-3 right-3 cursor-pointer absolute'
            onClick={() => handleDeleteComment(comment.id)}
        >
        <ion-icon name="trash-bin-outline" style={{width: '20px', height: '20px'}}></ion-icon>
    </div>
    )
}

export default DeleteComment;