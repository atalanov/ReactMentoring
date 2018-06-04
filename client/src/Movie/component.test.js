import React from 'react';
import { shallow, render } from 'enzyme';
import Movie from './component';

describe('Movie tests', () => {
    test('Component Movie renders correctly', () => {
        const item = {
            title: 'TestFilm',
            genres: ['Horror'],
            release_date: '2018',
            poster_path: '/testurl',
        };
        const component = shallow(<Movie item={item} />);
        expect(component).toMatchSnapshot();
    });
});
