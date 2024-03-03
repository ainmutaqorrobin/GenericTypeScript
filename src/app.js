var names = ["Robin", "Ain"];
// const promise: Promise<any> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });
// promise.then((data) => {
//   data.split(` `);
// });
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
console.log(merge({ name: "robin" }, { age: 24 }));
