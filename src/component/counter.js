import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      maxCount: props.maxCount || 10, // Default maximum count is 10
    };
  }

  incrementCount = () => {
    if (this.state.count < this.state.maxCount) {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };

  setMaxCount = (event) => {
    const maxCount = parseInt(event.target.value, 10);
    this.setState({ maxCount });
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>Count: {this.state.count}</p>
        <p>Max Count: {this.state.maxCount}</p>
        <button onClick={this.incrementCount} disabled={this.state.count >= this.state.maxCount}>
          Increment
        </button>
        <button onClick={this.resetCount}>Reset</button>
        <input
          type="number"
          value={this.state.maxCount}
          onChange={this.setMaxCount}
          placeholder="Set Max Count"
        />
      </div>
    );
  }
}

export default Counter;
