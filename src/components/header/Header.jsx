const { Link } = require("react-router-dom")

const Header = () => {
    return(
        <header>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/blog'}>blog</Link>
            </nav>
        </header>
    )
}

export default Header;