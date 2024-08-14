import { createBrowserRouter } from "react-router-dom";
import { SignIn, SignUp, Home, ForgotPassword, Layout } from "../pages";
export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const FORGOTPASSWORD = "/forgot-password";

export const PROTECTED = "/protected";
export const HOME = "/protected/home";
export const PROFILE = "/protected/profile/:id?";

export const router = createBrowserRouter([
  { path: ROOT, element: <SignIn /> },
  { path: LOGIN, element: <SignIn /> },
  { path: REGISTER, element: <SignUp /> },
  { path: FORGOTPASSWORD, element: <ForgotPassword /> },
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
