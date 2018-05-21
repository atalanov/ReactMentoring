import React from 'react';
import { shallow, render } from 'enzyme';
import MoviePreviewDescription from './component';

describe('MoviePreviewDescription tests', () => {
    test('Component MoviePreviewDescription renders correctly', () => {
        const component = shallow(<MoviePreviewDescription name="TestFilm" jenre="Horror" year="2018" />);
        expect(component).toMatchSnapshot();
    });
});
