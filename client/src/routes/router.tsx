import { createBrowserRouter } from "react-router-dom";
import { Home, Layout, Login, Register } from "../screens";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const FORGOTPASSWORD = "/forgot-password";

export const PROTECTED = "/protected";
export const HOME = "/protected/home";
export const PROFILE = "/protected/profile/:id?";

export const router = createBrowserRouter([
  { path: ROOT, element: <Login /> },
  { path: LOGIN, element: <Login /> },
  { path: REGISTER, element: <Register /> },
  {
    path: PROTECTED,
    element: <Layout />,
    children: [
      {
        path: HOME,
        element: <Home />,
      },
    ],
  },
]);
