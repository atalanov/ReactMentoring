import React from 'react';
import { shallow, render } from 'enzyme';
import { SearchBySwitcher } from './container';

describe('SearchBySwitcher Tests', () => {
    test('Component SearchBySwitcher renders correctly', () => {
        const component = shallow(<SearchBySwitcher />);
        expect(component).toMatchSnapshot();
    });
    test('Component SearchBySwitcher default selected value is title', () => {
        const component = render(<SearchBySwitcher />);
        expect(component.find('button:first-child').hasClass('selected')).toBe(true);
    });
});
