import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <Error /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <RouterProvider router={appRouter} />
);
