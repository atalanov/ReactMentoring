import React from 'react';
import { shallow } from 'enzyme';
import ResultSortingComponent from './component';

test('Component ResultSortingComponent renders correctly', () => {
    const component = shallow(<ResultSortingComponent />);
    expect(component).toMatchSnapshot();
});
