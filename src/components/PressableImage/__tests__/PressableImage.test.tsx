import React from 'react';
import PressableImage from '../PressableImage';
import { Image } from 'react-native';
import TestRenderer from 'react-test-renderer';

describe('PressableImage test', () => {
  let profile: any;
  let profileRoot: any;
  const props = {
    height: 100,
    width: 100,
  };
  beforeEach(() => {
    profile = TestRenderer.create(<PressableImage source={0} {...props} />);
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
