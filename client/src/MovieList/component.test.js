import React from 'react';
import { shallow, render } from 'enzyme';
import Component from './component';

describe('Component tests', () => {
    test('Component renders correctly', () => {
        const component = shallow(<Component />);
        expect(component).toMatchSnapshot();
    });
});
