import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export const App = () => {
  return (
    <div className="app">
      <Header />
      {/* {this outlet will be replaed by the children component in App depending on the path} */}
      <Outlet />
      {/* <Body /> */}
    </div>
  );
};
