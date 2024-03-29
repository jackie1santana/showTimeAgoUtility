# Show Time Ago Utility

[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/) <a href="https://www.npmjs.com/package/showtimeago"><img src="https://img.shields.io/npm/v/showtimeago.svg?style=flat-square&colorB=51C838"
alt="NPM Version"></a> <a href="https://github.com/jackie1santana/showTimeAgoUtility/actions/workflows/unit-test-action.yml">[![Test showTimeAgo Utility](https://github.com/jackie1santana/showTimeAgoUtility/actions/workflows/unit-test-action.yml/badge.svg)](https://github.com/jackie1santana/showTimeAgoUtility/actions/workflows/unit-test-action.yml)</a> [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)



> Developed by Jackie Santana

###### This an Open Source utility project. I welcome any & all contributions via the development branch only.
---

### What is Show Time Ago?
> Show Time Ago is a utility that allows you to see how long ago a date was. Just add in your ISO date: `showTimeAgo("2022-06-20T13:42:29-05:00")` and this utility will dynamically update the time with the suffix 'ago'. ex: `2 minutes ago` `1 hour ago..` `2 days ago..` `1 month ago..` `1 year ago..`

##### List of time suffixes:
- minutes, hours, days, weeks, months, years 'ago..'

##### Default: showTimeago updates on page reload
 _dynamically update time without page reload? code examples shown below_

## Installation
 _To install this utility, you need to install the following dependencies:_

`npm i showtimeago` or `npm install showtimeago`

___
## Usage

**Import**

- ES6: `import showTimeAgo from 'showtimeago'`
- commonJS: `const showTimeAgo = require('showtimeago')`

ex:
```
//vanilla javascript
showTimeAgo("2022-06-20T13:42:29-05:00")

//in react
{showTimeAgo('2022-07-02T23:12:01.449Z')}

console.log(showTimeAgo('2022-07-02T23:12:01.449Z'))
```

This utility only takes in a newDate() format time, for example: 
`new Date().toISOString()` 
outputs: `2022-07-02T23:12:01.449Z` _ISO date format_

**CDN**: 
- https://cdn.jsdelivr.net/npm/showtimeago/index.js 
- https://unpkg.com/browse/showtimeago/index.js

_This essentially a common Js module so ignore error: `Uncaught ReferenceError: module is not defined
    at showTimeAgo.js:115:1` via client side._

**CDN Set up:**

`<script crossorigin type="text/javascript" src="https://unpkg.com/browse/showtimeago/index.js"></script>`
```
const showTimeAgo = showtimeago

console.log(showTimeAgo(new Date()))
```

**Yarn**: [https://yarnpkg.com/package/showtimeago ](https://yarnpkg.com/package?q=showtimeago&name=showtimeago&version=3.3.13)`yarn add showtimeago`
___
#### By default `showTimeAgo` only updates on page reload

_How to show `showTimeAgo` updated time without a page reload ?_

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
_With the code above `ShowTimeAgo` will dynamically change per minute without a page reload_

#### Contributing
---
1) Fork it (https://github.com/yourname/yourproject/fork)
2) Create your feature branch (git checkout -b feature/fooBar)
3) Commit your changes (git commit -am 'Add some fooBar')
4) Push to the branch (git push origin feature/fooBar)
5) Create a new Pull Request
