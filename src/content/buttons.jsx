import React, { Component } from "react";
import Button from "./button";

class Buttons extends Component {
  state = {
    text: ["hyvä", "neutraali", "huono", "anecdote"]
  };

  constructor(props) {
    super(props);
    console.log("App - Constructor");
    // this.state = this.props;
  }
  render() {
    return (
      <tr>
        <td>
          <Button
            text={this.state.text[0]}
            buttonClicked={this.props.hyvaClick}
          />
          <Button
            text={this.state.text[1]}
            buttonClicked={this.props.neutraaliClick}
          />
          <Button
            text={this.state.text[2]}
            buttonClicked={this.props.huonoClick}
          />
          <Button
            text={this.state.text[3]}
            buttonClicked={this.props.anecClick}
          />
        </td>
      </tr>
    );
  }
}

export default Buttons;
