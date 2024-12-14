const { createContext } = require("react");

const UserContext = createContext({
  loggedInUser: "Dummy User",
});

export default UserContext;
