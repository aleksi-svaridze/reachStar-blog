import { NavLink, Link } from "react-router-dom"
import { useState } from "react"

const Header = () => {
    const [isDark, setIsDark] = useState(true);


    isDark ? 
        document.querySelector('html').setAttribute('class', 'dark') 
        :
        document.querySelector('html').setAttribute('class', 'light')

    return(
        <header className="bg-blue-100 dark:bg-blue-500 lg:py-8 xl:py-9 py-5">
            <div className="container mx-auto flex justify-between px-2">
                <Link to='/'>Blog</Link>
                <nav>
                    <NavLink 
                        className={({isActive}) => `${isActive && 'text-red-500 dark:text-yellow-500'} text-blue-500 dark:text-white font-opensans font-semibold text-base mx-5 capitalize`} 
                        to={'/'}>home</NavLink> 
                    <NavLink 
                        className={({isActive}) => `${isActive && 'text-red-500 dark:text-yellow-500'} text-blue-500 dark:text-white font-opensans font-semibold text-base mx-5 capitalize`}  
                        to={'/blog'}>blog</NavLink>
                    <NavLink 
                        className={({isActive}) => `${isActive && 'text-red-500 dark:text-yellow-500'} text-blue-500 dark:text-white font-opensans font-semibold text-base mx-5 capitalize border-2 py-2 px-4 rounded-full border-blue-500 dark:border-white`}  
                        to={'/login'}>login</NavLink>
                    <NavLink 
                        className={({isActive}) => `${isActive && 'text-red-500 dark:text-yellow-500'} text-blue-500 dark:text-white font-opensans font-semibold text-base mx-5 capitalize border-2 py-2 px-4 rounded-full border-blue-500 dark:border-white`}  
                        to={'/registration'}>register</NavLink>
                    <button onClick={e => setIsDark(!isDark)}>{isDark ? 'Light' : 'Dark'}</button>
                </nav>
            </div>
        </header>
    )
}

export default Header;