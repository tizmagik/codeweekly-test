import React from 'react';
import {mount} from 'enzyme';

describe('Mocks', () => {

  beforeEach(() => {
    // We'll spy on console.log
    console.log = jest.fn();
  })

  afterEach(() => {
    // Restore module cache so we can re-require 'App'
    jest.resetModules();
    // Reset the mock we set up on console.log
    jest.resetAllMocks();
  });

  it('Uses the real thing', () => {
    // Require the component to test
    const App = require('../App').default;
    // render App
    const wrapper = mount(<App />);
    // assert that console is NOT called (it's only called by the mocked version)
    expect(console.log).not.toHaveBeenCalled();
    // assert that it renders what we expect
    expect(wrapper.text()).toBe('Foo');
  });

  it('Uses the mocked version', () => {
    // Tell Jest to use the shared mock version of Foo
    jest.mock('../Foo');
    // Require the component to test
    const App = require('../App').default;
    // render App
    const wrapper = mount(<App />);
    // assert that console.log is called (because we wrote the mock to do so)
    expect(console.log).toHaveBeenCalledWith('Mocked foo!');
    // assert that it's using the mocked version
    expect(wrapper.text()).toBe('Mocked Foo!');
  });

  it('Uses the inline defined mock', () => {
    // Tell jest to use a mock we define inline here
    jest.setMock('../Foo', () => <div>Inline foo!</div>);
    // Require the component to test
    const App = require('../App').default;
    // render App
    const wrapper = mount(<App />);
    // assert that console.log is not called
    expect(console.log).not.toHaveBeenCalled();
    // assert that it's using the inline mocked version
    expect(wrapper.text()).toBe('Inline foo!');
  })


});
