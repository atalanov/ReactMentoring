import React from 'react';
import { shallow, render } from 'enzyme';
import MoviePreviewImage from './component';

describe('MoviePreviewImage tests', () => {
    test('Component MoviePreviewImage renders correctly', () => {
        const component = shallow(<MoviePreviewImage src="/testurl" title="test title" />);
        expect(component).toMatchSnapshot();
    });
});
