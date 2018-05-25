import React from 'react';
import { shallow, render } from 'enzyme';
import MoviePreview from './component';

describe('MoviePreview tests', () => {
    test('Component MoviePreview renders correctly', () => {
        const item = {
            name: 'TestFilm',
            jenre: 'Horror',
            year: '2018',
            posterUrl: '/testurl',
        };
        const component = shallow(<MoviePreview item={item} />);
        expect(component).toMatchSnapshot();
    });
});
