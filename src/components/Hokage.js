import React from "react";
import "../components/Hokage.css";

function Hokage(props) {
  return (
    <div className="card grow bw2 shadow-5">
      <img src={props.img} alt={props.name} width="150px" height="380px"></img>
      <h3 className="tc">{props.name}</h3>
      <p className="tc">{props.title}</p>
    </div>
  );
}
export default Hokage;
