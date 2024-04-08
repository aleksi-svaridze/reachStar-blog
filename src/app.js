import { Routes, Route } from "react-router-dom"
import { useState } from "react";
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import SinglePost from './pages/singlePost/SinglePost';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
    const [isDark, setIsDark] = useState(false);
    const toggleColorMode = () => {
        setIsDark(!isDark);
    }
    return(
        <div className={`${isDark ? 'dark' : ''}`}>
            <Header isDark={isDark} toggleColorMode={toggleColorMode} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='blog' element={<Blog/>} />
                <Route path="blog/:postId" element={<SinglePost />}>
                    <Route path="" element={<SinglePost />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="registration" element={<Registration />} />
                <Route path="*" element={<div>Not found</div>} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;