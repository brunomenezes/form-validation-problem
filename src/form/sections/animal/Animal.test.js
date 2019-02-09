import React from 'react';
import ReactDOM from 'react-dom';   
import Animal from './Animal';

const defaultErrors = {};

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Animal errors={defaultErrors}/>, div);
    ReactDOM.unmountComponentAtNode(div);    
});
