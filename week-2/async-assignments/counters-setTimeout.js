let count = 0;

function counter() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(count++);
    }, 1000);
  });
}
// counter()
//   .then(function (value) {
//     console.log(value);
//     return counter();
//   })

//Down counter
// function logCounters(n) {
//   if (n <= 0) return Promise.resolve();
//   return counter().then(function () {
//     console.log(n);
//     return logCounters(n - 1);
//   });
// }
// logCounters(10);

//Up Counter
// function logCounters(n) {
//   if (n <= 10) {
//     return counter().then(function () {
//       console.log(n);
//       n = n + 1;
//       return logCounters(n);
//     });
//   } else return Promise.resolve();
// }
// logCounters(1);
