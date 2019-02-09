import React from 'react';
import ReactDOM from 'react-dom';   
import Detail from './Detail';

const defaultErrors = {};

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Detail errors={defaultErrors}/>, div);
    ReactDOM.unmountComponentAtNode(div);    
});

it('should render a Detail section', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Detail errors={defaultErrors} />, div);
    expect(div.querySelector('#details')).toBeTruthy();
    expect(div.querySelector('#email')).toBeTruthy();
    expect(div.querySelector('#password')).toBeTruthy();
    expect(div.querySelector('small')).toBeFalsy();
});

it('should render error message for email', () => {
    const div = document.createElement('div');
    const error = {email:{message:'email not valid'}};
    ReactDOM.render(<Detail errors={error} />, div);
    expect(div.querySelector('#emailErrorMessage').textContent).toBe('email not valid');
});

it('should render error message for password', () => {
    const div = document.createElement('div');
    const error = {password:{message:'password not valid'}};
    ReactDOM.render(<Detail errors={error} />, div);
    expect(div.querySelector('#passwordErrorMessage').textContent).toBe('password not valid');
});
