import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import SinglePost from './pages/singlePost/SinglePost';

const router = createBrowserRouter([
    {
      path: '',
      element: <Home />
    },
    {
      path: 'blog',
      element: <Blog />
    },
    {
      path: 'blog/:postId',
      element: <SinglePost />,
      children: [
        {
          path: '',
          element: <SinglePost />,
        }
      ]
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'registration',
      element: <Registration />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
