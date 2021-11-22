import React from 'react';

const SuperHeroTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Primary Ability</th>
                    <th>Secondary Ability</th>
                </tr>
            </thead>
            <tbody>
                {props.heroes.map((hero) => {
                    return (
                        <tr>
                            <td>{hero.superheroId}</td>
                            <td>{hero.name}</td>
                            <td>{hero.primaryAbility}</td>
                            <td>{hero.secondaryAbility}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}

export default SuperHeroTable