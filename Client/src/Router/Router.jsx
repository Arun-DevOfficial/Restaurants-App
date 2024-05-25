import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ListeUser from "../pages/ListeUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/profile",
    element: <Signup />,
  },
  {
    path: "/profile/Login",
    element: <Login />,
  },
  {
    path: "/Login",
    element: <ListeUser />,
  },
]);

export default router;
