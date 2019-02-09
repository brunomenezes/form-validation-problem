import React, { Component } from 'react';
import './Form.css';
import Animal, {AnimalSchema} from './sections/animal';
import Detail, {DetailSchema} from './sections/detail';
import validationService from '../services/validationService';

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animalErrors: [],
            detailErrors: []
        };
    }
    
    updateSection(data) {
        this.setState((state) => {
            const section = (state && state[data.section]) || {};
            section[data.field] = data.value;
            return {[data.section]: section};
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const animalCheck = validationService.validate(this.state.animal, AnimalSchema);
        const detailCheck = validationService.validate(this.state.detail, DetailSchema);
        const animalErrors = animalCheck.hasError ? animalCheck.errors : [];
        const detailErrors = detailCheck.hasError ? detailCheck.errors : [];
        this.setState({ animalErrors, detailErrors });

        if(!animalCheck.hasError && !detailCheck.hasError) {
            console.log('saved...');
            this.setState({saved: true});
            // TODO: Some clean-up would go here!
        } else {
            this.setState({saved: false});
        }
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <h1>Fill out this awesome form</h1>
                
                <Detail onChange={(data) => this.updateSection(data)} errors={this.state.detailErrors}/>
                
                <Animal onChange={(data) => this.updateSection(data)} errors={this.state.animalErrors}/>

                <fieldset>
                    <p>
                        <input type='submit' value='Create account'/>
                    </p>
                </fieldset>
                {this.state.saved ? <small>Saved</small> : null}
            </form>
        );
    }
}