import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root";
import Home from "../../pages/Home/Home";
import Error from "../../pages/Error/Error";
import Mobiles from "../../pages/Mobiles/Mobiles";

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
    ],
  },
]);

export default router;
