import React from "react";

export default function Slice({ name, icon }) {
  return (
    <div className="slice-container">
      {icon}&nbsp;{name}
    </div>
  );
}
