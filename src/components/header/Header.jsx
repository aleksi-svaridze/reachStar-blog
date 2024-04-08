import { NavLink, Link } from "react-router-dom"
import { GoSun, GoMoon } from "react-icons/go";

const Header = ({isDark, toggleColorMode}) => {
    return(
        <header className="bg-blue-100 dark:bg-blue-500 lg:py-8 xl:py-9 py-5">
            <div className="container mx-auto flex justify-between items-center px-2">
                <Link to='/'>Blog</Link>
                <nav className="flex items-center">
                    <NavLink 
                        className={({isActive}) => `${isActive && 'text-red-500 dark:text-yellow-500'} text-blue-500 dark:text-white font-opensans font-semibold text-base mx-5 tracking-wide`} 
                        to={'/'}>Home</NavLink> 
                    <NavLink 
                        className={({isActive}) => `${isActive && 'text-red-500 dark:text-yellow-500'} text-blue-500 dark:text-white font-opensans font-semibold text-base mx-5 tracking-wide`}  
                        to={'/blog'}>Blog</NavLink>
                    <NavLink 
                        className={({isActive}) => `${isActive && 'text-red-500 dark:text-yellow-500'} text-blue-500 dark:text-white font-opensans font-semibold text-base ms-5 me-2 border-2 py-2 px-4 rounded-full border-blue-500 dark:border-white tracking-wide`}  
                        to={'/login'}>Login</NavLink>
                    <NavLink 
                        className={({isActive}) => `${isActive && 'text-red-500 dark:text-yellow-500'} text-blue-500 dark:text-white font-opensans font-semibold text-base ms-2 me-5 border-2 py-2 px-4 rounded-full border-blue-500 dark:border-white tracking-wide`}  
                        to={'/registration'}>Register</NavLink>
                    <div 
                        className="cursor-pointer" 
                        onClick={toggleColorMode}>
                            {isDark ? <GoSun className="w-8 h-8 text-blue-500 dark:text-white" /> : <GoMoon className="w-8 h-8 text-blue-500 dark:text-white" />}
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;