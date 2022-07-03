const showTimeAgo = require('../index');

const randomDate = '2022-07-02T23:38:22.411Z';

// const shouldInclude = 'now' 
// || 'seconds ago' 
// || 'about a minute ago' 
// || 'minutes ago' 
// || 'hour ago' 
// || 'hours ago' 
// || 'days ago' 
// || 'day ago' 
// || 'month ago' 
// || 'months ago' 
// || 'year ago' 
// || 'years ago';
// || 'Yesterday'
// || 'Today';

test('showTimeAgo Utility to return a string', () => {
    expect(typeof showTimeAgo(randomDate)).toBe('string');
});

test('showTimeAgo Utility to not be undefined', () => {
    expect(showTimeAgo(randomDate)).toBeDefined();
});

test('showTimeAgo Utility to not be NaN', () => {
    expect(typeof showTimeAgo(randomDate)).not.toBeNaN();
});

// test('showTimeAgo Utility to include certain words', () => {
//     expect(showTimeAgo(randomDate)).toContain(shouldInclude);
// });

test('showTimeAgo Utility by default should not have an argument', () => {
    expect(showTimeAgo()).toBeNull();
});

test('showTimeAgo Utility type to be a function object', () => {
    expect(typeof showTimeAgo()).toBe('object');
});