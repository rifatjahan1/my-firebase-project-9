import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Components/Home/Home";

import About from "../Components/About/About";
import Login from "../Components/Login";
import Register from "../Components/Register";

import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import Profile from "../pages/Profile/Profile";
import Apply from "../Components/Apply/Apply";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import CompanyDetails from "../pages/CompanyDetails/CompanyDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
                hydrateFallbackElement: <p>Loading, please wait.......</p>,
                loader: () => fetch('../data.json').then(res => res.json()),
            },
            {
                path: "/apply",
                element: <PrivateRoute><Apply></Apply></PrivateRoute>
            },
            {
                path: "/about",
                Component: About
            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/register",
                Component: Register
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: "/forgot-password",
                Component: ForgotPassword
            },
      {
        path: '/companydetails/:id',
        Component: CompanyDetails,
        hydrateFallbackElement: <p>Loading, please wait.......</p>,
        loader: () => fetch('../data.json').then(res => res.json()),

      },


        ]
    },
]);