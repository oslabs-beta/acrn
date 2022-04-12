import React from 'react';
import ExternalUrl from '../ExternalUrl';
import { render, fireEvent } from '@testing-library/react-native';

xdescribe('Accessible NewButton', () => {
  let button: any;
  const onPress = jest.fn();
  const props = {
    url: ['hello', 'website'],
  };
  beforeEach(() => {
    button = render(<ExternalUrl url={props.url} />);
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
