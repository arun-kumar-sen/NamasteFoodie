import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import UserContext from "./utils/UserContext";
import { useEffect, useState } from "react";

export const App = () => {
  const [userName, setUserName] = useState(null);

  // Assume some authentication code here
  useEffect(() => {
    // Make API call and send username and pass and get data
    const data = {
      name: "Arun context provider ",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        {/* <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}> */}
        <Header />
        {/* </UserContext.Provider> */}

        {/* {this outlet will be replaed by the children component in App depending on the path} */}
        <Outlet />
        {/* <Body /> */}
      </div>
    </UserContext.Provider>
  );
};
