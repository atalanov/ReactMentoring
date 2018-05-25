import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './component';

test('Component SearchBox renders correctly', () => {
    const component = shallow(<SearchBox />);
    expect(component).toMatchSnapshot();
});
