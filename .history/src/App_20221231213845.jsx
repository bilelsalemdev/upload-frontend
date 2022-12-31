import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import AllFiles from "./pages/AllFiles";
import Archived from "./pages/Archived";
import Home from "./pages/Home";
import Starred from "./pages/Starred";

export default function App() {
 const 
  if (!authenticated) {
    return <Navigate replace to="/signup" />;
  }
  return (
    <main>
      <AllFiles />
      <Archived />
      <Home />
      <Starred />
    </main>
  );
}
