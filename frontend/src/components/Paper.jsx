import './paper.css'

const Paper = () => {
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
                    <tr>
                        <th scope="row">A</th>
                        <td>Allemagne</td>
                        <td>Athènes</td>
                        <td>André</td>
                        <td>Astrid</td>
                        <td>Artiste</td>
                        <td>Anthurium</td>
                        <td>60</td>
                    </tr>
                    <tr>
                        <th scope="row">B</th>
                        <td>Belgique</td>
                        <td>Belgrade</td>
                        <td>Bryan</td>
                        <td>Brittany</td>
                        <td>Boxeur</td>
                        <td>Bégonia</td>
                        <td>60</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th scope="row" colSpan={7}>Total albums</th>
                        <td>120</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Paper
