import { useState } from 'react';
import './randomLetterButton.css';
import PropTypes from 'prop-types';

const RandomLetterButton = ({ onLetterSelected, selectedLetters, setSelectedLetters, disabled }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(null);
  const [countdown, setCountdown] = useState(0);

  const handleRandomLetterClick = () => {
    setIsLoading(true);
    setCountdown(3); // Décompte initial de 3 secondes

    const interval = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    // Démarrer le chronomètre après 3 secondes
    const timeout = setTimeout(() => {
      clearInterval(interval);
      clearInterval(timer);
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let randomLetter = '';

      // Générer une lettre aléatoire qui n'a pas déjà été sélectionnée
      do {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        randomLetter = alphabet[randomIndex];
        
      } while (selectedLetters.includes(randomLetter));
      setSelectedLetters(prevSelectedLetters => [...prevSelectedLetters, randomLetter]);

      onLetterSelected(randomLetter); // Appeler la fonction de rappel avec la lettre sélectionnée
      setIsLoading(false);
      setCountdown(0);
    }, 4000);

    setTimer(timeout);
  };

  return (
    <div className="randomLetterButton">
      <button onClick={handleRandomLetterClick} disabled={isLoading || disabled}>
        {isLoading ? `Chargement... (${countdown})` : 'Choisir une lettre aléatoire'}
      </button>
    </div>
  );
};

RandomLetterButton.propTypes = {
  onLetterSelected: PropTypes.func.isRequired,
  selectedLetters: PropTypes.array,
  setSelectedLetters: PropTypes.func,
  disabled: PropTypes.bool
};

export default RandomLetterButton;
