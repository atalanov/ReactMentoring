import React from 'react';
import { shallow } from 'enzyme';
import SearchBtn from './component';

test('Component SearchBtn renders correctly', () => {
    const component = shallow(<SearchBtn />);
    expect(component).toMatchSnapshot();
});
