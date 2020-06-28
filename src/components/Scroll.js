import React from "react";
import "../components/Scroll.css";

const Scroll = (props) => {
  return (
    <div
      style={{ overflowY: "scroll", boder: "1px solid black", height: "500px" }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
