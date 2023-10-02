import { createBrowserRouter } from "react-router-dom";
import MainLayer from "../Layout/MainLayer";
import Home from "../Components/Home/Home";
import MulitiForms from "../Components/MulitiForms/MulitiForms";
import About from "../Components/About/About";
import Cart from "../Components/Cart/Cart";
import TopRated from "../Components/TopRated/TopRated";

const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayer />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/form",
          element: <MulitiForms />,
        },
        {
          path: "/top-rated",
          element: <TopRated />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
  export default routers;