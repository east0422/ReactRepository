import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      opacity: 1.0
    };
  }
 
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
 
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
 
  tick() {
    var opacity = this.state.opacity;
    opacity -= 0.05;
    if (opacity < 0.1) {
      opacity = 1.0;
    }
    this.setState({
      date: new Date(),
      opacity: opacity 
    });
  }
 
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2 style={{opacity: this.state.opacity}}>现在是 {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;