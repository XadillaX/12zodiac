# Constellation

Calculate out which constellation one certain day is.

## Installation

```shell
$ npm install node-constellation --save
```

## API

```js
constellation(MONTH, DAY[, i18n]);
```

eg.

```javascript
const constellation = require("node-constellation");
const cons1 = constellation(12, 19, "zh-cn");
const cons2 = constellation(11, 14, "en");
const cons3 = constellation(1, 1, "zh-tw");
const cons4 = constellation(1, 1);
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
