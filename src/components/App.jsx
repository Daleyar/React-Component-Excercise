import React, {Component} from "react";
import DisplayName from './DisplayName/DisplayName';
import NamesList from "./NamesList/NamesList";
import AlertUser from "./AlertUser/AlertUser";
import SuperHeroTable from "./SuperheroTable/SuperheroTable";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie'],
            superheroes: [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondaryAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondaryAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondaryAbility: 'Shoots web'
                }
            ]
        }
    }

    AlertUser(){
        alert("devCodeCamp");
    }

    render() { 
        return ( 
            <div className='container-fluid'>
                <h1>
                <DisplayName firstName={this.state.firstName} lastName={this.state.lastName}/>
                <NamesList names={this.state.names} />
                <AlertUser alert={() => this.AlertUser()} />
                <SuperHeroTable heroes={this.state.superheroes} />
                </h1>
            </div>
        );
    }
}

export default App; 