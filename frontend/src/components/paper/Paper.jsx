// Paper.js
import PropTypes from 'prop-types'
import InputCustom from '../input/InputCustom'
import './paper.css'

const Paper = ({ selectedLetter, handleScoreChange, scores }) => {

    return (
        <div className="paper">
            <table>
                <thead>
                    <tr>
                        <th scope="col">Lettre choisie</th>
                        <th scope="col">Pays</th>
                        <th scope="col">Villes</th>
                        <th scope="col">Prénom masculin</th>
                        <th scope="col">Prénom féminin</th>
                        <th scope="col">Métiers</th>
                        <th scope="col">Fleurs</th>
                        <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedLetter && (
                        <tr key={selectedLetter}>
                            <th scope="row">{selectedLetter}</th>
                            <td><InputCustom category="pays" onScoreChange={(score) => handleScoreChange('pays', score)} /></td>
                            <td><InputCustom category="villes" onScoreChange={(score) => handleScoreChange('villes', score)} /></td>
                            <td><InputCustom category="prenom_masculin" onScoreChange={(score) => handleScoreChange('prenom_masculin', score)} /></td>
                            <td><InputCustom category="prenom_feminin" onScoreChange={(score) => handleScoreChange('prenom_feminin', score)} /></td>
                            <td><InputCustom category="metiers" onScoreChange={(score) => handleScoreChange('metiers', score)} /></td>
                            <td><InputCustom category="fleurs" onScoreChange={(score) => handleScoreChange('fleurs', score)} /></td>
                            <td>{Object.values(scores).reduce((acc, cur) => acc + cur, 0)}</td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <th scope="row" colSpan={7} style={{ textAlign: 'right' }}>Total</th>
                        <td>{Object.values(scores).reduce((acc, cur) => acc + cur, 0)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

Paper.propTypes = {
    selectedLetter: PropTypes.string, // Valider la prop selectedLetter comme une chaîne
    handleScoreChange: PropTypes.func,// Callback pour la modification du score
    scores: PropTypes.object
}

export default Paper;
