const showTimeAgo = require('../index');

const today = new Date();
const currentYear = today.getFullYear();

const getCurrentDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

const getCurrentMonth = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]


//random number of days
const randomDayNumber = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

//check previous day
const prevNumberDay = new Date().getDate() - 1;
const previousDay = new Date(`${getCurrentDay[today.getDay()]} ${getCurrentMonth[today.getMonth()]} ${prevNumberDay} ${currentYear}`)

//check previous days
const previousDays = new Date(`${getCurrentDay[today.getDay()]} ${getCurrentMonth[today.getMonth()]} ${today.getDate() - 2} ${currentYear}`)

//create random years
const randomYearNumber = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

//check previous year
const prevYear = today.getFullYear() - 1;
const aYearFromNow = new Date(`Sun July 02 ${prevYear}`)

//check previous years
const prevYears = today.getFullYear() - randomYearNumber(2, 20);
const yearsFromNow = new Date(`Sun July 02 ${prevYears}`)

test('showTimeAgo Utility to return a string', () => {
    expect(typeof showTimeAgo(today)).toBe('string');
});

test('showTimeAgo Utility to not be undefined', () => {
    expect(showTimeAgo(today)).toBeDefined();
});

test('showTimeAgo Utility to not be NaN', () => {
    expect(typeof showTimeAgo(today)).not.toBeNaN();
});

test('showTimeAgo Utility by default should not have an argument', () => {
    expect(showTimeAgo()).toBeNull();
});

test('showTimeAgo Utility type to be a function object', () => {
    expect(typeof showTimeAgo()).toBe('object');
});

test('Test Date today', () => {
    expect(showTimeAgo(today)).toContain('now');
});

test('Test Date from Yesterday', () => {
    // if test fail, it is because it is the same day or it will should a - negative integer.
    expect(showTimeAgo(previousDay)).toContain('Yesterday at');
});


test('Test Date from days ago', () => {
    // if test fail, it is because it is the same day or 2nd day of the month or it will should a - negative integer.
    expect(showTimeAgo(previousDays)).toContain('days ago');
});


test('Test Date from 1 year ago', () => {
    expect(showTimeAgo(aYearFromNow)).toBe('1 year ago');
});

test('Test Date from years ago', () => {
    expect(showTimeAgo(yearsFromNow)).toContain('years ago');
});


