import React from "react";

//Rendering order
// Constructor > Render > componentDidMount

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props.name, "Child Constructor");
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default location",
        avatar_url: "http://dummypic",
      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name, "Child componentDidMount");
    const data = await fetch("https://api.github.com/users/arun-kumar-sen");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component did update ");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount ");
  }

  render() {
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(name, "Child Render");
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <img src={avatar_url} alt="" srcset="" />
        <h3>Location : {location}</h3>
        <h4>Contact : @arun-kumar-sen</h4>
      </div>
    );
  }
}

export default UserClass;

// How react works in steps is what i have written below
// MOUNTING LIFECYCLE
// constructor (dummy)
// Render (dummy data)
// <HTML renders with dummy data>
// componentDidMount (API call is made )
// this.setState (state is updated so render in update cycle starts)

// UPDATE CYCLE
// Render(API data)
// <HTML renders with new API data>
// componentDidUpdate
