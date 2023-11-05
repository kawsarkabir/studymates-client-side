import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AllAssingment from "../pages/AllAssingment/AllAssingment";
import MyAssingment from "../pages/MyAssingment/MyAssingment";
import CreateAssingment from "../pages/CreateAssignment/CreateAssingment";
import SubmitedAssingment from "../pages/SubmitedAssingment/SubmitedAssingment";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allAssingment",
        element: <AllAssingment></AllAssingment>,
        loader: ()=> fetch('http://localhost:5000/assingments')
      },
      {
        path: "/myAssingment",
        element: <MyAssingment></MyAssingment>,
      },
      {
        path: "/submitedAssingment",
        element: <SubmitedAssingment></SubmitedAssingment>,
      },
      {
        path: "/createAssingment",
        element: <CreateAssingment></CreateAssingment>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default Router;
