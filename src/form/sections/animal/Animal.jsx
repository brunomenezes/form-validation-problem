import React, { Component } from 'react';

export default class Animal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animals: []
        };
    }

    onInputChange(e) {
        this.props.onChange({
            section: 'animal',
            field: e.target.name,
            value: e.target.value
        });
    }

    onAnimalChange(e) {
        const animals = [...this.state.animals];

        if (e.target.checked) {
            animals.push(e.target.value);
        } else {
            const index = animals.findIndex(a => a === e.target.value);
            animals.splice(index, 1);
        }

        this.setState({ animals });
        this.props.onChange({
            section: 'animal',
            field: e.target.name,
            value: [...animals]
        });
    }

    render() {
        const { errors } = this.props;
        const animals = ['Bear', 'Tiger', 'Snake', 'Donkey'];
        const colours = ['Blue', 'Green', 'Red', 'Black', 'Brown'];
        
        return (
            <fieldset>
                <h3>Your animal</h3>
                <p className={errors.colour ? 'error' : ''}>
                    <label className='label' htmlFor='colour'>
                        Colour
                    </label>
                    <select name='colour' id='colour' onChange={(e) => this.onInputChange(e)}>
                        <option value=''>Choose colour</option>
                        {colours.map((colour, i) => (
                            <option key={i} value={colour.toLowerCase()}>{colour}</option>
                        ))}

                    </select>
                    <br/>
                    {errors.colour ? (<small className="errorMessage">{errors.colour.message}</small>) : null}
                </p>
                <p className={errors.animals ? 'error' : ''}>
                    <label className="label">
                        Animal
                    </label>

                    {animals.map((type, i) => (
                        <span className='animal-checkbox-wrapper' key={i}>
                            <input type='checkbox' name='animals' value={type.toLowerCase()} id={type.toLowerCase()} onChange={(e) => this.onAnimalChange(e)} />
                            <label htmlFor={type.toLowerCase()}> {type} </label>
                        </span>
                    ))}
                    <br/>
                    {errors.animals ? (<small className="errorMessage">{errors.animals.message}</small>) : null}
                </p>
                <p className={errors.tigerType ? 'error' : ''}>
                    <label className='label' htmlFor='tigerType'>
                        Type of tiger
                    </label>
                    <input type='text' name='tigerType' id='tigerType' onChange={(e) => this.onInputChange(e)} />
                    <br/>
                    {errors.tigerType ? (<small className="errorMessage">{errors.tigerType.message}</small>) : null}
                </p>
            </fieldset>
        )
    }
}