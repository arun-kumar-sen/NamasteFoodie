import { createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
