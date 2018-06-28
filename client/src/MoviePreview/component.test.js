import React from 'react';
import { shallow, render } from 'enzyme';
import MoviePreview from './component';

describe('MoviePreview tests', () => {
    test('Component MoviePreview renders correctly', () => {
        const item = {
            title: 'TestFilm',
            genres: ['Horror'],
            release_date: '2018',
            poster_path: '/testurl',
        };
        const component = shallow(<MoviePreview item={item} />);
        expect(component).toMatchSnapshot();
    });
});
