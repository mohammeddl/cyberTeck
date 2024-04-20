import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Users from "../pages/users";
import NotFound from "../pages/notFound";
import Layout from "../layouts/layout";
import LayoutAdmin from "../layouts/layoutAdmin";
import Blog from "../pages/blog";
import Community from "../pages/community";
import HomeComponent from "../pages/indexHome";
import Dashoard from "../pages/dashboard";
import DashboardProduct from "../pages/dashboardProduct";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/",
                element: <HomeComponent />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/community",
                element: <Community />,
            },
        ],
    },
    
    {
        element: <LayoutAdmin />,
        children: [
            {
                path: "/dashboard",
                element: <Dashoard />,
            },
            {
                path: "/products",
                element: <DashboardProduct/>,
            },
            {
                path: "/blogs",
                element: "",
            },
        ],
    },
]);
