import { Routes, Route } from "react-router-dom"
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import SinglePost from './pages/singlePost/SinglePost';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
    return(
        <div>
            <Header />
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