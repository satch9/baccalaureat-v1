import Paper from "./Paper"
import ScoreBoard from "./ScoreBoard"
import './paperboard.css'

const PaperBoard = () => {
  return (
    <div className="paperboard">
      <Paper/>
      <ScoreBoard />
    </div>
  )
}

export default PaperBoard
