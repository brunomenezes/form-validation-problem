import React, { Component } from 'react';

export default class Detail extends Component {

    onUpdate(e) {
        this.props.onChange({
            section:'detail',
            field: e.target.name,
            value: e.target.value
        });
        console.log(onUpdate);
    }

    render() {
        const {errors} = this.props;        
        return (
            <fieldset id='details'>
                <h3>Your details</h3>
                <p className={errors.email ? 'error': ''}>
                    <label className='label' htmlFor='email'> Email </label>
                    <input type='text' id='email' name='email' onChange={(e) => this.onUpdate(e)}/>
                    <br/>
                    {errors.email ? <small id="emailErrorMessage" className='errorMessage'>{errors.email.message}</small>: null}
                </p>
                <p className={errors.password ? 'error': ''}>
                    <label className='label' htmlFor='password'> Password </label>
                    <input type='password' id='password' name='password' onChange={(e) => this.onUpdate(e)} />
                    <br/>
                    {errors.password ? <small id="passwordErrorMessage" className='errorMessage'>{errors.password.message}</small>: null}
                </p>
            </fieldset>
        )
    }
}