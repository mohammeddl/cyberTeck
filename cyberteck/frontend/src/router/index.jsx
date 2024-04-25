import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Signup from "../pages/signup";
import NotFound from "../pages/notFound";
import Layout from "../layouts/layout";
import LayoutAdmin from "../layouts/layoutAdmin";
import Blog from "../pages/blog";
import HomeComponent from "../pages/indexHome";
import Dashoard from "../pages/dashboard";
import DashboardProduct from "../pages/dashboardProduct";
import ListReviews from "../components/ecommerce/ListReviews";
import Profile from "../pages/profile";
import DashboardBlog from "../pages/DashboardBlog";

export const home = "/home";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: home,
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
                path: "*",
                element: <NotFound />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/learn_more/:productId",
                element: <ListReviews/>,
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
                path: "/dashboard/blog",
                element: <DashboardBlog />,
            },
        ],
    },
]);
