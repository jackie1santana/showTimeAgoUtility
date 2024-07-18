const showTimeAgo = require('../index');

const today = new Date();
const currentYear = today.getFullYear();

const getCurrentDay = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'
];

const getCurrentMonth = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

// Utility function to generate a random number between min and max 
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Dates for testing
const previousDay = new Date(today.getTime() - 86400000); // Yesterday
const twoDaysAgo = new Date(today.getTime() - 2 * 86400000); // Two days ago
const oneMonthAgo = new Date(today.getTime() - 30 * 86400000); // One month ago
const sixMonthsAgo = new Date(today.getTime() - 6 * 30 * 86400000); // Six months ago
const oneYearAgo = new Date(today.getTime() - 365 * 86400000); // One year ago
const randomYearsAgo = new Date(today.getTime() - randomNumber(2, 20) * 365 * 86400000); // Random years ago

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

test('showTimeAgo Utility should return null for no argument', () => {
    expect(showTimeAgo()).toBeNull();
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
    expect(showTimeAgo(oneMonthAgo)).toContain('days ago');
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
    const epoch = new Date(0);
    expect(showTimeAgo(epoch)).toContain('January 1, 1970 at');
});

test('Test Date for a future date', () => {
    const futureDate = new Date(today.getTime() + 86400000); // Tomorrow
    expect(showTimeAgo(futureDate)).toBe('now');
});

test('Test Date for just a few seconds ago', () => {
    const fewSecondsAgo = new Date(today.getTime() - 5000); // 5 seconds ago
    expect(showTimeAgo(fewSecondsAgo)).toBe('now');
});

test('Test Date for exactly one minute ago', () => {
    const oneMinuteAgo = new Date(today.getTime() - 60000); // 1 minute ago
    expect(showTimeAgo(oneMinuteAgo)).toContain('about a minute ago');
});

test('Test Date for exactly one hour ago', () => {
    const oneHourAgo = new Date(today.getTime() - 3600000); // 1 hour ago
    expect(showTimeAgo(oneHourAgo)).toBe('1 hour ago');
});

test('Test Date for multiple hours ago (less than a day)', () => {
    const hoursAgo = new Date(today.getTime() - 5 * 3600000); // 5 hours ago
    expect(showTimeAgo(hoursAgo)).toContain('hours ago');
});
