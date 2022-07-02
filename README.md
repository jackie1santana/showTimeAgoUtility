# Show Time Ago Utility
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)

> Developed by Jackie Santana

###### This an Open Source utility project. I welcome any & all contributions via the development branch only.
---

### What is Show Time Ago?
> Show Time Ago is a utility that allows you to see how long ago a date was. Just add in your ISO date: `showTimeAgo("2022-06-20T13:42:29-05:00")` and this utility will dynamically display the time with the suffix 'ago'. ex: `2 minutes ago` `1 hour ago..` `2 days ago..` `1 month ago..` `1 year ago..`

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

_currently not available via cdn_

ex:
```
//vanilla javascript
showTimeAgo("2022-06-20T13:42:29-05:00")

//in react
{showTimeAgo("2022-06-20T13:42:29-05:00")}

console.log(showTimeAgo("2022-06-20T13:42:29-05:00"))
```

This utility only takes in a newDate() format time, for example: 
`new Date().toISOString()` 
outputs: `2022-06-20T13:42:29-05:00` _ISO date format_

---
#### By default `showTimeAgo` only updates on page reload

_How to show `showTimeAgo` updated time without a page reload ?_

**Vanilla Javascript Example:**

```
const showTimeAgo = require('showtimeago');

 let showPastTime = showTimeAgo("2022-07-01T22:28:29-05:00")
 let showTimeAgoToBrowser = document.querySelector('div')
 showTimeAgoToBrowser.innerHTML = `${timer}`;

setInterval(() => {
    showPastTime = showTimeAgo("2022-07-01T22:28:29-05:00")
    showTimeAgoToBrowser.innerHTML = `${showPastTime}`;

    // 600000 = 1 minute in ms
}, 60000)
```

**React Example:**
```
import * as React from "react";
import showTimeAgo from "showtimeago";

export default function App() {
  const [showPastTime, setPastTime] = React.useState(null);

  React.useEffect(() => {
    setPastTime(showTimeAgo("2022-07-02T02:04:33.947Z"));

    const timer = window.setInterval(() => {
      setPastTime(showTimeAgo("2022-07-02T02:04:33.947Z"));

      // 600000 = 1 minute in ms
    }, 60000);

    return () => window.clearInterval(timer);
  }, [showPastTime]);

  return <div>User Posted Comment { showPastTime }</div>;
}

```
_With the code above `ShowTimeAgo` will dynamically change per minute without a page reload_

#### Contributing
***
1) Fork it (https://github.com/yourname/yourproject/fork)
2) Create your feature branch (git checkout -b feature/fooBar)
3) Commit your changes (git commit -am 'Add some fooBar')
4) Push to the branch (git push origin feature/fooBar)
5) Create a new Pull Request
