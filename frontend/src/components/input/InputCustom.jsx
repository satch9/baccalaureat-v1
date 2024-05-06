import { useState } from 'react'
import './inputCustom.css'
import data from '../../../sources/countriesStatesCities.json'

import PropTypes from 'prop-types'

const InputCustom = ({ category, onScoreChange }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    // Validation basée sur la catégorie
    const isValidInput = validateInput(newValue, category);
    if (isValidInput) {
      // Calcul du score : Par exemple, attribuer un score fixe si le mot correspond à la catégorie
      const score = 10; // Par exemple, 10 points pour chaque mot valide dans la catégorie
      onScoreChange(score);
    } else {
      // Si le mot ne correspond pas à la catégorie, le score est nul
      onScoreChange(0);
    }
  }

  // Fonction de validation basée sur la catégorie
  const validateInput = (inputValue, category) => {
    // Exemple de validation basée sur la catégorie "pays"
    // Liste des pays
    console.log("data", data)
    if (category === 'pays') {
      data.forEach((pays, index) => {
        console.log(index + " " + pays.name.toLowerCase() + " " + inputValue)
      })
      //return countries.includes(inputValue);
    }
    // Ajoutez d'autres validations pour d'autres catégories si nécessaire
    return false; // Par défaut, considérez l'entrée comme non valide
  }

  return (
    <div className='inputCustom'>
      <input type='text' value={inputValue} onChange={handleInputChange} />
    </div>
  )
}

InputCustom.propTypes = {
  onScoreChange: PropTypes.func,
  category: PropTypes.string
}

export default InputCustom
