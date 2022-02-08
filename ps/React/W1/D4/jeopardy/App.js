class App extends React.Component {
  state = {
    question: [],
  };

  handleGetQuestion = async () => {
    const res = await fetch("http://jservice.io/api/random");
    const data = await res.json();
    // console.log(data);
    this.setState({ question: [data[0]] });
    console.log(this.state.question);
  };

  render() {
    return (
      <div>
        <h1>Welcome To React Jeopardy!</h1>

        <Score question={this.state.question} />
        <hr />
        <button onClick={this.handleGetQuestion}>Get Question</button>

        <Question question={this.state.question} />
      </div>
    );
  }
}

class Question extends React.Component {
  state = {
    showAnswer: false,
  };

  handleShowAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer });
  };
  render() {
    return (
      <div>
        {this.props.question.length
          ? this.props.question.map((q) => (
              <div>
                <h3>Question: {q.question}</h3>
                <h3>Category: {q.category.title}</h3>
                <h3>Points: {q.value}</h3>
                <div>
                  <button onClick={this.handleShowAnswer}>Show Answer</button>
                  {this.state.showAnswer ? <h3>Answer: {q.answer}</h3> : ""}
                </div>
              </div>
            ))
          : ""}
      </div>
    );
  }
}

class Score extends React.Component {
  state = {
    score: 0,
  };

  handleIncreaseScore = () => {
    this.setState({ score: this.state.score + this.props.question[0].value });
  };
  handleDecreaseScore = () => {
    this.setState({ score: this.state.score - this.props.question[0].value });
  };
  handleResetScore = () => {
    this.setState({ score: 0 });
  };
  render() {
    return (
      <div>
        <h1>Score: {this.state.score}</h1>
        <button onClick={this.handleDecreaseScore}>Decrease</button>
        <button onClick={this.handleIncreaseScore}>Increase</button>
        <button onClick={this.handleResetScore}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
