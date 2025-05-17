import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Components/Home/Home";
import Apply from "../Components/Apply/Apply";
import About from "../Components/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:"/apply",
            Component:Apply
        },
        {
            path:"/about",
            Component:About
        },


    ]
  },
]);