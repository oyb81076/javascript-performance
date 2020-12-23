
const obj = {};
for(let i = 0; i < 1000; i++) {
  obj['a' + i] = i;
}

function objectKeys(obj){
  return Object.keys(obj)
}
function reflectOwnKeys(obj) {
  return Reflect.ownKeys(obj)
}
function forIn(obj){
  for(const k in obj);
}

function test(fn, times){
  console.time(fn.name)
  while(--times) {
    fn(obj);
  }
  console.timeEnd(fn.name)
}

while(true) {
  const times = 1000;
  test(objectKeys, times)
  test(reflectOwnKeys, times)
  test(forIn, times)
}
