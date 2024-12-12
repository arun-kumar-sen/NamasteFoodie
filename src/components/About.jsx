import React from "react";
import UserClass from "./UserClass";

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
        <UserClass name={"First"} location={"Bangalore"} />
      </div>
    );
  }
}

export default About;
