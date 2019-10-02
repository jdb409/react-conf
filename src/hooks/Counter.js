import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {

    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
        <div>count: {this.state.count}</div>
      </div>
    );
  }
}

export default Counter;
