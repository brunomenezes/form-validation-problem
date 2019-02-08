import React, { Component } from 'react';
import './Form.css';
import Animal from './sections/animal';
import Detail from './sections/detail';

export default class Form extends Component {
    
    update(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <form method='post' action=''>
                <h1>Fill out this awesome form</h1>
                
                <Detail onChange={(data) => this.update(data)}/>
                
                <Animal onChange={(data) => this.update(data)}/>

                <fieldset>
                    <p>
                        <input type='submit' value='Create account' />
                    </p>
                </fieldset>
            </form>
        );
    }
}