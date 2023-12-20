import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root";
import Home from "../../pages/Home/Home";
import Error from "../../pages/Error/Error";
import Mobiles from "../../pages/Mobiles/Mobiles";
import SignUp from "../../pages/SignUp/SignUp";
import SignIn from "../../pages/SignIn/SignIn";
import Mobile from "../../pages/Mobile/Mobile";
import Cart from "../../pages/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/mobiles",
        element: <Mobiles />,
      },
      {
        path: "/mobile/:id",
        element: <Mobile />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/mobiles/${params.id}`),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
