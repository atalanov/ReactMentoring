import React from 'react';
import { shallow } from 'enzyme';
import ResultsControlBar from './component';

test('Component ResultsControlBar renders correctly', () => {
    const component = shallow(<ResultsControlBar />);
    expect(component).toMatchSnapshot();
});
