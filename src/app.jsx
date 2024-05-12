import { Routes, Route, useNavigate, useLocation} from "react-router-dom"
import axios from 'axios';
import { useEffect, useState } from "react";

import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import SinglePost from './pages/singlePost/SinglePost';
import { Header} from "./components/header/Header";
import Dashboard from "./pages/dashboard/Dashboard";
import Footer from "./components/footer/Footer";
import NotFound from "./pages/notFound/NotFound";

// TODO: => ლოგინის ვალიდაცია დასასრულებელია <=


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const [isMainPage, setIsMainPage] = useState(false);

    let location = useLocation();

    useEffect(() => {
        if(location.pathname === '/') {
            setIsMainPage(true)
        } else {
            setIsMainPage(false)
        }
    }, [location.pathname])

    const loginUserHandler = data => {
        axios
            .post('https://apitest.reachstar.io/signin', {email: data.email, password: data.password})
            .then(res => {
                if(res.status === 200) {
                    setIsLoggedIn(true)
                    navigate('/')
                }
            })
            .catch(err => alert('Enter valid information'))
    }


    useEffect(() => {
        let data = window.localStorage.getItem('isUserLoggedIn');
        if(data !== null) setIsLoggedIn(JSON.parse(data));
    }, [])


    useEffect(() => {
        window.localStorage.setItem('isUserLoggedIn', JSON.stringify(isLoggedIn))
    },[isLoggedIn])
    

    return(
        <div className="font-roboto">
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isMainPage={isMainPage} />
            <Routes>
          
                {
                    isLoggedIn ? 
                    (
                        <>
                            <Route path="/" element={<Home />} />
                            <Route path='blog' element={<Blog/>} />
                            <Route path="blog/:postId" element={<SinglePost />}>
                                <Route path="" element={<SinglePost />} />
                            </Route>
        
                            <Route path='dashboard' element={<Dashboard />} />
                            
                            <Route path='dashboard/:actionsId' element={<Dashboard />}>
                                <Route path='' element={<Dashboard />} />
                            </Route>
        
                            <Route path='dashboard/:actionsId/:Id' element={<Dashboard />}>
                                <Route path='' element={<Dashboard />} />
                            </Route>                       
                        </>
                    )
                    : 
                    (<>
                        <Route 
                            path="" 
                            element={ <Login 
                                    loginUserHandler={loginUserHandler}/>}>
                            <Route 
                                index 
                                path="login" 
                                element={<Login loginUserHandler={loginUserHandler} />} />
                        </Route>
                    </>)
                }
                <Route path="registration" element={<Registration />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer isMainPage={isMainPage} />
        </div>
    )
}

export default App;