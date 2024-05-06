import { useState } from 'react'
import './App.css'
import AlphabetList from './components/alphabet/AlphabetList'
import PaperBoard from './components/paperboard/PaperBoard'
import RandomLetterButton from './components/randomLetter/RandomLetterButton'
import CountdownTimer from './components/timer/CountdownTimer'
import CheckButton from './components/checkButton/CheckButton'

function App() {
  const [selectedLetter, setSelectedLetter] = useState(null)
  const [isCountdownRunning, setIsCountdownRunning] = useState(false)
  const [selectedLetters, setSelectedLetters] = useState([])
  const [allFieldsFilled, setAllFieldsFilled] = useState(false)
  const [isCheckButtonHidden, setIsCheckButtonHidden] = useState(false)
  const [scores, setScores] = useState({});

  // Vérifie si tous les champs sont remplis
  const checkAllFieldsFilled = () => {
    const allFields = ['pays', 'villes', 'prenom_masculin', 'prenom_feminin', 'metiers', 'fleurs'];
    const filledFields = allFields.filter(field => scores[field] !== undefined && scores[field] !== '');
    setAllFieldsFilled(filledFields.length === allFields.length);
  }

  // Fonction pour arrêter la partie
  const checkGame = () => {
    setIsCountdownRunning(false)
    setIsCheckButtonHidden(false)
    // Autres actions à exécuter lorsque la partie est arrêtée
  }

  const handleLetterSelected = (letter) => {
    setSelectedLetter(letter);
    setIsCountdownRunning(true);
  };

  const handleScoreChange = (field, newScore) => {
    setScores(prevScores => ({ ...prevScores, [field]: newScore }));
    checkAllFieldsFilled()
  };

  return (
    <>
      <h1>Baccalauréat</h1>
      <AlphabetList
        selectedLetters={selectedLetters}
      />
      <div className='parameters'>
        <RandomLetterButton
          selectedLetters={selectedLetters}
          onLetterSelected={handleLetterSelected}
          setSelectedLetters={setSelectedLetters}
          disabled={isCountdownRunning}
        />
        <CountdownTimer
          isCountdownRunning={isCountdownRunning}
        />
        {
          (allFieldsFilled || isCheckButtonHidden || isCountdownRunning) &&
          <CheckButton checkGame={checkGame} />
        }
      </div>
      <PaperBoard
        selectedLetter={selectedLetter}
        handleScoreChange={handleScoreChange}
        scores={scores}
      />

    </>
  );
}

export default App;
