function sync(c, n) {
  while (n--) {
    c++;
  }
  return c;
}
async function asyncNative(c, n) {
  while (n--) {
    c++;
  }
  return c;
}
const AsyncConstructor = Object.getPrototypeOf(async function () {})
  .constructor;
const asyncConstructor = new AsyncConstructor(
  "c",
  "n",
  "while(n--) {c++;} return c;"
);
const asyncFunction = new Function(
  `return async function asyncFunction(c, n){
    while(n--) {c++;}
    return c;
  }`
)();
main();
async function main() {
  await test("sync", sync);
  await test("native", asyncNative);
  await test("sync", sync);
  await test("AsyncConstructor", asyncConstructor);
  await test("new Function", asyncFunction);
}
async function test(label, fn) {
  console.time(label);
  await fn(0, 1000000);
  console.timeEnd(label);
}
