testCreateMap(10000, 100);
testCreateObject(10000, 100);
testGetObject(10000, 100);
testGetMap(10000, 100);

function testGetObject(time, length) {
  const obj = createObject(length);
  const label = "getObject:" + time + "/" + length;
  let total = 0;
  console.time(label);
  while (time--) {
    for (let i = 0; i < length; i++) {
      total += obj["a" + i];
    }
  }
  console.timeEnd(label);
}
function testGetMap(time, length) {
  const obj = createMap(length);
  const label = "getMap:" + time + "/" + length;
  let total = 0;
  console.time(label);
  while (time--) {
    for (let i = 0; i < length; i++) {
      total += obj.get("a" + i);
    }
  }
  console.timeEnd(label);
}

function testCreateObject(time, length) {
  const label = "createObject:" + time + "/" + length;
  console.time(label);
  while (time--) {
    createObject(length);
  }
  console.timeEnd(label);
}
function testCreateMap(time, length) {
  const label = "createMap:" + time + "/" + length;
  console.time(label);
  while (time--) {
    createMap(length);
  }
  console.timeEnd(label);
}

function createObject(count) {
  const obj = {};
  for (let i = 0; i < count; i++) {
    obj["a" + i] = i;
  }
  return obj;
}
function createMap(count) {
  const obj = new Map();
  for (let i = 0; i < count; i++) {
    obj.set("a" + i, i);
  }
  return obj;
}
