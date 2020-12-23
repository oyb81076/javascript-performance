/**
 * 结论 相差无几
 * # number firstly
 * preheat: 0.131ms
 * number: 8.73ms
 * string: 8.177ms
 *
 * # string firstly
 * preheat: 0.152ms
 * string: 8.17ms
 * number: 6.936ms
 */
// 预热
test("preheat", 1000, 0, 0);
const v = 1;
const s = "NumberLiteral";
test("string", 10000000, s, "NumberLiteral");
test("number", 10000000, 1, 1);
function test(label, times, a, b) {
  console.time(label);
  while (times--) {
    compare(a, b);
  }
  console.timeEnd(label);
}

function compare(a, b) {
  return a === b;
}
