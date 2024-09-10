function getPromise(n) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("success");
      console.log("Resolved successfully");
    }, n * 1000);
  });
}
getPromise(10);
