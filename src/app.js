import { Routes, Route } from "react-router-dom"
import { useState } from "react";
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import SinglePost from './pages/singlePost/SinglePost';
import { Header} from "./components/header/Header";
import NotFound from "./pages/notFound/NotFound";

const App = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    return(
        <div className="">
            <Header isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='blog' element={<Blog/>} />
                <Route path="blog/:postId" element={<SinglePost />}>
                    <Route path="" element={<SinglePost />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="registration" element={<Registration />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App;