import React, { Component } from 'react';

class TimeCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {
    this.setState((prevState) => {
      const seconds = prevState.seconds + 1;
      let minutes = prevState.minutes;
      let hours = prevState.hours;

      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      if (minutes === 60) {
        hours++;
        minutes = 0;
      }

      return {
        seconds,
        minutes,
        hours,
      };
    });
  };

  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <div>
        <h1>Time Counter</h1>
        <p>
          {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </p>
      </div>
    );
  }
}

export default TimeCounter;