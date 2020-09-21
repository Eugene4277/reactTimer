import React, { Component } from "react";
import { Alert } from "antd";

class Timer extends Component {
  state = {
    timerStart: false,
    startValue: "",
    pauseValue: "",
    modalVisible: false,
  };

  timer = (start, operation) => {
    this.setState({ timerStart: start });
    const { time, setTime } = this.props;

    let minutes, seconds;

    if (this.state.pauseValue === "") {
      this.setState({ startValue: time });
      minutes = parseInt(time.split(":")[0]);
      seconds = parseInt(time.split(":")[1]);
    } else {
      minutes = parseInt(this.state.pauseValue.split(":")[0]);
      seconds = parseInt(this.state.pauseValue.split(":")[1]);
    }

    let totalSeconds = minutes * 60 + seconds;

    if (start) {
      this.timerT = setInterval(() => {
        if (totalSeconds === -1) {
          console.log(this.timerT);
          clearInterval(this.timerT);
          this.setState({ modalVisible: true });
        } else {
          const currentMinute = Math.trunc(totalSeconds / 60);
          const currentSecond = totalSeconds % 60;
          const timerStr = `${
            currentMinute > 9 ? currentMinute : "0" + currentMinute
          }:${currentSecond > 9 ? currentSecond : "0" + currentSecond}`;
          setTime(timerStr);
          this.setState({ pauseValue: timerStr });
        }
        totalSeconds--;
      }, 1000);
    } else {
      if (operation === "stop") {
        clearInterval(this.timerT);
        this.setState({ pauseValue: "" });
        setTime(this.state.startValue);
      } else if (operation === "pause") {
        clearInterval(this.timerT);
      }
    }
  };

  handleCloseModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    return (
      <>
        <div className="icons">
          <i
            onClick={() => this.timer(false, "stop")}
            className="fas fa-stop-circle theme-primary header-button"
          ></i>
          {this.state.timerStart ? (
            <i
              onClick={() => this.timer(false, "pause")}
              className="fas fa-pause-circle theme-primary header-button"
            ></i>
          ) : (
            <i
              onClick={() => this.timer(true, "start")}
              className="fas fa-play-circle theme-primary header-button"
            ></i>
          )}
        </div>
        <div>
          {this.state.modalVisible ? (
            <Alert
              showIcon
              message="Time is out!"
              type="success"
              closable
              afterClose={this.handleCloseModal}
            />
          ) : null}
        </div>
      </>
    );
  }
}

export default Timer;
