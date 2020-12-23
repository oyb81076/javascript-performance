const _ = require('lodash')
const count = 100000;
const prop = 100;
const obj = {};
for(let i = 0; i < prop; i++) {
  obj['a' + i] = i;
}
forin();
keys();
entries();
_entries();
_keys();
function forin(){
  console.time('for-in');
  let c = 0;
  for(let i = 0; i < count; i++) {
    for(const key in obj) {
      c += obj[key];
    }
  }
  console.timeEnd('for-in');
}

function keys(){
  console.time('keys');
  let c = 0;
  for(let i = 0; i < count; i++) {
    Object.keys(obj).forEach((key)=> {
        c += obj[key];
    })
  }
  console.timeEnd('keys');
}

function entries(){
  console.time('entries');
  let c = 0;
  for(let i = 0; i < count; i++) {
    Object.entries(obj).forEach(([_, value])=> {
        c += value;
    })
  }
  console.timeEnd('entries');
}

function _entries(){
  console.time('_.entries');
  let c = 0;
  for(let i = 0; i < count; i++) {
    _.entries(obj).forEach(([_, value])=> {
        c += value;
    })
  }
  console.timeEnd('_.entries');
}

function _keys(){
  console.time('_.keys');
  let c = 0;
  for(let i = 0; i < count; i++) {
    _.keys(obj).forEach((key)=> {
        c += obj[key];
    })
  }
  console.timeEnd('_.keys');
}
