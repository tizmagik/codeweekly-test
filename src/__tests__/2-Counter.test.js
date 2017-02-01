import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../Counter';

describe('Counter tested via Enzyme', () => {
  it('can access the instance', () => {
    // shallow render, although no real sub-components so it doesn't matter
    const wrapper = shallow(<Counter />);

    // Grab the instance to read state or access methods
    const instance = wrapper.instance();

    // Assert the state starts at 0
    expect(wrapper.state().count).toBe(0);

    // Simulate an increase by clicking the 'Increase' button
    wrapper.find('button').first().simulate('click');
    // And assert that it displays the right number
    expect(wrapper.find('mark').text()).toBe('1');

    // Can also call increase off the instance directly
    instance.increase();
    expect(wrapper.find('mark').text()).toBe('2');
  });
});
