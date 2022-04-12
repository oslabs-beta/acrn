import React from 'react';
import Profile from '../Profile';
import { render, fireEvent } from '@testing-library/react-native';

describe('Profile test', () => {
  let profile: any;
  const props = {
    height: 100,
    width: 100,
  };
  beforeEach(() => {
    profile = render(<Profile source={0} {...props} />);
    expect(profile).toMatchSnapshot();
  });
  xtest('placeholder', () => {});
});
