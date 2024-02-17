import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Jatin4224");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url, bio, twitter_username, email } =
      this.state.userInfo;
    return (
      <div className="user-card bg-white p-6 rounded-lg ">
        <img
          src={avatar_url}
          className=" rounded-md mx-auto mb-4"
          alt="User Avatar"
        />
        <h2 className="text-xl font-bold mb-2">{bio}</h2>
        <h2 className="text-lg font-semibold mb-2">Name: {name}</h2>
        <h3 className="text-gray-600 mb-2">Location: {location}</h3>
        <h3 className="text-gray-600 mb-2">Twitter: @{twitter_username}</h3>
        <h3 className="text-gray-600 mb-2">
          Email: jaikumarsharma94130@gmail.com {email}
        </h3>
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
