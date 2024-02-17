import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <div className="user-card">
          <UserClass name={"classBased component"} location={"kota"} />
        </div>
      </div>
    </div>
  );
};

export default About;
