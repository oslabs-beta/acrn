import React, { useState, useEffect } from 'react';
import AccessibleTextInput from '../AccessibleTextInput';
import renderer from 'react-test-renderer';

xdescribe('Accessible Text Input', () => {
  it('takes in a text input', () => {
    const textInput = renderer.create(<AccessibleTextInput />);
  });
});
