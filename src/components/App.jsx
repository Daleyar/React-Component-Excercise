import React, {Component} from "react";
import DisplayName from './DisplayName/DisplayName';
import NamesList from "./NamesList/NamesList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie']
        }
    }

    render() { 
        return ( 
            <div className='container-fluid'>
                <h1>
                <DisplayName firstName={this.state.firstName} />
                <DisplayName lastName={this.state.lastName} />
                <NamesList names={this.state.names} />
                </h1>
            </div>
        );
    }
}

export default App; 