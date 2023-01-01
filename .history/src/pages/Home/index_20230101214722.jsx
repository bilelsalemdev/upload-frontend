import React, { useState } from "react";
import Search from "../../components/Search";
import SideBar from "../../components/SideBar";

export default function Home() {
  const [active, setActive] = useState(false);
  return (
    <main className="home-container">
      <section className="home-container--header-wrapper">
        <div
          className="home-container--header-wrapper__logo"
          onClick={() => setActive((prevState) => !prevState)}
        >
          <img src="images/home-logo.png" alt="home-logo" className=`${active ? 'rotate' : ''}` />
        </div>
        <Search />
        <div className="home-container--header-wrapper__extra-features">
          <div className="home-container--header-wrapper__extra-features--settings">
            <ion-icon name="settings-outline"></ion-icon>
          </div>
          <div className="home-container--header-wrapper__extra-features--notifications">
            <ion-icon name="notifications-outline"></ion-icon>
            &nbsp;
            <span>18</span>
          </div>
          <div className="home-container--header-wrapper__extra-features--profile">
            <p>achref</p>
            <div className="home-container--header-wrapper__extra-features--profile__avatar">
              <img src="images/img_avatar.png" alt="img_avatar" />
            </div>
          </div>
        </div>
      </section>
      {active && <SideBar />}
    </main>
  );
}
