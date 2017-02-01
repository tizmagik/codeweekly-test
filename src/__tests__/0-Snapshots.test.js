import React from 'react';
import Foo from '../Foo';
import { shallow } from 'enzyme';

describe('Foo Snapshot', () => {
  it('Renders', () => {
    const wrapper = shallow(<Foo />);

    // Assert expected text is renderd
    expect(wrapper.text()).toBe('Foo');

    // Boy, this sounds like a great use case for a Snapshot test!
  });
});
