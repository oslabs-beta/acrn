import React from 'react';
import NewButton from '../NewButton';
import { render, fireEvent } from '@testing-library/react-native';

describe('Accessible Text Input', () => {
  let button: any;
  const onPress = jest.fn();
  const props = {
    text: 'New Button',
  };
  beforeEach(() => {
    button = render(<NewButton {...props} onPress={onPress} />);
    expect(button).toMatchSnapshot();
  });
  test('renders input text', () => {
    expect(button.getByText('New Button')).toBeTruthy();
  });
  test('button is pressable', () => {
    fireEvent.press(button.getByText('New Button'));
    expect(onPress).toHaveBeenCalled();
  });
  test('accessibility role is button', () => {
    expect(button.getByRole('button')).toBeTruthy();
  });
});
