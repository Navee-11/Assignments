function sleepCompletely() {
  return new Promise((res, rej) => {
    let n = 1;
    while (n > 0) {
      n++;
    }
    resolve();
  });
}
sleepCompletely();
