import React from "react";
import Search from "../../components/Search";

export default function Home() {
  return (
    <main className="home-container">
      <div className="home-container__logo">
        <img src="images/home-logo.png" alt="home-logo" />
      </div>
      <Search />
      <div className="home-container__extra-features">
        <div className="home-container__extra-features--settings">
          <ion-icon name="settings-outline"></ion-icon>
        </div>
        home-container__extra-features
      </div>
    </main>
  );
}
