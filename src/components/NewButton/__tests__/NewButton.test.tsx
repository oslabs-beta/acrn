import React from 'react';
import NewButton from '../NewButton';
import { render, fireEvent, RenderAPI } from '@testing-library/react-native';
import type { ReactTestInstance } from 'react-test-renderer';

describe('Accessible Text Input', () => {
  let button: any;
  const props = {
    text: 'New Button',
  };
  beforeEach(() => {
    button = render(<NewButton {...props} />);
  });
  test('renders input text', () => {
    expect(button.getByText('New Button')).toBeTruthy();
  });
  // test('button is pressable', () => {
  //   const button = render(<NewButton {...props} />);
  //   button.getByText
  //   fireEvent(button,'onPress')
  //   expect(onClick).toHaveBeenCalledTimes(1);
  // });
});
