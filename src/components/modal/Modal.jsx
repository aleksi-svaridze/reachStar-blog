import { RiCloseFill } from "react-icons/ri";


const Modal = ({response}) => {

    const handleCloseModal = (e) => {
        e.target.style.display = 'none';
        window.location.reload();
    }
    return(
        <div className="bg-black/80 h-csreen w-full fixed top-0 bottom-0 right-0 left-0 z-50">
            <RiCloseFill onClick={(e) => handleCloseModal(e)} className="w-8 h-8 text-white absolute right-10 top-10 cursor-pointer" />
            <p className="text-white fixed z-50 flex items-center justify-center bg-red-500/90 top-[50%] rounded-lg text-base sm:text-lg lg:text-xl left-[50%] -translate-x-[50%] -translate-y-[50%] h-20 sm:h-28 w-[300px] sm:w-96">{response}</p>
        </div>
    )
}

export default Modal;