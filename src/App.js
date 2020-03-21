import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modaIslOpen: false,
    showBlock: false,
  }

  showModal = () => {
    this.setState({ modaIslOpen: true });
  }

  closeModal = () => {
    this.setState({ modaIslOpen: false });
  }
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={() => this.setState(prevstate => ({showBlock: !prevstate.showBlock}))} >Toggle</button>
        {this.state.showBlock ? <div
          style={{
            background: 'red',
            width: 100,
            height: 100,
            margin: 'auto'
          }} ></div> : null}
        <br/>
        {this.state.modaIslOpen ? <Modal show={this.state.modaIslOpen} closed={this.closeModal} /> : null }
        {this.state.modaIslOpen ? <Backdrop show={this.state.modaIslOpen} /> : null }
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
