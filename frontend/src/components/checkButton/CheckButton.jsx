import './checkButton.css'
import PropTypes from 'prop-types'

const CheckButton = ({ checkGame }) => {

  return (
    <div className="checkButton">
      <button onClick={checkGame}>Vérification</button>
    </div>
  )
}

CheckButton.propTypes = {
  checkGame: PropTypes.func,
};

export default CheckButton
