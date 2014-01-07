Constellation
==================

Calculate out which constellation one certain day is.

Usage
------------------

```shell
$ npm install node-constellation
```

```javascript
var constellation = require("node-constellation");
var cons1 = constellation(12, 19, "zh-cn");
var cons2 = constellation(11, 14, "en");
```

Attention
------------------

It only support `zh-cn` and `en` so far. You can contribute to it and pull your request to support other languages.
