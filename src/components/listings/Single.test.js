import React from 'react';
import renderer from 'react-test-renderer';
import Single from './Single';
import data from '../../data/courses.json';

describe('Single snapshot', () => {
  test('Single snapshot test', () => {
    const component = renderer.create(<Single item={data[0]} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

