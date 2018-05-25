import React from 'react';
import { shallow, render } from 'enzyme';
import ResultsCount from './container';

describe('ResultsCount Tests', () => {
    test('Component ResultsCount renders correctly', () => {
        const component = shallow(<ResultsCount count="5" />);
        expect(component).toMatchSnapshot();
    });
    test('Component ResultsCount creates correct text', () => {
        const component = shallow(<ResultsCount count="5" />);
        expect(component.instance().countText).toBe('5 movies');
    });
});
