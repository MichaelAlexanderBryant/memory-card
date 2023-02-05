import React, {useState} from 'react';
import { Header } from './components/header';
import { Card } from './components/card';
import './App.css';

function App() {

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  };

  let placeholderArray = ["newton", "einstein", "galileo", "curie", "bohr", "maxwell", "heisenberg", "feynman", "dirac", "schrodinger", "rutherford", "faraday"]
  let shuffledArray = shuffle(placeholderArray);


  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const onClick = (e) => {
    if (!(clicked.includes(e.target.id))) {
      setClicked( [...clicked, e.target.id] );
      setCurrentScore( currentScore + 1 );
    } else {
      if (currentScore > bestScore) {
        setBestScore( currentScore );
        setClicked([]);
        setCurrentScore(0);
      };
    };
  };
  

  return (
    <div className="App">
      <Header currentScore={currentScore} bestScore={bestScore}/>
      <div id="content-container">
        <div id="card-container">
          {shuffledArray.map((x, index) => <Card key={index} id={x} onClick={onClick}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
