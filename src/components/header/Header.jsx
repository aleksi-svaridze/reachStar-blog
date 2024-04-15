import { NavLink, Link } from "react-router-dom"

export const Header = ({isMenuVisible, setIsMenuVisible}) => {
  
    return(
        <div className="sticky top-0 left-0 right-0 z-50 bg-blue-100">
            <header className="lg:py-8 xl:py-9 py-[21px] container mx-auto flex justify-between items-center px-5">
                <Link to='/' className="">Blog</Link>
                <nav className="items-center hidden md:flex">
                    <NavLink 
                        className={`text-blue-500 font-opensans font-semibold text-base mx-5 tracking-wide`} 
                        to={'/'}>Home</NavLink> 
                    <NavLink 
                        className={`text-blue-500 font-opensans font-semibold text-base mx-5 tracking-wide`}  
                        to={'/blog'}>Blog</NavLink>
                    <NavLink 
                        className={`text-blue-500 font-opensans font-semibold text-base ms-5 me-2 border-2 py-2 px-4 rounded-full border-blue-500 tracking-wide`}  
                        to={'/login'}>Login</NavLink>
                    <NavLink 
                        className={`text-blue-500 font-opensans font-semibold text-base ms-2 me-5 border-2 py-2 px-4 rounded-full border-blue-500 tracking-wide`}  
                        to={'/registration'}>Register</NavLink>
                </nav>
                <div 
                    onClick={() => setIsMenuVisible(!isMenuVisible)} 
                    className="md:hidden cursor-pointer">
                        <ion-icon className="w-8 h-8" name="menu-outline"></ion-icon>
                </div>

                <div
                className={`items-center pt-10 flex flex-col gap-y-5 md:hidden w-2/3 bg-slate-500 md:bg-transparent duration-500 ${isMenuVisible ? 'right-0' : '-right-full'} lg:static fixed top-[66px] bottom-0`}
            >
                <NavLink 
                    className={`text-blue-500 font-opensans font-semibold text-base mx-5 tracking-wide`} 
                    to={'/'}
                >
                    Home
                </NavLink> 
                <NavLink 
                    className={`text-blue-500 font-opensans font-semibold text-base mx-5 tracking-wide`}  
                    to={'/blog'}
                >
                    Blog
                </NavLink>
                <NavLink 
                    className={`text-blue-500 font-opensans font-semibold text-base text-center border-2 py-2 w-[100px] rounded-full border-blue-500 tracking-wide`}  
                    to={'/login'}
                >
                    Login
                </NavLink>
                <NavLink 
                    className={`text-blue-500 font-opensans font-semibold text-base text-center border-2 py-2 w-[100px] rounded-full border-blue-500 tracking-wide`}  
                    to={'/registration'}
                >
                    Register
                </NavLink>
                </div>
            </header>
        </div>
    )
}

// export const MobileMenu = ({isMenuVisible}) => {
//     return(
//         <div 
//             style={{height: 'calc(100vh - 66px)'}} 
//             className={`items-center pt-10 flex flex-col gap-y-5 md:hidden w-3/4 md:w-auto sm:w-1/2 bg-slate-500 md:bg-transparent duration-500 ${isMenuVisible ? '-right-full' : 'right-0'} absolute bottom-0 top-[66px]`}
//         >
//             <NavLink 
//                 className={`text-blue-500 font-opensans font-semibold text-base mx-5 tracking-wide`} 
//                 to={'/'}
//             >
//                 Home
//             </NavLink> 
//             <NavLink 
//                 className={`text-blue-500 font-opensans font-semibold text-base mx-5 tracking-wide`}  
//                 to={'/blog'}
//             >
//                 Blog
//             </NavLink>
//             <NavLink 
//                 className={`text-blue-500 font-opensans font-semibold text-base text-center border-2 py-2 w-[100px] rounded-full border-blue-500 tracking-wide`}  
//                 to={'/login'}
//             >
//                 Login
//             </NavLink>
//             <NavLink 
//                 className={`text-blue-500 font-opensans font-semibold text-base text-center border-2 py-2 w-[100px] rounded-full border-blue-500 tracking-wide`}  
//                 to={'/registration'}
//             >
//                 Register
//             </NavLink>
//         </div>
//     )
// }
