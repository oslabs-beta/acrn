/* eslint-disable jest/no-disabled-tests */
import React from 'react';
import Url from '../Url';
import { render, fireEvent } from '@testing-library/react-native';
import type { UrlText } from '../Url';

xdescribe('Accessible Button', () => {
  let button: any;
  const onPress = jest.fn();
  const url: UrlText = ['hello', 'website'];
  const props = {
    url: url,
  };
  beforeEach(() => {
    button = render(<Url url={props.url} />);
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
