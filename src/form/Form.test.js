import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form />, div);
    ReactDOM.unmountComponentAtNode(div);    
});

it('should render a form element', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form />, div);
    expect(div.children.length).toBe(1);
    expect(div.querySelector('form')).toBeTruthy();
    
});
