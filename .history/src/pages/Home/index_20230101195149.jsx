import React from "react";
import Search from "../../components/Search";

export default function Home() {
  return (
    <main className="home-container">
      <div className="home-container__logo">
        <img src="images/home-logo.png" alt="home-logo" />
      </div>
      <Search />
    </main>
  );
}
