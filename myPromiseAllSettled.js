
function myPromiseAllSettled(promises) {
  return new Promise((resolve, reject) => {

    let settledPromises = 0;
    const result = [] ;

    if (promises.length === 0) {
      resolve([]);
      return ;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        value => {
          result[index] = {status: "fulfilled" , value};
          settledPromises += 1;
          if (settledPromises === promises.length) resolve(result);
        },
        reason => {
          result[index] = {status: "rejected" , reason};
          settledPromises += 1;
          if (settledPromises === promises.length) resolve(result);
        }
      )

    });

  });
}

const promise = new Promise((resolve , reject) => {
  console.log("Hey...");
  resolve("what is going on");
});

const promise2 = new Promise((resolve , reject) => {
  console.log("Hey2 ...");
  reject("what is going on here");
});

const promises = [promise , promise2];
myPromiseAllSettled(promises).then(console.log) ;