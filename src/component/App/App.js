import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Question from "../Question/Question";
import BirdCard from "../BirdCard/BirdCard";
import Answers from "../Answers/Answers";

function App() {
  const headerConfig = {
    score: 20,
    categories: [
      { name: "Разминка", id: 1 },
      { name: "Воробьиные", id: 2 },
      { name: "Лесные птицы", id: 3 },
      { name: "Певчие птицы", id: 4 },
      { name: "Хищные птицы", id: 5 },
      { name: "Морские птицы", id: 6 },
    ],
  };
  const bird = {
    id: 1,
    name: "Ворон",
    species: "Corvus corax",
    description:
      "Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.",
    image: "https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg",
    audio:
      "https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3",
  };
  return (
    <div className="App">
      <Header
        score={headerConfig.score}
        categories={headerConfig.categories}
        activeCategory={1}
      />
      <BirdCard birdInfo={bird} isDefault={true} isFull={false} />

      <div className="row" style={{ paddingTop: 1 + "rem" }}>
        <div className="col-md-6">
          <Answers
            rightAnswer={1}
            birds={[
              { name: "Ворон", id: 1 },
              { name: "Журавль", id: 2 },
              { name: "Ласточка", id: 3 },
              { name: "Козодой", id: 4 },
              { name: "Кукушка", id: 5 },
              { name: "Синица", id: 6 },
            ]}
            onSelectBird={(obj) => console.log(obj)}
          />
        </div>
        <div className="col-md-6">
          <BirdCard
            birdInfo={bird}
            isDefault={false}
            isFull={true}
            isHideCard={false}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
