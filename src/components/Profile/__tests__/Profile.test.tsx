import React from 'react';
import Profile from '../Profile';
import { Image } from 'react-native';
import TestRenderer from 'react-test-renderer';

describe('Profile test', () => {
  let profile: any;
  let profileRoot: any;
  const props = {
    height: 100,
    width: 100,
  };
  beforeEach(() => {
    profile = TestRenderer.create(<Profile source={0} {...props} />);
    profileRoot = profile.root;
    expect(profile.toJSON()).toMatchSnapshot();
  });
  test('style testing', () => {
    expect(profileRoot.findByType(Image).props.style).toMatchObject({
      height: 100,
      width: 100,
    });
  });
});
