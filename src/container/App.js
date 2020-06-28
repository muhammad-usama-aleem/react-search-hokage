import React, { Component } from "react";
import "./App.css";
import Searchbar from "../components/Searchbar";
import All from "../components/All";
import Scroll from "../components/Scroll";
import { data } from "../Data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
      searchfield: "",
    };
  }
  onsearch = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filtered = this.state.data.filter((kage) => {
      return kage.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="app">
        <h1
          className="pa2"
          style={{
            color: "#ccd2de",
            fontSize: "2.5em",
            marginBottom: "10px",
            paddingBottom: "0px",
          }}
        >
          HOKAGE
        </h1>
        <Searchbar Search={this.onsearch} />
        <p style={{ color: "white" }}>Created by: Muhammad Usama Aleem</p>
        <Scroll>
          <All Data={filtered} />

          <h1 className="f1" style={{ opacity: "0" }}>
            ExtraSpace
          </h1>
        </Scroll>
        <h1 className="f1" style={{ opacity: "0" }}>
          ExtraSpace
        </h1>
        <h1 className="f1">All rights reserved</h1>
      </div>
    );
  }
}

export default App;
