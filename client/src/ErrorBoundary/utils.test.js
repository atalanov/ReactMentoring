import { Logger } from './utils';

const logResult = Logger.log('anything', 'smth else');
test('utils work', () => {
    expect(logResult).toBe(true);
});
