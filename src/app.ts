// const names: Array<string | number> = [`Robin`, `Ain`];

// const promise: Promise<any> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });
// promise.then((data) => {
//   data.split(` `);
// });
let newobject: object;

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

newobject = merge({ name: `robin` }, { age: 24 });
console.log();
