import React from 'react';
import { shallow } from 'enzyme';
import SearchByComponent from './component';

test('Component SearchByComponent renders correctly', () => {
    const component = shallow(<SearchByComponent />);
    expect(component).toMatchSnapshot();
});
