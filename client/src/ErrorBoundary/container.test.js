import React from 'react';
import { shallow, mount } from 'enzyme';
import ErrorBoundary from './container';
import Movie from '../Movie';

describe('Error boundary tests', () => {
    test('Component renders correctly', () => {
        const component = shallow(<ErrorBoundary />);
        expect(component).toMatchSnapshot();
    });
    //https://github.com/airbnb/enzyme/issues/1255
    //no testing for errorboundary
});
