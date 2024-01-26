import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // console.log("con");
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    // console.log("child componet did mount ");
    const data = await fetch("https://api.github.com/users/Jatin4224");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    // console.log("render");
    const { name, location, avatar_url, bio, twitter_username, email } =
      this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>{bio}</h2>
        <h2>Name: {name}</h2>
        <h3>Location : {location}</h3>
        <h3>Twitter : @{twitter_username}</h3>
        <h3>email : jaikumarsharma94130@gmail.com </h3>
      </div>
    );
  }
}

export default UserClass;

/*****
 *
 *Mounting lifecycle:
 *Constructor (dummy)

 *Render(dummy)
 *<Html Dummy>
 * component DidMount
 * <Api call>
 * <this.setState>
 * 
 * 
 * ---updatecycle begins 
 * 
 * render(API data)
 * <html (new APi data)
 * componentDid Update
 * 
 */
