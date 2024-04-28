import { NavLink, Link } from "react-router-dom";
import scrollToTop from '../../functions/scrolToTop';
import { useWindowSize } from "@uidotdev/usehooks";
import { useState, useEffect } from "react";
import MobileMenu from "../mobileMenu/MobileMenu";

export const Header = ({isLoggedIn, setIsLoggedIn}) => { 
    const [isOpen, setIsOpen] = useState(false);
    let {width} = useWindowSize();

    useEffect(() => {
        width >= 768 && setIsOpen(false);
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
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden cursor-pointer">
                {
                    isOpen 
                    ? 
                    <ion-icon name="close-outline" className="w-8 h-8"></ion-icon>
                    : 
                    <ion-icon className="w-8 h-8" name="menu-outline"></ion-icon>
                }              
                <MobileMenu 
                    isOpen={isOpen} 
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn} 
                />    
                </div>
            </header>
        </div>
    )
}
