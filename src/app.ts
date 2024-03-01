const names: Array<string | number> = [`Robin`, `Ain`];

const promise: Promise<any> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});
promise.then((data) => {
  data.split(` `);
});
