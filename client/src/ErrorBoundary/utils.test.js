import utils from './utils';

const logResult = utils.Logger.log('anything', 'smth else');
test('utils work', () => {
    expect(logResult).toBe(true);
});
