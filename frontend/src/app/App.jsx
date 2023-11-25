import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../page/home/Home";
import Booking from "../page/booking/Booking";
import Payment from "../page/payment/Payment";
import PageLayout from "./layouts/Pagelayout";
import Track from "../page/track/Track";

const PageRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "booking-cargo",
        element: <Booking />,
      },
      {
        path: "booking-payment",
        element: <Payment />,
      },
      {
        path: "track",
        element: <Track />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={PageRoutes} />;
}
