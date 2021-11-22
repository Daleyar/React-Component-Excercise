import React, {Component} from "react";
import DisplayName from './DisplayName/DisplayName';
import NamesList from "./NamesList/NamesList";
import AlertUser from "./AlertUser/AlertUser";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie']
        }
    }

    AlertUser(){
        alert("devCodeCamp");
    }
    
    render() { 
        return ( 
            <div className='container-fluid'>
                <h1>
                <DisplayName firstName={this.state.firstName} />
                <DisplayName lastName={this.state.lastName} />
                <NamesList names={this.state.names} />
                <AlertUser alert={() => this.AlertUser()} />
                </h1>
            </div>
        );
    }
}

export default App; 