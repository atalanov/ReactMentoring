import React from 'react';
import { shallow, render } from 'enzyme';
import MovieList from './component';

describe('MovieList tests', () => {
    test('Component MovieList renders correctly', () => {
        const component = shallow(<MovieList />);
        expect(component).toMatchSnapshot();
    });
    test('Previews contain more than 1 film', () => {
        const component = shallow(<MovieList />);
        expect(component.instance().previews.length).toBeGreaterThanOrEqual(1);
    });
});
