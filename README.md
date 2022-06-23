# Show Time Ago Utility
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)

> Developed by Jackie Santana

###### This an Open Source utility project. I welcome any & all contributions via the development branch only.
---

### What is Show Time Ago?
> Show Time Ago is a utility that allows you to see how long ago a date was. Just add in your ISO date: `showTimeAgo("2022-06-20T13:42:29-05:00")` and this utility will dynamically display the time with the suffix 'ago'. ex: `2 minutes ago` `1 hour ago..` `2 days ago..` `1 month ago..` `1 year ago..`

##### List of time suffixes:
- minutes, hours, days, weeks, months, years 'ago..'

**Installation**
 _To install this utility, you need to install the following dependencies:_

`npm i showtimeago` or `npm install showtimeago`

**Import**

`import { showTimeAgo } from 'show-time-ago';`

examples of usage: 
```
//vanilla javascript
showTimeAgo("2022-06-20T13:42:29-05:00")

//in react
{showTimeAgo("2022-06-20T13:42:29-05:00")}

console.log(showTimeAgo("2022-06-20T13:42:29-05:00"))
```

this utility only takes in a ISO date, for example: 
`new Date().toISOString()` 
outputs: 2022-06-20T13:42:29-05:00 _ISO date format_

#### Contributing
***
1) Fork it (https://github.com/yourname/yourproject/fork)
2) Create your feature branch (git checkout -b feature/fooBar)
3) Commit your changes (git commit -am 'Add some fooBar')
4) Push to the branch (git push origin feature/fooBar)
5) Create a new Pull Request
