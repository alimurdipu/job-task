import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Home/Home";
import Todo from "../Pages/Todo/Todo";
// import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/todo",
      element: <Todo></Todo>,
    },
    // {
    //   path: "/login",
    //   element: <Login></Login>
    // }
  ]);