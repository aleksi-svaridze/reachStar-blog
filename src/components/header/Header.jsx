import { NavLink, Link } from "react-router-dom"
import { useEffect, useState } from "react";

const Header = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
    );
    const [toggleMenu, setToggleMenu] = useState(false);

    const element = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const options = [
        {
            icon: 'sunny-outline',
            theme: 'light'
        },
        {
            icon: 'moon-outline',
            theme: 'dark'
        },
        {
            icon: 'laptop-outline',
            theme: 'system'
        }
    ]

    const onWindowMatch = () => {
        if(localStorage.theme === 'dark' || (!('theme' in localStorage) && mediaQuery.matches)) {
            element.classList.add('dark');
        } else {
            element.classList.remove('dark');
        }
    }
    
    onWindowMatch()

    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                break;
            case 'light':
                element.classList.remove('dark');
                localStorage.setItem('theme', 'light')
                break;
            default:
                localStorage.removeItem('theme');
                onWindowMatch();
                break;
        }
    })

    mediaQuery.addEventListener('change', e => {
        if(!('theme' in localStorage)) {
            if(e.matches){
                element.classList.add('dark')
            } else {
                element.classList.remove('dark')
            }
        }
    }) 

    let iconColor;
    // if(mediaQuery.matches && theme === 'system') {
    //     iconColor = 'text-white';
    // } else if(mediaQuery.matches && theme === 'dark') {
    //     iconColor = 'text-white';
    // } else if((mediaQuery.matches) && theme === 'light') {
    //     iconColor = 'text-red-500';
    // }

    // console.log(theme, mediaQuery.matches)

    return(
        <header className="bg-blue-100 dark:bg-blue-500 lg:py-8 xl:py-9 py-[21px] relative top-0 left-0 right-0">
            <div className="container mx-auto flex justify-between items-center px-2">
                <Link to='/'>Blog</Link>
                <nav className="items-center hidden md:flex">
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
                    <div className="flex gap-x-3">
                        {
                            options.map(option => (
                                <button
                                    onClick={() => setTheme(option.theme)}
                                    key={option.theme} 
                                    className={
                                        `w-6 h-6
                                        ${iconColor}`
                                    }
                                >
                                    <ion-icon name={option.icon}></ion-icon>
                                </button>
                            ))
                        }
                    </div>
                </nav>
                <div 
                    onClick={() => setToggleMenu(!toggleMenu)} 
                    className="md:hidden cursor-pointer">
                        <ion-icon name="menu-outline"></ion-icon>
                </div>
            </div>
            <div 
                style={{height: 'calc(100vh - 66px)'}} 
                className={`items-center pt-10 flex flex-col gap-y-5 md:hidden w-3/4 md:w-auto sm:w-1/2 bg-slate-500 md:bg-transparent top-[66px] bottom-0 duration-500 absolute ${toggleMenu ? 'right-0' : '-right-full'}`}
            >
                <NavLink 
                    className={({isActive}) => `${isActive && 'text-red-500 dark:text-yellow-500'} text-blue-500 dark:text-white font-opensans font-semibold text-base mx-5 tracking-wide`} 
                    to={'/'}>Home</NavLink> 
                <NavLink 
                    className={({isActive}) => `${isActive && 'text-red-500 dark:text-yellow-500'} text-blue-500 dark:text-white font-opensans font-semibold text-base mx-5 tracking-wide`}  
                    to={'/blog'}>Blog</NavLink>
                <NavLink 
                    className={({isActive}) => `${isActive && 'text-red-500 dark:text-yellow-500'} text-blue-500 dark:text-white font-opensans font-semibold text-base text-center border-2 py-2 w-[100px] rounded-full border-blue-500 dark:border-white tracking-wide`}  
                    to={'/login'}>Login</NavLink>
                <NavLink 
                    className={({isActive}) => `${isActive && 'text-red-500 dark:text-yellow-500'} text-blue-500 dark:text-white font-opensans font-semibold text-base text-center border-2 py-2 w-[100px] rounded-full border-blue-500 dark:border-white tracking-wide`}  
                    to={'/registration'}>Register</NavLink>
                <div className="flex flex-col gap-y-3">
                    {
                        options.map(option => (
                            <button
                                onClick={() => setTheme(option.theme)}
                                key={option.theme} 
                                className={
                                    `w-6 h-6
                                    ${iconColor}`
                                }
                            >
                                <ion-icon name={option.icon}></ion-icon>
                            </button>
                        ))
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;
