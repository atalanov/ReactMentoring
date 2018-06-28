import React from 'react';
import { shallow } from 'enzyme';
import { SearchBtn } from './container';

test('test container', () => {
    const component = shallow(<SearchBtn />);
    expect(component).toMatchSnapshot();
});

test('handleclick', () => {
    const component = shallow(<SearchBtn />);
    expect(
        component
        .instance()
        .handleClick
        .call({
             props: {
                 actions: {
                    listShouldUpdate: () => {},
                    },
                    filter: false,
                },
            },
        {
                preventDefault: () => {
                },
            }))
        .toBe(undefined);
});
