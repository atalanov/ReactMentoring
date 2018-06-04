import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './container';

test('handleclick', () => {
    const component = shallow(<Header actions={{ get: () => ({}) }} filter={false} />);
    expect(component.instance().handleClick()).toBe(undefined);
});
