import React, { useState } from "react";

export default function Slice({ name, icon }) {
  return (
    <div className="slice-container">
      {icon}&nbsp;<span>{name}</span>
    </div>
  );
}
