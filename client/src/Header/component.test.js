import React from 'react';
import { shallow, render } from 'enzyme';
import Component from './component';

describe('Component tests', () => {
    test('Component renders correctly', () => {
        const component = shallow(<Component filter={{ search: '1', searchBy: 'genres' }} />);
        expect(component).toMatchSnapshot();
    });
});
