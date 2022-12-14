import { createBrowserRouter } from "react-router-dom";
import Booking from "../../Component/Booking/Booking";
import MyBooking from "../../Component/MyBooking/MyBooking";
import MyProfile from "../../Component/MyProfile/MyProfile/MyProfile";
import UpDateProfile from "../../Component/MyProfile/UpDateProfile/UpDateProfile";
import MyWishlist from "../../Component/MyWishlist/MyWishlist";
import DashBoardLayOut from "../../Layout/DashboardLayOut/DashBoardLayOut";
import Main from "../../Layout/Main/Main";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Blog from "../../Pages/Blog/Blog";
import Destination from "../../Pages/Destination/Destination";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import LogIn from "../../Shared/LogIn/LogIn";
import SignUp from "../../Shared/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/destination/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/places/${params.id}`);
        },
        element: <Destination></Destination>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/booking/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/singlePackages/${params.id}`);
        },
        element: (
          <PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>
        ),
      },
      {
        path: "/myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/upDateProfile",
        element: <UpDateProfile></UpDateProfile>,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage></ErrorPage>,
    element: <DashBoardLayOut></DashBoardLayOut>,
    children: [
      {
        path: "/dashboard",
        element: <MyBooking></MyBooking>,
      },
      {
        path: "/dashboard/wishlist",
        element: <MyWishlist></MyWishlist>,
      },
    ],
  },
]);
