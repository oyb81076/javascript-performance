async function promiseRun() {
  console.log("promise run");
  while (true) {
    await new Promise(process.nextTick);
  }
}
function main() {
  promiseRun();
  Promise.resolve().then(()=> {
    console.log("promise next");
  })
  setImmediate(()=> {
    console.log("setImmediate next");
  })
  setTimeout(()=> {
    console.log("timeout next");
  }, 0)
  process.nextTick(()=> {
    console.log("process.nextTick next");
  })
}
main();
