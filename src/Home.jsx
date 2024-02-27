import Login from "./components/Login";
import Register from "./components/Register";
import "./index.css";

const Home = () => {
  return (
    <div className="container h-screen p-4">
      <Login />
      <Register />
    </div>
  );
};

export default Home;
