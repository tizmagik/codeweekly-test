import React from 'react';
import {mount, render, shallow} from 'enzyme';
import App from '../App';
import Foo from '../Foo';

describe('App', () => {
  it('as mounted', () => {
    expect(mount(<App />)).toMatchSnapshot();
  });

  it('as rendered', () => {
    expect(render(<App />)).toMatchSnapshot();
  });

  it('as shallow', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});

describe('Enzyme', () => {
  // We'll use mount() to give us the fullest representation
  const wrapper = mount(<App />);

  it('find', () => {
    // Find 'Foo' component using Component Name
    expect(wrapper.find('Foo'));

    // Or by using the component constructor
    expect(wrapper.find(Foo));

    // Could also find by .classNames, but that's brittle and not recommended
  });
})
