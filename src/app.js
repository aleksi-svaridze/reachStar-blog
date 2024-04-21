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
import { useState } from "react";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const loginUserHandler = e => {
        e.preventDefault();
        axios.post('https://apitest.reachstar.io/signin', {
            'email': email,
            'password': password
        })
            .then(res => {
                console.log(res)
                if(res.status === 200) {
                    // localStorage.setItem('status', 'logged in')
                    setIsLoggedIn(true)
                    navigate('/')
                } else {
                    // localStorage.removeItem('status')
                }
            })
            .catch(err => console.log(err.message))

    }

    return(
        <div className="">
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            
            <Routes>

                <Route element={<PrivatRoutes isLoggedIn={isLoggedIn} />}>
                    <Route path="/" element={<Home />} />
                    <Route path='blog' element={<Blog/>} />
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path="blog/:postId" element={<SinglePost />}>
                        <Route path="" element={<SinglePost />} />
                    </Route>
                </Route>
                
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
                <Route path="registration" element={<Registration />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App;