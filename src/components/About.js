import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="user-card">
      <h1>About</h1>
      <h2>this is foodapp </h2>
      <User name={"functional component"} />
      <UserClass name={"classBased component"} location={"kota"} />
    </div>
  );
};

export default About;
