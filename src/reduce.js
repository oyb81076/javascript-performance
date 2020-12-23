const array = Array(100).fill(0).map((_, i)=> i);
function sumByReduce(arr){
  let b = 0;
  arr.forEach(x=> b += x)
  return b;
}
function sumByForEach(arr){
  return arr.reduce((a, b)=> a + b, 0)
}
function test(fn, times){
  console.time(fn.name)
  while(times--) {
    fn(array);
  }
  console.timeEnd(fn.name)
}

while(true) {
  test(sumByForEach, 100000)
  test(sumByReduce, 100000)
}
