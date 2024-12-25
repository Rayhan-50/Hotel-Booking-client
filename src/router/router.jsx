import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";

import Rooms from "../pages/Rooms/Rooms";
import Login from "../pages/Login/Login";
import MyBookings from "../pages/MyBookings/MyBookings";
import Register from "../pages/Register/Register";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound/NotFound";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<NotFound></NotFound>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            
        },
        {
            path: '/rooms',
            element: <Rooms></Rooms>,
          },
          {
            path: '/my-bookings',
            element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
            
            
          },
          {
            path: '/rooms/:id',
            element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
            loader:({params})=> fetch(`https://hotel-booking-client-2f049.web.app/rooms/${params.id}`)
            
            
          },
          {
            path: '/login',
            element: <Login></Login>,
          },
          {
            path: '/register',
            element: <Register></Register>,
          },
      ]
    },
  ]);
  export default router;