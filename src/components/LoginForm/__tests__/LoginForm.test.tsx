import React from 'react';
import LoginForm from '../LoginForm';
import renderer from 'react-test-renderer';

describe('Accessible Text Input', () => {
  it('takes in a text input', () => {
    // TODO: complete test
    const textInput = renderer.create(<LoginForm />);
    console.log(textInput);
  });
});
