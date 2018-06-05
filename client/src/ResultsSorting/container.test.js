import React from 'react';
import { shallow, render } from 'enzyme';
import {ResultSorting} from './container';

describe('ResultSorting Tests', () => {
    test('Component ResultSorting renders correctly', () => {
        const component = shallow(<ResultSorting />);
        expect(component).toMatchSnapshot();
    });
    test('Component ResultSorting default selected value is title', () => {
        const component = render(<ResultSorting />);
        expect(component.find('button:first-child').hasClass('selected')).toBe(true);
    });
});
