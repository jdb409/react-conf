import React, { Component } from "react";

export default function CounterHoc(CounterComponent) {
  return class Counter extends Component {
    state = {
      count: 0
    };

    increment = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      return (
        <CounterComponent count={this.state.count} increment={this.increment} />
      );
    }
  };
}
