import React, { Component } from "react";
import CounterHoc from "./CounterHoc";

class WithCounter extends Component {

  render() {

    return (
      <div>
        <button onClick={this.props.increment}>+</button>
        <div>count {this.props.count}</div>
      </div>
    );
  }
}

export default CounterHoc(WithCounter);
