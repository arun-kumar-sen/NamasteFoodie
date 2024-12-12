import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //this children will replace the <Outlet/> based on different paths
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={"loading..."}>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <RouterProvider router={appRouter} />
);
