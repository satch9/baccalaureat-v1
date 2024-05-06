import './paperboard.css'

import Paper from "../paper/Paper"
import ScoreBoard from "../scoreboard/ScoreBoard"

import PropTypes from 'prop-types'

const PaperBoard = ({ selectedLetter, handleScoreChange, scores }) => {

  
  return (
    <div className="paperboard">
      <Paper selectedLetter={selectedLetter} scores={scores} handleScoreChange={handleScoreChange} />
      <ScoreBoard />
    </div>
  )
}

PaperBoard.propTypes = {
  selectedLetter: PropTypes.string, // Valider la prop selectedLetter
  handleScoreChange: PropTypes.func, // Valider la prop handleScoreChange
  scores: PropTypes.object
}

export default PaperBoard
