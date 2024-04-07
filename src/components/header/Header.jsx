import { NavLink } from "react-router-dom"

const Header = () => {
    return(
        <header>
            <nav>
                <NavLink className={({isActive}) => `${isActive ? 'text-primary' : 'text-black'}`} to={'/'}>Home</NavLink>
                <NavLink className={({isActive}) => `${isActive ? 'text-primary' : 'text-black'}`} to={'/blog'}>blog</NavLink>
            </nav>
        </header>
    )
}

export default Header;