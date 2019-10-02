import React from "react";

class Counter extends React.Component {
  state = {
    width: window.innerWidth
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    return <div>The width of the screen is {this.state.width}</div>;
  }
}

export default Counter;
