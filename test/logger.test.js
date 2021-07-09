const Logger = require('../src/logger');

test('Testing logger DEBUG', () => {
    Logger.debug('Hello World!'); 
});

test('Testing logger INFO', () => {
    Logger.info('Hello World!'); 
});
