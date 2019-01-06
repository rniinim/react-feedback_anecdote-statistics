import React, { Component } from "react";
import Statistic from "./statistic";

class Statistics extends Component {
  state = {};

  render() {
    const { timesPressed, totalPressed } = this.props;

    const keskiarvo = () => {
      let keskiarvo = timesPressed[0] * 1 + timesPressed[2] * -1;
      keskiarvo = keskiarvo / totalPressed;
      return keskiarvo;
    };

    const positiivisia = () => {
      return (timesPressed[0] / totalPressed) * 100;
    };

    return (
      <React.Fragment>
        <Statistic text="keskiarvo" number={keskiarvo()} />
        <Statistic text="positiivisia" number={positiivisia() + "%"} />
      </React.Fragment>
    );
  }
}

export default Statistics;
