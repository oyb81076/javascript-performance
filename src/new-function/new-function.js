const fs = require('fs');
const path = require('path');
const content = fs.readFileSync(path.join(__dirname, './new-function-content.js'), 'utf-8');
const fn = new Function('param0', 'param1', content);
const result = fn(12, 0);
console.log(result);
