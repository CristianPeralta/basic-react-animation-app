import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modaIslOpen: false,
  }

  showModal = () => {
    console.log('show click', this.state.modaIslOpen)
    this.setState({ modaIslOpen: true });
  }

  closeModal = () => {
    this.setState({ modaIslOpen: false });
  }
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal show={this.state.modaIslOpen} closed={this.closeModal} />
        <Backdrop show={this.state.modaIslOpen} />
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
