import React from 'react';
import renderer from 'react-test-renderer';
import { PureLayout } from 'src/components/layout';

describe('Layout', () => {
  it('renders correctly', () => {
    const title = 'Test';
    const description = 'Test';
    const tree = renderer
      .create(<PureLayout title={title} description={description} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
