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

###### This an Open Source utility project. I welcome any & all contributions via the development branch only.
---

### What is Show Time Ago?
> Show Time Ago is a utility that displays how long ago a given date was. Simply provide your ISO date: `showTimeAgo("2022-06-20T13:42:29-05:00")`, and this utility will dynamically update the time with the suffix 'ago'. For example: `2 minutes ago, 1 hour ago, 2 days ago, 1 month ago, 1 year ago`.

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
showTimeAgo("2022-06-20T13:42:29-05:00")

// In React
{showTimeAgo('2022-07-02T23:12:01.449Z')}

console.log(showTimeAgo('2022-07-02T23:12:01.449Z'))
```

This utility only accepts a new Date() format time. For example:
`new Date().toISOString()` 
outputs: `2022-07-02T23:12:01.449Z` _ISO date format_

**CDN 🌐**: 
- https://cdn.jsdelivr.net/npm/showtimeago/index.js 
- https://unpkg.com/browse/showtimeago/index.js

_This is essentially a CommonJS module, so you may ignore the error: Uncaught ReferenceError: module is not defined at showTimeAgo.js:115:1 on the client side._

**CDN Set up:**

`<script crossorigin type="text/javascript" src="https://unpkg.com/browse/showtimeago/index.js"></script>`
```
const showTimeAgo = showtimeago

console.log(showTimeAgo(new Date()))
```

**Yarn**: [https://yarnpkg.com/package/showtimeago ](https://yarnpkg.com/package?q=showtimeago&name=showtimeago&version=3.3.13)`yarn add showtimeago`
___
#### By default, showTimeAgo updates only when the page is reloaded

_How to display showTimeAgo with real-time updates without reloading the page?_

**Vanilla Javascript Example:**

```
const showTimeAgo = require('showtimeago');

 let showPastTime = showTimeAgo('2022-07-02T23:12:01.449Z')
 const showTimeAgoToBrowser = document.querySelector('div')
 showTimeAgoToBrowser.innerHTML = `${showPastTime}`;

setInterval(() => {
    showPastTime = showTimeAgo('2022-07-02T23:12:01.449Z')
    showTimeAgoToBrowser.innerHTML = `${showPastTime}`;

    // 600000 = 1 minute in ms
}, 60000)

clearInterval(showPastTime)
```

**React Example:**
```
import * as React from "react";
import showTimeAgo from "showtimeago";

export default function App() {
  const [showPastTime, setPastTime] = React.useState(null);

  React.useEffect(() => {
    setPastTime(showTimeAgo('2022-07-02T23:12:01.449Z'));

    const timer = window.setInterval(() => {
      setPastTime(showTimeAgo('2022-07-02T23:12:01.449Z'));

      // 600000 = 1 minute in ms
    }, 60000);

    return () => window.clearInterval(timer);
  }, [showPastTime]);

  return <div>User Posted Comment { showPastTime }</div>;
}
```
_With the code above, ShowTimeAgo will automatically update every minute without needing a page reload._

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