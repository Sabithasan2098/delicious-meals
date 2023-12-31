import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Social/Login/Login";
import Register from "../pages/Social/Register/Register";
import Category from "../pages/MenuCategory/Category";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/category",
        element: <Category></Category>,
      },
    ],
  },
]);
