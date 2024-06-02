import { NavLink, Link } from "react-router-dom"
import scrollToTop from '../../functions/scrolToTop'


export default function MobileMenu({isOpen, isLoggedIn, setIsLoggedIn}) {

  return (
    <div 
        className={`md:hidden w-2/3 bg-blue-100 border-l border-t md:bg-transparent duration-500
     ${isOpen ? 'right-0' : '-right-full'} lg:static fixed top-[66px] bottom-0`}
>

        <div className="mt-10 mb-3 font-opensans font-semibold text-base tracking-wide items-center justify-center flex flex-col gap-y-5">
    {
        isLoggedIn && 
        <>
       
            <NavLink 
                className={({isActive}) => isActive ? 'text-red-500 mx-5' : 'text-blue-500 mx-5'} 
                onClick={scrollToTop} to={'/'}
            >
                Home
            </NavLink> 
            <NavLink 
                className={({isActive}) => isActive ? 'text-red-500 mx-5' : 'text-blue-500 mx-5'} 
                onClick={scrollToTop} to={'/blog'}
            >
                Blog
            </NavLink>
            <NavLink 
                className={({isActive}) => isActive ? 'text-red-500 mx-5' : 'text-blue-500 mx-5'}   
                onClick={scrollToTop} to={'/dashboard'}
            >
                dashboard
            </NavLink>
        </>
            
    }
        </div>

        <div className="items-center justify-center flex flex-col gap-y-5">
        {
            isLoggedIn ?  
            <Link 
                onClick={() => setIsLoggedIn(false)}
                className={`text-blue-500 font-opensans font-semibold text-base text-center border-2 py-2 w-[100px] rounded-full border-blue-500 tracking-wide`}  
                to={'/login'}
            >
                Log Out
            </Link>
            :
            <Link 
                className={`text-blue-500 font-opensans font-semibold text-base text-center border-2 py-2 w-[100px] rounded-full border-blue-500 tracking-wide`}  
                to={'/login'}
            >
                Log In
            </Link>
        }
        {
            isLoggedIn ? '' : (<Link 
                className={`text-blue-500 font-opensans font-semibold text-base text-center border-2 py-2 w-[100px] rounded-full border-blue-500 tracking-wide`}  
                to={'/registration'}
            >
                Register
            </Link>)
        }
        </div>
    </div>  
  )
}
