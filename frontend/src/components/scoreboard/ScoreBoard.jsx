import './scoreboard.css'

const ScoreBoard = () => {
  return (
    <div className="scoreBoard">
      <table>
                <thead>
                    <tr>
                        <th scope="col">Classement</th>
                        <th scope="col">Joueur</th>
                        <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">#1</th>
                        <td>baba</td>
                        <td>60</td>
                    </tr>
                    <tr>
                        <th scope="row">#2</th>
                        <td>bibi</td>
                        <td>120</td>
                    </tr>
                </tbody>
                
            </table>
    </div>
  )
}

export default ScoreBoard
