import { Routes, Route, useNavigate } from "react-router-dom"
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import SinglePost from './pages/singlePost/SinglePost';
import { Header} from "./components/header/Header";
import NotFound from "./pages/notFound/NotFound";
import axios from 'axios';


import { PrivatRoutes } from "./routes/PrivatRoutes";
import { useEffect, useState } from "react";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    useEffect(()=>{
        let data = window.localStorage.getItem('isUserLoggedIn');
        if(data !== null) setIsLoggedIn(JSON.parse(data));
    }, [])


    useEffect(() => {
        window.localStorage.setItem('isUserLoggedIn', JSON.stringify(isLoggedIn))
    },[isLoggedIn])

    console.log(isLoggedIn)

    const loginUserHandler = e => {
        e.preventDefault();

        if(isLoggedIn) {
            navigate('/')
        } else {
            axios
            .post('https://apitest.reachstar.io/signin', {email, password})
            .then(res => {
                if(res.status === 200) {
                    setIsLoggedIn(true)
                    navigate('/')
                }
            })
            .catch(err => console.log(err.message))
        }
    }

    return(
        <div className="">
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            
            <Routes>
                

                {
                    isLoggedIn ? 
                    (<Route element={<PrivatRoutes isLoggedIn={isLoggedIn} />}>
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
                    </Route>) : 
                    (
                    <Route 
                        index 
                        path="login" 
                        element={
                            <Login 
                                email={email} 
                                setEmail={setEmail} 
                                password={password} 
                                setPassword={setPassword} 
                                loginUserHandler={loginUserHandler} 
                        />} 
                    />
                    )
                }
                <Route path="registration" element={<Registration />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App;