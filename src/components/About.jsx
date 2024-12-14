import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent componentDidMount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        {/* This is how we consume context in class based component */}
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
        <UserClass name={"First"} location={"Bangalore"} />
      </div>
    );
  }
}

export default About;
