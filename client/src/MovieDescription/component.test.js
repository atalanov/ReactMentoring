import React from 'react';
import { shallow, render } from 'enzyme';
import MovieDescription from './component';

describe('MovieDescription tests', () => {
    test('Component MovieDescription renders correctly', () => {
        const component = shallow(<MovieDescription name="TestFilm" jenre="Horror" year="2018" />);
        expect(component).toMatchSnapshot();
    });
});
