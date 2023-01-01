import React from "react";
import Slice from "./Slice";

export default function SideBar() {
  return (
    <aside className="aside-container">
      <button className="aside-container__btn">
        <ion-icon name="cloud-upload-outline"></ion-icon>
        <span>Upload</span>
      </button>
      <section className="aside-container__slices">
        <Slice name="Home" icon={<ion-icon name="home-outline"></ion-icon>} />
        <Slice name="" />
        <Slice />
        <Slice />
      </section>
    </aside>
  );
}
