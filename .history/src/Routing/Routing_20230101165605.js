import { Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default Routing;
