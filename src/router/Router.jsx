import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AllAssingment from "../pages/AllAssingment/AllAssingment";
import MyAssingment from "../pages/MyAssingment/MyAssingment";
import CreateAssingment from "../pages/CreateAssignment/CreateAssingment";
import SubmitedAssingment from "../pages/SubmitedAssingment/SubmitedAssingment";
import PrivateRoute from "./PrivateRoute";
import ViewAssingment from "../pages/ViewAssingment/ViewAssingment";

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
        loader: () => fetch("http://localhost:5000/assingments"),
      },
      {
        path: "/assingments/:id",
        element: <PrivateRoute><ViewAssingment></ViewAssingment></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/assingments/${params.id}`),
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
        element: (
          <PrivateRoute>
            <CreateAssingment></CreateAssingment>
          </PrivateRoute>
        ),
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
