function test(fn, times){
  console.time(fn.name)
  while(times--) {
    fn(times % 20);
  }
  console.timeEnd(fn.name)
}
const bySwitch = (value)=> {
  switch(value) {
    case 0: return 3;
    case 1: return 2;
    case 2: return 1;
    case 3: return 5;
    case 4: return 10;
    case 5: return 0;
    case 6: return 10;
    case 7: return 0;
    case 8: return 10;
    case 9: return 0;
    default: return 1;
  }
}
const byObject = (value)=> {
  const rtn = reducers.value;
  return rtn === undefined ? 1 : rtn;
}
const reducers = {
  0: 3,
  1: 2,
  2: 1,
  3: 5,
  4: 10,
  5: 0,
  6: 10,
  7: 0,
  8: 10,
  9: 0,
}

while(true) {
  test(bySwitch, 10000000)
  test(byObject, 10000000)
}
