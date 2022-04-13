/* eslint-disable jest/no-disabled-tests */
import React from 'react';
import ExternalUrl from '../ExternalUrl';
import { render, fireEvent } from '@testing-library/react-native';
import type { Url } from '../ExternalUrl';

xdescribe('Accessible NewButton', () => {
  let button: any;
  const onPress = jest.fn();
  const url: Url = ['hello', 'website'];
  const props = {
    url: url,
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
