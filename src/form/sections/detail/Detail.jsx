import React, { Component } from 'react';

export default class Detail extends Component {
    render() {
        const {onChange:upstreamUpdate} = this.props;
        
        return (
            <fieldset>
                <h3>Your details</h3>
                <p>
                    <label className='label' htmlFor='email'> Email </label>
                    <input type='text' id='email' name='email' onChange={upstreamUpdate}/>
                </p>
                <p>
                    <label className='label' htmlFor='password'> Password </label>
                    <input className='error' type='password' id='password' name='password' onChange={upstreamUpdate} />
                </p>
            </fieldset>
        )
    }
}