import { Link } from "react-router-dom";


const NotFound = () => {
    return(
        <div className="container mx-auto px-5 py-80 flex flex-col gap-y-5 items-center justify-center">
            <h1 className="text-xl lg:text-4xl text-center text-blue-500">
                <span className="font-bold mr-2">404</span>
                | 
                <span className="ml-2">Page Not Found</span>
            </h1>
            <nav className="flex text text-xl gap-x-5 lg:text-2xl">
                <Link to='/' className="text-blue-light underline">Home</Link>
                <Link to='/blog' className="text-blue-light underline">Blog</Link>
            </nav>
        </div>
    )
}

export default NotFound;