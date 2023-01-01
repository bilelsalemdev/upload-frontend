import React, { useState } from "react";

export default function Slice({ name, icon }) {
  const [active, setActive] = useState(false);
  return (
    <div className="slice-container" onClick={() => setActive(true)}>
      {icon}&nbsp;<span>{name}</span>
    </div>
  );
}
