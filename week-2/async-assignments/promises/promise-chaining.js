const asyncFunc1 = (t) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(t);
    }, t * 1000);
  });
};

const asyncFunc2 = (t) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(t);
    }, t * 1000);
  });
};

const asyncFunc3 = (t) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(t);
    }, t * 1000);
  });
};

const calculateResolveTime = (t1, t2, t3) => {
  let startTime = new Date().getTime();
  asyncFunc1(t1)
    .then((res) => {
      return asyncFunc2(t2);
    })
    .then((res) => {
      return asyncFunc3(t3);
    })
    .then((res) => {
      console.log(new Date().getTime() - startTime);
    });
};
calculateResolveTime(5, 10, 15);
