import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ListeUser from "../pages/ListeUser";
import Menu from "../pages/Menu";

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
  {
    path: "/Menu",
    element: <Menu />,
  },
]);

export default router;
