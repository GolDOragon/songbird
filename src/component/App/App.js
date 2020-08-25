import React from "react";
import "./App.css";
import Answers from "../Answers/Answers";
import BirdCard from "../BirdCard/BirdCard";
import Button from "../Button/Button";
import Header from "../Header/Header";
import Question from "../Question/Question";

class App extends React.Component {
  constructor(props) {
    super(props);

    const categories = this.getCategories(this.props.birdData);

    this.state = {
      score: 0,
      birdGroup: this.props.birdData[0],
      categories,
      activeCategory: categories[0],
      envisionedBird: {},
      showDefaultCard: true,
    };
  }

  getCategories(birdData) {
    return birdData.map((birdGroup) => birdGroup.category);
  }

  getRandomBird(birdGroup) {
    const { birds } = birdGroup;
    const index = Math.round(Math.random() * birds.length);
    return birds[index];
  }

  render() {
    return (
      <div className="App">
        <Header
          score={this.state.score}
          categories={this.state.categories}
          activeCategory={this.state.activeCategory}
        />
        <Question
          birdInfo={this.props.birdData[0].birds[0]}
          isDefault={this.state.showDefaultCard}
        />
        <div className="row" style={{ paddingTop: "1rem" }}>
          <div className="col-md-6">
            <Answers
              rightAnswer={this.state.envisionedBird}
              birds={this.state.birdGroup.birds}
              onSelectBird={() => console.log("select")}
              onRepeatBird={() => console.log("repeat")}
            />
          </div>
          <div className="col-md-6">
            <BirdCard
              birdInfo={this.props.birdData[0].birds[0]}
              isHideCard={false}
            />
          </div>
        </div>
        <div style={{ paddingTop: "1rem" }}>
          <Button isActive={true}
           onNextLevel={() => console.log('click')} />
        </div>
      </div>
    );
  }
}

export default App;
