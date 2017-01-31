import React from 'react';
import Foo from '../Foo';
import { shallow } from 'enzyme';

describe('Foo', () => {
  it('Renders', () => {
    expect(shallow(<Foo />)).toMatchSnapshot();
  })
})
