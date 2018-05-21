import React from 'react';
import { shallow, render } from 'enzyme';
import Movie from './component';

describe('Movie tests', () => {
    test('Component Movie renders correctly', () => {
        const item = {
            name: 'TestFilm',
            jenre: 'Horror',
            year: '2018',
            posterUrl: '/testurl',
        };
        const component = shallow(<Movie item={item} />);
        expect(component).toMatchSnapshot();
    });
});
