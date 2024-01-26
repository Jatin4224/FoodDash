import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // console.log("con");
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    // console.log("child componet did mount ");
    const data = await fetch("https://api.github.com/users/Jatin4224");
    const json = await data.json();
    console.log(json);
  }

  render() {
    // console.log("render");
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
        <h3>Location : {location}</h3>
        <h3>contact : @jatin4224</h3>
      </div>
    );
  }
}

export default UserClass;
