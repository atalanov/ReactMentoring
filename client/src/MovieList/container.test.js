import React from 'react';
import { shallow, render } from 'enzyme';
import { MovieList } from './container';

describe('MovieList tests', () => {
    test('Component MovieList renders correctly', () => {
        const component = shallow(<MovieList previews={{}} />);
        expect(component).toMatchSnapshot();
    });
    test('Previews contain more than 1 film', () => {
        const component = shallow(<MovieList previews={[{}, {}]} />);
        expect(component.instance().props.previews.length).toBeGreaterThanOrEqual(1);
    });
});
