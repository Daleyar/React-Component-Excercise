import React, { Component } from "react";

class CreateHero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            primaryAbility: '',
            secondaryAbility: ''
        };
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.addSuperHero(this.state);
    }
    
    render () {
      return (
        <div className="heroForm">
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="name" name="name" value={this.state.name} onChange={this.handleChange} />
                    <input placeholder="primaryAbility" name="primaryAbility" type="text" value={this.state.primaryAbility} onChange={this.handleChange} />
                    <input placeholder="secondaryAbility" name="secondaryAbility" type="text" value={this.state.secondaryAbility} onChange={this.handleChange} />
                    <button type='submit'>Add Hero</button>
                </form>
            </div>
         </div>
      );
    }
}

  export default CreateHero;