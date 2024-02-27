import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./components/Login";
import Register from "./components/Register";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
