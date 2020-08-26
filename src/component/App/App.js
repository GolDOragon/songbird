import successSound from "../../assets/sound/success.wav";
import failureSound from "../../assets/sound/failure.wav";
import React from "react";
import "./App.css";
import Answers from "../Answers/Answers";
import BirdCard from "../BirdCard/BirdCard";
import Button from "../Button/Button";
import Header from "../Header/Header";
import Question from "../Question/Question";
import Result from "../Result/Result";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.startNewRound = this.startNewRound.bind(this);
    this.selectBird = this.selectBird.bind(this);
    this.handleSelectBird = this.handleSelectBird.bind(this);
    this.handleRepeatBird = this.handleRepeatBird.bind(this);
    this.handleNextLevel = this.handleNextLevel.bind(this);

    const categories = this.props.birdData.map(
      (birdGroup) => birdGroup.category
    );

    this.state = {
      score: 0,
      currentGroup: 0,
      envisionedBird: this.getRandomBird(this.props.birdData[0]),
      selectedBird: null,
      birdGroup: this.props.birdData[0], // category, birds
      activeCategory: categories[0],
      categories,
      showDefaultCard: true,
      isGoToNextLevel: false,
      // isEndgame: false,
      isEndgame: true,
    };

    this.audio = React.createRef();
  }

  getRandomBird(birdGroup) {
    const { birds } = birdGroup;
    const index = Math.floor(Math.random() * birds.length);

    console.log("Chosen bird: ", birds[index].name);

    return birds[index];
  }

  startNewRound(birdGroupIndex) {
    this.setState({
      birdGroup: this.props.birdData[birdGroupIndex],
      activeCategory: this.state.categories[birdGroupIndex],
      envisionedBird: this.getRandomBird(this.props.birdData[birdGroupIndex]),
      selectedBird: null,
      showDefaultCard: true,
      isGoToNextLevel: false,
    });
  }

  selectBird(birdID) {
    const selectedBird = this.state.birdGroup.birds.find(
      (bird) => bird.id === birdID
    );

    this.setState({
      selectedBird,
    });
  }

  handleNextLevel() {
    const { state } = this;
    const newGroup = state.currentGroup + 1;

    if (newGroup < state.categories.length) {
      console.log("Next round");
      this.startNewRound(newGroup);
      this.setState({
        currentGroup: newGroup,
      });
    } else {
      this.setState({ isEndgame: true });
      console.log("End game");
    }
  }

  handleSelectBird(report) {
    this.selectBird(report.id);

    if (report.status === "success") {
      this.audio.current.src = successSound;
      this.audio.current.play();
      this.setState({
        showDefaultCard: false,
        score: this.state.score + report.score,
        isGoToNextLevel: true,
      });
    }
    if (report.status === "failure") {
      this.audio.current.src = failureSound;
      this.audio.current.play();
    }
  }

  handleRepeatBird(report) {
    this.selectBird(report.id);
  }

  render() {
    return (
      <div className="App">
        <Header
          score={this.state.score}
          categories={this.state.categories}
          activeCategory={this.state.activeCategory}
        />
        {!this.state.isEndgame && (
          <>
            <Question
              birdInfo={this.state.envisionedBird}
              isDefault={this.state.showDefaultCard}
            />
            <div className="row" style={{ paddingTop: "1rem" }}>
              <div className="col-md-6">
                <Answers
                  key={this.state.currentGroup}
                  rightAnswer={this.state.envisionedBird.id}
                  birds={this.state.birdGroup.birds}
                  onSelectBird={this.handleSelectBird}
                  onRepeatBird={this.handleRepeatBird}
                />
              </div>
              <div className="col-md-6">
                <BirdCard birdInfo={this.state.selectedBird} />
              </div>
            </div>
            <div style={{ padding: "1rem 0" }}>
              <Button
                isActive={this.state.isGoToNextLevel}
                onNextLevel={this.handleNextLevel}
              />
            </div>
          </>
        )}
        {this.state.isEndgame && <Result />}
        <div style={{ display: "none" }}>
          <audio ref={this.audio}></audio>
        </div>
      </div>
    );
  }
}

export default App;
