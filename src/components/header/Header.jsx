import { NavLink } from "react-router-dom"
import { useState } from "react"

const Header = () => {
    const [isDark, setIsDark] = useState(true);


    isDark ? 
        document.querySelector('html').setAttribute('class', 'dark') 
        :
        document.querySelector('html').setAttribute('class', 'light')

    return(
        <header className="bg-blue-500 dark:bg-orange-500">
            <nav>
                <NavLink 
                    className={({isActive}) => `${isActive ? 'text-red-500' : 'text-green-500'}`} 
                    to={'/'}>Home</NavLink>
                <NavLink 
                    className={({isActive}) => `${isActive ? 'text-red-500' : 'text-green-500'}`} 
                    to={'/blog'}>blog</NavLink>
                <NavLink 
                    className={({isActive}) => `${isActive ? 'text-red-500' : 'text-green-500'}`} 
                    to={'/login'}>login</NavLink>
                <NavLink 
                    className={({isActive}) => `${isActive ? 'text-red-500' : 'text-green-500'}`} 
                    to={'/registration'}>register</NavLink>
            </nav>
            <button onClick={e => setIsDark(!isDark)}>{isDark ? 'Light' : 'Dark'}</button>
        </header>
    )
}

export default Header;