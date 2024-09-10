const asyncFunc = (t) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(t);
    }, t * 1000);
  });
};

const calculateResolveTime = (t1, t2, t3) => {
  let startTime = new Date().getTime();
  console.log(startTime);
  return Promise.all([asyncFunc(t1), asyncFunc(t2), asyncFunc(t3)]).then(() => {
    let resolveTime = new Date().getTime() - startTime;
    console.log(resolveTime);
    return resolveTime;
  });
};
calculateResolveTime(5, 10, 15);
