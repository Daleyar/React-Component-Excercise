import React, {Component} from "react";
import DisplayName from './DisplayName/DisplayName';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White'
        }
    }

    render() { 
        return ( 
            <div className='container-fluid'>
                <h1>
                <DisplayName firstName={this.state.firstName} />
                <DisplayName lastName={this.state.lastName} />
                </h1>
            </div>
        );
    }
}

export default App; 