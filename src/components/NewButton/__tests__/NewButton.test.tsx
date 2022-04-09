import React from 'react';
import NewButton from '../NewButton';
import { render } from '@testing-library/react-native';

describe('Accessible Text Input', () => {
  // let button: RenderAPI | ReactTestInstance;
  const props = {
    text: 'New Button',
  };
  // beforeEach(() => {
  //   button = render(<NewButton {...props} />);
  // })
  test('renders input text', () => {
    const { getByText } = render(<NewButton {...props} />);
    expect(getByText('New Button')).toBeTruthy();
  });
  // xtest('button is pressable', () => {
  //   const onClick = jest.fn();
  //   fireEvent(button, onClick);
  //   fireEvent;
  // });
});
