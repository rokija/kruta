import React, { Component } from "react";
import "./index.css";

export default class LightBox extends Component {
  render() {
    return (
      <div
        onClick={this.props.onClickOutside}
        className="modal show"
        role="dialog"
        id="light-box"
      >
        {this.props.children}
      </div>
    );
  }
}
