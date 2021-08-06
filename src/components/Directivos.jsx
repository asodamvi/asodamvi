import React from 'react'

const Directivos = () => (
    <div className="section__directivos">
        <h3 className="title">Directivos</h3>
        <div className="section__directivos_table">
            <table>
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Cargo</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Hugo Alcides Fernández Mejía</td>
                    <td>Presidente y R.L</td>
                </tr>
                <tr>
                    <td>Reinaldo Muñoz</td>
                    <td>Vicepresidente</td>
                </tr>
                <tr>
                    <td>Nancy Giron Bedoya</td>
                    <td>Tesorera</td>
                </tr>
                <tr>
                    <td>Elcy Miryan Erazo Molina</td>
                    <td>Secretaria</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
)

export default Directivos