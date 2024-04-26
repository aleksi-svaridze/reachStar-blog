import { NavLink, Link } from "react-router-dom"
import { useState, useEffect } from "react";
import scrollToTop from '../../functions/scrolToTop'
import { useWindowSize } from "@uidotdev/usehooks";

export const Header = ({isLoggedIn, setIsLoggedIn}) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    let {width} = useWindowSize();

    useEffect(() => {
        width >= 768 && setIsMenuVisible(false);
    }, [width])

    return(
        <div className=" bg-blue-100 fixed left-0 right-0 top-0 z-10">
            <header className="lg:py-8 xl:py-9 py-[21px] container mx-auto flex justify-between items-center px-5">
                <Link onClick={scrollToTop} to='/' className="text-xl md:text-4xl font-bold font-roboto text-blue-500">Blog</Link>
                <nav className="items-center hidden md:flex">
                    <NavLink 
                        className={`text-blue-500 font-opensans font-semibold text-base mx-5 tracking-wide`} 
                        onClick={scrollToTop} to={'/'}>Home</NavLink> 
                    <NavLink 
                        className={`text-blue-500 font-opensans font-semibold text-base mx-5 tracking-wide`}  
                        onClick={scrollToTop} to={'/blog'}>Blog</NavLink>
                    {
                        isLoggedIn && (<NavLink 
                            className={`text-blue-500 font-opensans font-semibold text-base mx-5 tracking-wide`}  
                            onClick={scrollToTop} to={'/dashboard'}>Dashboard</NavLink>)
                    }
                    <NavLink 
                        onClick={() => {
                            setIsLoggedIn(false);
                        }}
                        className={`text-blue-500 font-opensans font-semibold text-base ms-5 me-2 border-2 py-2 px-4 rounded-full border-blue-500 tracking-wide`}  
                        to={`/login`}> 
                        {
                            isLoggedIn ? 'Log Out' : 'Log In' 
                        }
                    </NavLink>

                    {
                        isLoggedIn ? '' : (<NavLink 
                            className={`text-blue-500 font-opensans font-semibold text-base ms-2 me-5 border-2 py-2 px-4 rounded-full border-blue-500 tracking-wide`}  
                            to={'/registration'}>Register</NavLink>)
                    }
                </nav>
                <div
                    onClick={() => {
                        setIsMenuVisible(!isMenuVisible);
                        scrollToTop();
                    }} 
                    className="md:hidden cursor-pointer">
                        <ion-icon className="w-8 h-8" name="menu-outline"></ion-icon>
                </div>

                <div
                    className={`items-center pt-10 flex flex-col gap-y-5 md:hidden w-2/3 bg-blue-100 border-l border-t md:bg-transparent duration-500 ${isMenuVisible ? 'right-0' : '-right-full'} lg:static fixed top-[66px] bottom-0`}
                >
                    <NavLink 
                        className={`text-blue-500 font-opensans font-semibold text-base mx-5 tracking-wide`} 
                        onClick={scrollToTop} to={'/'}
                    >
                        Home
                    </NavLink> 
                    <NavLink 
                        className={`text-blue-500 font-opensans font-semibold text-base mx-5 tracking-wide`}  
                        onClick={scrollToTop} to={'/blog'}
                    >
                        Blog
                    </NavLink>
                    {
                        isLoggedIn && (
                            <NavLink 
                                className={`text-blue-500 font-opensans font-semibold text-base mx-5 tracking-wide`}  
                                onClick={scrollToTop} to={'/dashboard'}
                            >
                                dashboard
                            </NavLink>
                        )
                    }
                    <NavLink 
                        onClick={() => {
                            setIsLoggedIn(false)
                        }}
                        className={`text-blue-500 font-opensans font-semibold text-base text-center border-2 py-2 w-[100px] rounded-full border-blue-500 tracking-wide`}  
                        to={`${isLoggedIn && '/login'}`}
                    >
                        {
                            isLoggedIn ? 'Log Out' : 'Log In' 
                        }
                    </NavLink>
                    {
                            isLoggedIn ? '' : (<NavLink 
                                className={`text-blue-500 font-opensans font-semibold text-base text-center border-2 py-2 w-[100px] rounded-full border-blue-500 tracking-wide`}  
                                to={'/registration'}
                            >
                                Register
                            </NavLink>)
                    }
                </div>
            </header>
        </div>
    )
}
