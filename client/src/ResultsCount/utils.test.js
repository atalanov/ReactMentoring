import { shallow, render } from 'enzyme';
import utils from './utils';

test('Utils formatCount function works correctly', () => {
    expect(utils.formatCount(1)).toBe('1 movie');
    expect(utils.formatCount(0)).toBe('0 movies');
});
