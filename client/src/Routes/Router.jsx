import { createBrowserRouter } from "react-router-dom";
import MainPage from "../layouts/MainPage";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>,
      children: [
        {
            path:'/',
            element:<Home/>
        }
      ]
    },
  ]);