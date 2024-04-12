import{createBrowserRouter} from "react-router-dom"
import Home from "../pages/home"
import Login from "../pages/login"
import Signup from "../pages/signup"
import Users from "../pages/users"
import NotFound from "../pages/notFound"
import Layout from "../layouts/layout"
import Blog from "../pages/blog"
import Community from "../pages/community"

export const router= createBrowserRouter([

    {
element:<Layout />,
children:[
    {
        path: '/',
        element: <Home />
    },
        {
        path: '/login',
        element: <Login />
    },
        {
        path: '/signup',
        element: <Signup />
    },
        {
        path: '/users',
        element: <Users />
    },
        {
        path: '*',
        element: <NotFound />
    },
        {
        path: '/blog',
        element: <Blog />
    },
        {
        path: '/community',
        element: <Community />
    },
]
    },

])
