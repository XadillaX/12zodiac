# 12 Zodiac

Calculate out which zodiac one certain day is.

> This package was known as **node-constellation** before.

## Installation

```sh
$ npm install 12zodiac --save
```

## API

```js
constellation(MONTH, DAY[, i18n]);
```

eg.

```javascript
const zodiac = require("12zodiac");
const z1 = zodiac(12, 19, "zh-cn"); //< 射手座
const z2 = zodiac(11, 14, "en");
const z3 = zodiac(1, 1, "zh-tw");
const z4 = zodiac(1, 1);
```

### Supported Languages

  + ar
  + en **[default]**
  + symbol
  + zh-cn
  + zh-tw

### Contributors

You can contribute to it and make pull request to support other languages or functions.

  + [@poying](https://github.com/poying)

> **Attention:** in alphabetical order.
