![MIT License](https://img.shields.io/badge/license-MIT-green) <a href="https://www.npmjs.com/package/showtimeago"><img src="https://img.shields.io/npm/v/showtimeago.svg?style=flat-square&colorB=51C838"
alt="NPM Version"></a> <a href="https://github.com/jackie1santana/showTimeAgoUtility/actions/workflows/unit-test-action.yml">[![Test showTimeAgo Utility](https://github.com/jackie1santana/showTimeAgoUtility/actions/workflows/unit-test-action.yml/badge.svg)](https://github.com/jackie1santana/showTimeAgoUtility/actions/workflows/unit-test-action.yml)</a> [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)
![GitHub issues](https://img.shields.io/github/issues/jackie1santana/showTimeAgoUtility) ![GitHub forks](https://img.shields.io/github/forks/jackie1santana/showTimeAgoUtility) ![GitHub stars](https://img.shields.io/github/stars/jackie1santana/showTimeAgoUtility) ![GitHub top language](https://img.shields.io/github/languages/top/jackie1santana/showTimeAgoUtility)



> Developed by Jackie Santana
> 
## Features ✨

- Simple and intuitive API
- Supports multiple date formats
- Lightweight and fast
- Works with Node.js and browsers
- MIT licensed

###### This an Open Source utility project.
---

### What is Show Time Ago?
> Show Time Ago is a utility that displays how long ago a given date was. Simply provide your ISO date: `showTimeAgo("2024-07-17T17:12:00.000Z")`, and this utility will dynamically update the time with the suffix 'ago'. For example: `2 minutes ago, 1 hour ago, 2 days ago, 1 month ago, 1 year ago`.

##### List of time suffixes:
- minutes, hours, days, weeks, months, years 'ago..'

##### Default: showTimeago updates on page reload
 _dynamically update time without page reload? code examples shown below_

## Installation 📦
 _To install this utility, you need to install the following dependencies:_

`npm i showtimeago` or `npm install showtimeago`

___
## Usage 📖

**Import**

- ES6: `import showTimeAgo from 'showtimeago'`
- CommonJS: `const showTimeAgo = require('showtimeago')`

Example:
```javascript
// Vanilla JavaScript
showTimeAgo("2024-07-17T17:12:00.000Z")

// In React
{showTimeAgo('2024-07-17T17:12:00.000Z')}

console.log(showTimeAgo('2024-07-17T17:12:00.000Z'))
```

This utility only accepts a new Date() format time. For example:
`new Date().toISOString()` 
outputs: `2024-07-17T17:12:00.000Z` _ISO date format_

**CDN 🌐**: 
- https://cdn.jsdelivr.net/npm/showtimeago/index.js 
- https://unpkg.com/showtimeago@4.0.4/index.js

_This is essentially a CommonJS module, so you may ignore the error: Uncaught ReferenceError: module is not defined at showTimeAgo.js:115:1 on the client side._

**CDN Set up:**

`<script crossorigin type="text/javascript" src="https://unpkg.com/showtimeago@4.0.4/index.js"></script>`
```
const showTimeAgo = showtimeago

console.log(showTimeAgo(new Date()))
```

**Yarn**: [https://yarnpkg.com/package/showtimeago ](https://yarnpkg.com/package?q=showtimeago&name=showtimeago&version=3.3.13)`yarn add showtimeago`
___
#### By default, showTimeAgo updates only when the page is reloaded

# Time Ago Display Examples
___
## Node.js Example (with reload)

```javascript
const showTimeAgo = require('showtimeago');

function updateTimeAgo() {
    const showPastTime = showTimeAgo('2024-07-18T17:12:00.000Z');
    console.clear(); // Clear the console
    console.log(`Time ago: ${showPastTime}`);
}

// Initial update
updateTimeAgo();

// Update every minute
const intervalId = setInterval(updateTimeAgo, 60000);

// To stop the interval after a certain time (e.g., 1 hour):
// setTimeout(() => clearInterval(intervalId), 3600000);
``` 
## Node.js Example (with reload) writing to a file

```javascript
const showTimeAgo = require('showtimeago');
const fs = require('fs');

function updateTimeAgo() {
    const showPastTime = showTimeAgo('2024-07-18T17:12:00.000Z');
    fs.writeFileSync('timeago.txt', `Time ago: ${showPastTime}`);
    console.log(`Updated timeago.txt: ${showPastTime}`);
}

// Initial update
updateTimeAgo();

// Update every minute
const intervalId = setInterval(updateTimeAgo, 60000);

// To stop the interval after a certain time (e.g., 1 hour):
// setTimeout(() => clearInterval(intervalId), 3600000);
```

### Node Example with Real-time Updates Via Comment Thread
```javascript
const showTimeAgo = require('showtimeago');

const comments = [
  { id: 1, text: "This is the first comment", date: "2024-07-17T17:12:00.000Z" },
  { id: 2, text: "This is the second comment", date: "2024-07-18T17:12:00.000Z" }
];

function displayComments() {
  comments.forEach(comment => {
    const timeAgo = showTimeAgo(comment.date);
    console.log(`Comment: ${comment.text}`);
    console.log(`Time ago: ${timeAgo}`);
    console.log('----------');
  });
}

// Initial display
displayComments();

// Update every minute
setInterval(displayComments, 60000);

```
___
## Vanilla JavaScript Example

### HTML Setup
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Time Ago Example</title>
</head>

<body>
  <div id="timeAgoDisplay"></div>
  <script src="https://cdn.jsdelivr.net/npm/showtimeago/index.js"></script>
  <script src="script.js"></script>
</body>

</html>
```

### (without reload in Vanilla JS)

```javascript
const showTimeAgo = window.showTimeAgo;

function updateTimeAgo() {
    const showPastTime = showTimeAgo('2024-07-18T17:12:00.000Z');
    const showTimeAgoToBrowser = document.getElementById('timeAgoDisplay');
    showTimeAgoToBrowser.textContent = `Time ago: ${showPastTime}`;
}

// Initial update
updateTimeAgo();

// Update every minute without reloading the page
setInterval(updateTimeAgo, 60000);
```

### (with reload in Vanilla JS)

```javascript
const showTimeAgo = window.showTimeAgo;

function updateTimeAgo() {
    const showPastTime = showTimeAgo('2024-07-18T17:12:00.000Z');
    const showTimeAgoToBrowser = document.getElementById('timeAgoDisplay');
    showTimeAgoToBrowser.innerHTML = `Time ago: ${showPastTime}`;
}

// Initial update
updateTimeAgo();

// Update every minute
setInterval(updateTimeAgo, 60000);
```

### Vanilla JavaScript Example with Real-time Updates Via Comment Thread

```javascript
const comments = [
  { id: 1, text: "This is the first comment", date: "2024-07-17T17:12:00.000Z" },
  { id: 2, text: "This is the second comment", date: "2024-07-18T17:12:00.000Z" }
];

function updateComments() {
  const commentsContainer = document.getElementById('timeAgoDisplay');
  commentsContainer.innerHTML = '';

  comments.forEach(comment => {
    const timeAgo = showtimeago(comment.date);
    const commentElement = document.createElement('div');
    commentElement.innerHTML = `
      <p>${comment.text}</p>
      <p>${timeAgo}</p>
    `;
    commentsContainer.appendChild(commentElement);
  });
}

// Initial update
updateComments();

// Update every minute
setInterval(updateComments, 60000);
```
___
## React Example (with rerender)
```jsx
import * as React from "react";
import showTimeAgo from "showtimeago";

export default function App() {
  const [showPastTime, setPastTime] = React.useState(null);

  React.useEffect(() => {
    function updateTimeAgo() {
      setPastTime(showTimeAgo('2024-07-18T17:12:00.000Z'));
    }

    // Initial update
    updateTimeAgo();

    // Update every minute
    const timer = setInterval(updateTimeAgo, 60000);

    // Cleanup function
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  return <div>User Posted Comment {showPastTime}</div>;
}
```

## React Example (without rerender)

```jsx
import * as React from "react";
import showTimeAgo from "showtimeago";

export default function App() {
  const [showPastTime, setPastTime] = React.useState(null);

  React.useEffect(() => {
    function updateTimeAgo() {
      const currentTime = showTimeAgo('2024-07-18T17:12:00.000Z');
      if (currentTime !== showPastTime) {
        setPastTime(currentTime);
      }
    }

    // Initial update
    updateTimeAgo();

    // Update every minute without causing a re-render if the value hasn't changed
    const timer = setInterval(updateTimeAgo, 60000);

    // Cleanup function
    return () => clearInterval(timer);
  }, [showPastTime]); // Add showPastTime as a dependency

  return <div>User Posted Comment {showPastTime}</div>;
}
```

### React Example with Real-time Updates Via Comment Thread

This example demonstrates how to use the `showtimeago` package in a React application to display the time ago for comments, updating every minute.

```jsx
import React, { useEffect, useState } from 'react';
import showTimeAgo from 'showtimeago';

const comments = [
  { id: 1, text: "This is the first comment", date: "2024-07-17T17:12:00.000Z" },
  { id: 2, text: "This is the second comment", date: "2024-07-18T17:12:00.000Z" }
];

function App() {
  const [timeAgoComments, setTimeAgoComments] = useState([]);

  useEffect(() => {
    const updateTimes = () => {
      const updatedComments = comments.map(comment => ({
        ...comment,
        timeAgo: showTimeAgo(comment.date)
      }));
      setTimeAgoComments(updatedComments);
    };

    // Initial update
    updateTimes();

    // Update every minute
    const intervalId = setInterval(updateTimes, 60000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {timeAgoComments.map(comment => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <p>{comment.timeAgo}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
```

## Contributing 🤝
We welcome all contributions! If you have any cool ideas or features you think should be added, please:

1. **Open an Issue**: Start by [opening an issue](https://github.com/jackie1santana/showTimeAgoUtility/issues) to discuss your idea.
2. **Fork the Repository**: [Fork the project](https://github.com/jackie1santana/showTimeAgoUtility/fork) to work on your idea.
3. **Create a Branch**: 
   - For new features: `feature/your-feature-name`
   - For bug fixes: `patch-bug-fix`
   - For tests: `test/your-test-name`
   - For CI/CD: `ci-actions`
4. **Push Your Changes**: Push your changes to your fork.
5. **Submit a Pull Request**: Open a pull request to the appropriate branch of the main repository.

## Branches 🏷️
- **development**: For new features and improvements.
- **patch-bugs**: For bug fixes.
- **test**: For adding or updating tests.
- **ci-actions**: For CI/CD pipeline configurations.
- **main**: The production branch. Changes will be merged here after thorough testing.

Thank you for all your contributions and efforts to improve the ShowTimeAgo utility! Together, we can make this tool more robust and useful for everyone. 🙌

## License 📄
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact 📧
For any questions or feedback, please reach out to Jackie Santana on Twitter at [@js_programmer84](https://twitter.com/js_programmer84) or via email at [santanaj9817@gmail.com](mailto:santanaj9817@gmail.com).

Happy coding! 💻