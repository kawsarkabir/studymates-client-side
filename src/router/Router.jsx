import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import AllAssingment from "../pages/AllAssingment/AllAssingment";
import CreateAssingment from "../pages/CreateAssignment/CreateAssingment";
import GiveAssingmentMarks from "../pages/GiveAssingmentMarks/GiveAssingmentMarks";
import MyAssingment from "../pages/MyAssingment/MyAssingment";
import SignUp from "../pages/SignUp/SignUp";
import SubmitedAssingment from "../pages/SubmitedAssingment/SubmitedAssingment";
import UpdateAssingment from "../pages/UpdateAssingment/UpdateAssingment";
import ViewAssingment from "../pages/ViewAssingment/ViewAssingment";
import Home from "../pages/home/Home";
import SignIn from "../pages/signIn/SignIn";
import PrivateRoute from "./PrivateRoute";

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
        loader: () =>
          fetch(
            "http://localhost:5000/assingments"
          ),
      },
      {
        path: "/assingments/:id",
        element: (
          <PrivateRoute>
            <ViewAssingment></ViewAssingment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/assingments/${params.id}`
          ),
      },
      {
        path: "/updateAssingment/:id",
        element: (
          <PrivateRoute>
            <UpdateAssingment></UpdateAssingment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/assingments/${params.id}`
          ),
      },
      {
        path: "/myAssingment",
        element: (
          <PrivateRoute>
            <MyAssingment></MyAssingment>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "http://localhost:5000/submitedAssingment/complete"
          ),
      },
      {
        path: "/submitedAssingment",
        element: (
          <PrivateRoute>
            <SubmitedAssingment></SubmitedAssingment>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "http://localhost:5000/pending/pending"
          ),
      },
      {
        path: "/submitedAssingment/:id",
        element: <GiveAssingmentMarks></GiveAssingmentMarks>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/submitedAssingments/${params.id}`
          ),
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
