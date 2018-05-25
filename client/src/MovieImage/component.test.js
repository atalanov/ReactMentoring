import React from 'react';
import { shallow, render } from 'enzyme';
import MovieImage from './component';

describe('MovieImage tests', () => {
    test('Component MovieImage renders correctly', () => {
        const component = shallow(<MovieImage src="/testurl" title="test title" />);
        expect(component).toMatchSnapshot();
    });
});
