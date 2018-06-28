import React from 'react';
import { shallow } from 'enzyme';
import { SearchBox } from './container';

test('test container', () => {
    const component = shallow(<SearchBox />);
    expect(component).toMatchSnapshot();
});
test('handlechange', () => {
    const component = shallow(<SearchBox />);
    expect(
        component
        .instance()
        .handleChangeFunc
        .call({
             props: {
                 actions: {
                     changeFilterParam: () => {},
                    },
                },
            },
        {
                target: {
                    value: true,
                },
            }))
        .toBe(undefined);
});
