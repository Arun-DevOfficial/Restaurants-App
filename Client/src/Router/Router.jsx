import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
// import Login from "../pages/Login";
// import Signup from "../pages/Signup";
// import ListeUser from "../pages/ListeUser";
// import Menu from "../pages/Menu";
// import ProtectedRoutes from "../utils/ProtectedRoutes";
import Profiles from "../Components/Profiles";
import ProfileSection from "../Components/ProfileSection";

const router = createBrowserRouter([
  {
    path: "/student-dashboard",
    element: <Profiles />,
    errorElement: <NotFound />,
    children: [
      {
        path: "interview/:id",
        element: <ProfileSection />,
      },
    ],
  },
  // {
  //   path: "/profile",
  //   element: <Signup />,
  // },
  // {
  //   path: "/profile/Login",
  //   element: <Login />,
  // },
  // {
  //   element: <ProtectedRoutes />,
  //   children: [
  //     {
  //       path: "/viewuser",
  //       element: <ListeUser />,
  //     },
  //     {
  //       path: "/menu",
  //       element: <Menu />,
  //     },
  //   ],
  // },
  // {
  //   path: "/dashoboard",
  //   element: <Home />,
  // },
]);

export default router;
