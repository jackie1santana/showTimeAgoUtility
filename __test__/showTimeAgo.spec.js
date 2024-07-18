const showTimeAgo = require('../index');

const today = new Date();
const currentYear = today.getFullYear();

// Utility function to generate a random number between min and max 
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Dates for testing
const previousDay = new Date(today.getTime() - 86400000); // Yesterday
const twoDaysAgo = new Date(today.getTime() - 2 * 86400000); // Two days ago
const oneMonthAgo = new Date(today.getTime() - 30.44 * 86400000); // One month ago
const sixMonthsAgo = new Date(today.getTime() - 6 * 30.44 * 86400000); // Six months ago
const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds(), today.getMilliseconds());
const randomYearsAgo = new Date(today.getFullYear() - randomNumber(2, 20), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds(), today.getMilliseconds());

// Edge case dates
const epochStart = new Date(0); // January 1, 1970
const fewSecondsAgo = new Date(today.getTime() - 5000); // 5 seconds ago
const oneMinuteAgo = new Date(today.getTime() - 60000); // 1 minute ago
const oneHourAgo = new Date(today.getTime() - 3600000); // 1 hour ago
const futureDate = new Date(today.getTime() + 86400000); // Tomorrow

// Tests
test('showTimeAgo Utility should return a string', () => {
    expect(typeof showTimeAgo(today)).toBe('string');
});

test('showTimeAgo Utility should not be undefined', () => {
    expect(showTimeAgo(today)).toBeDefined();
});

test('showTimeAgo Utility should not be NaN', () => {
    expect(showTimeAgo(today)).not.toBeNaN();
});

test('showTimeAgo Utility should throw an error for no argument', () => {
    expect(() => showTimeAgo()).toThrow('Invalid date parameter: dateParam cannot be empty. It must be a valid ISO date string or a Date object.');
});

test('showTimeAgo Utility type should be a function object', () => {
    expect(typeof showTimeAgo).toBe('function');
});

test('Test Date today', () => {
    expect(showTimeAgo(today)).toContain('now');
});

test('Test Date from yesterday', () => {
    expect(showTimeAgo(previousDay)).toContain('Yesterday at');
});

test('Test Date from two days ago', () => {
    expect(showTimeAgo(twoDaysAgo)).toContain('days ago');
});

test('Test Date from one month ago', () => {
    expect(showTimeAgo(oneMonthAgo)).toContain('month ago');
});

test('Test Date from six months ago', () => {
    expect(showTimeAgo(sixMonthsAgo)).toContain('months ago');
});

test('Test Date from one year ago', () => {
    expect(showTimeAgo(oneYearAgo)).toBe('1 year ago');
});

test('Test Date from random years ago', () => {
    const years = today.getFullYear() - randomYearsAgo.getFullYear();
    expect(showTimeAgo(randomYearsAgo)).toBe(`${years} years ago`);
});

// Edge case tests
test('Test Date for the start of Unix Epoch (January 1, 1970)', () => {
    const epochYears = Math.floor((today - epochStart) / (365.25 * 86400000));
    expect(showTimeAgo(epochStart)).toBe(`${epochYears} years ago`);
});


test('Test Date for just a few seconds ago', () => {
    expect(showTimeAgo(fewSecondsAgo)).toContain('seconds ago');
});

test('Test Date for exactly one minute ago', () => {
    expect(showTimeAgo(oneMinuteAgo)).toContain('about a minute ago');
});

test('Test Date for exactly one hour ago', () => {
    expect(showTimeAgo(oneHourAgo)).toBe('1 hour ago');
});

test('Test Date for multiple hours ago (less than a day)', () => {
    const hoursAgo = new Date(today.getTime() - 5 * 3600000); // 5 hours ago
    expect(showTimeAgo(hoursAgo)).toContain('hours ago');
});

// Additional test cases for error handling
test('Test invalid date string', () => {
    expect(() => showTimeAgo('invalid-date')).toThrow('Invalid date parameter: dateParam is not a valid ISO date string.');
});

test('Test null date', () => {
    expect(() => showTimeAgo(null)).toThrow('Invalid date parameter: dateParam cannot be empty. It must be a valid ISO date string or a Date object.');
});

test('Test undefined date', () => {
    expect(() => showTimeAgo(undefined)).toThrow('Invalid date parameter: dateParam cannot be empty. It must be a valid ISO date string or a Date object.');
});

test('Test array as date parameter', () => {
    expect(() => showTimeAgo([])).toThrow('Invalid date parameter: dateParam must be a valid ISO date string or a Date object.');
});

test('Test object as date parameter', () => {
    expect(() => showTimeAgo({})).toThrow('Invalid date parameter: dateParam must be a valid ISO date string or a Date object.');
});
