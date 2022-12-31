import React from "react";
import AllFiles from "./pages/AllFiles";
import Archived from "./pages/Archived";
import Home from "./pages/Home";
import Starred from "./pages/Starred";

export default function App() {
  return (
    <main>
      <AllFiles />
      <Archived />
      <Home />
      <Starred />
    </main>
  );
}
