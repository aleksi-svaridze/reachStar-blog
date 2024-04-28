import { NavLink } from "react-router-dom"
import scrollToTop from '../../functions/scrolToTop'


export default function MobileMenu({isOpen, isLoggedIn, setIsLoggedIn}) {

  return (
    <div 
        className={`items-center justify-center flex flex-col gap-y-5 md:hidden w-2/3 bg-blue-100 border-l border-t md:bg-transparent duration-500
     ${isOpen ? 'right-0' : '-right-full'} lg:static fixed top-[66px] bottom-0`}
>
    {
        isLoggedIn && (
        <>
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
            <NavLink 
                className={`text-blue-500 font-opensans font-semibold text-base mx-5 tracking-wide`}  
                onClick={scrollToTop} to={'/dashboard'}
            >
                dashboard
            </NavLink>
        </>
        )
    }
    {
        isLoggedIn ?  
        <NavLink 
            onClick={() => setIsLoggedIn(false)}
            className={`text-blue-500 font-opensans font-semibold text-base text-center border-2 py-2 w-[100px] rounded-full border-blue-500 tracking-wide`}  
            to={'/login'}
        >
            Log Out
        </NavLink>
        :
        <NavLink 
            className={`text-blue-500 font-opensans font-semibold text-base text-center border-2 py-2 w-[100px] rounded-full border-blue-500 tracking-wide`}  
            to={'/login'}
        >
            Log In
        </NavLink>
    }
    {
        isLoggedIn ? '' : (<NavLink 
            className={`text-blue-500 font-opensans font-semibold text-base text-center border-2 py-2 w-[100px] rounded-full border-blue-500 tracking-wide`}  
            to={'/registration'}
        >
            Register
        </NavLink>)
    }
    </div>  
  )
}
