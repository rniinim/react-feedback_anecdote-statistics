import React, { Component } from "react";
import Buttons from "./content/buttons";
import Statistics from "./content/statistics";

class App extends Component {
  state = {
    timesPressed: [0, 0, 0],
    totalPressed: 0,
    pressedAnec: false,
    votes: [0, 0, 0, 0, 0, 0],
    voteIndex: -1,
    anecdotes: [
      "If it hurts, do it more often",
      "Adding manpower to a late software project makes it later!",
      "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      "Premature optimization is the root of all evil.",
      "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
    ]
  };

  Click = indexValue => {
    console.log("Click, index", indexValue);
    let timesPressed = this.state.timesPressed;
    timesPressed[indexValue] += 1;
    this.setState(timesPressed);
    let totalPressed = this.state.totalPressed;
    totalPressed += 1;
    this.setState({ totalPressed });
    console.log(totalPressed);
  };

  statsToRender = () => {
    const { totalPressed, timesPressed } = this.state;
    if (totalPressed === 0) {
      return (
        <tr>
          <td>ei yhtään palautetta annettu</td>
        </tr>
      );
    }
    return (
      <Statistics timesPressed={timesPressed} totalPressed={totalPressed} />
    );
  };

  anecClick = () => {
    this.setState({ pressedAnec: true });
    console.log("anecclick");
    var voteIndex = Math.floor(Math.random() * 6);
    this.setState({ voteIndex });
  };

  voteClick = () => {
    console.log("voteclick");
    const votes = [...this.state.votes];
    const index = this.state.voteIndex;
    votes[index]++;
    this.setState({ votes });
    return;
  };

  findMostVotes = () => {
    let mostVotesIndex = -1;
    let mostVotesValue = mostVotesIndex;
    for (let i = 0; i < 7; i++) {
      if (this.state.votes[i] > mostVotesValue) {
        mostVotesIndex = i;
        mostVotesValue = this.state.votes[i];
      }
    }
    console.log("mostvotes:", mostVotesIndex);
    return mostVotesIndex;
  };

  votes = () => {
    console.log(this.state.voteIndex, "pitäis olla eka", this.state.votes);
    if (Math.max(...this.state.votes) === 0) {
      return (
        <tr>
          <td>Not votes yet</td>
        </tr>
      );
    }
    console.log("ohi if", Math.max(...this.state.votes));
    return (
      <React.Fragment>
        <tr>
          <td>anecdote with most votes:</td>
        </tr>
        <tr>
          <td>{this.state.anecdotes[this.findMostVotes()]}</td>
        </tr>
      </React.Fragment>
    );
  };

  showAnecdotes = () => {
    console.log("showanecrender");
    if (!this.state.pressedAnec) {
      return <tr />;
    }

    console.log(this.state.voteIndex);
    return (
      <React.Fragment>
        <tr>
          <td>{this.state.anecdotes[this.state.voteIndex]}</td>
        </tr>
        <tr>
          <td>
            <button onClick={this.voteClick}>Vote</button>
          </td>
          <td>Votes: {this.state.votes[this.state.voteIndex]}</td>
        </tr>
        <this.votes />
      </React.Fragment>
    );
  };

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>anna palautetta</td>
            </tr>

            <Buttons
              hyvaClick={() => this.Click(0)}
              neutraaliClick={() => this.Click(1)}
              huonoClick={() => this.Click(2)}
              anecClick={() => this.anecClick()}
            />
            <tr>
              <td>hyvä</td>
              <td>{this.state.timesPressed[0]}</td>
            </tr>
            <tr>
              <td>neutraali</td>
              <td>{this.state.timesPressed[1]}</td>
            </tr>
            <tr>
              <td>huono</td>
              <td> {this.state.timesPressed[2]}</td>
            </tr>
            <tr>
              <td>statistiikka</td>
            </tr>
            <this.statsToRender />
            <br />
            <this.showAnecdotes />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
