import React from 'react';
import Foo from '../Foo';
import { shallow } from 'enzyme';

describe('Foo Snapshot', () => {
  it('Renders', () => {
    const wrapper = shallow(<Foo />);

    expect(wrapper.text()).toBe('Foo');

    // For more involved markup, could create a Snapshot test!
    //expect(wrapper).toMatchSnapshot();
  })
})
