import React from "react";
import "../components/Searchbar.css";

const Searchbar = ({ Search }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba proper"
        type="search"
        placeholder="Search for Hokage"
        onChange={Search}
      />
    </div>
  );
};

export default Searchbar;
