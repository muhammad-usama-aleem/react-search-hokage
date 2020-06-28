import React from "react";
import Hokage from "../components/Hokage";

function All({ Data }) {
  const hokage_data = Data.map((user, i) => {
    return (
      <Hokage img={Data[i].img} name={Data[i].name} title={Data[i].title} />
    );
  });
  return <div>{hokage_data}</div>;
}

export default All;
