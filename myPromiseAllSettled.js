function myPromiseAllSettled(promises) {
  return new Promise((resolve) => {
    // 1. Array to store the results of each Promise.  Crucially, this maintains order.
    const results = [];
    // 2. Counter to track how many Promises have settled (resolved or rejected).
    let settledCount = 0;

    // 3. If the input array is empty, resolve immediately with an empty array.
    if (promises.length === 0) {
      resolve([]);
      return;
    }

    // 4. Iterate over the input array of Promises.
    promises.forEach((promise, index) => {
      // 5. Use .then() and .catch() to handle both resolution and rejection.
      promise
        .then((value) => {
          // 6. When a Promise resolves, store the result.
          results[index] = { status: 'fulfilled', value };
          settledCount++;
          // 7. If all Promises have settled, resolve the main Promise.
          if (settledCount === promises.length) {
            resolve(results);
          }
        })
        .catch((reason) => {
          // 8. When a Promise rejects, store the reason.
          results[index] = { status: 'rejected', reason };
          settledCount++;
          // 9. If all Promises have settled, resolve the main Promise.
          if (settledCount === promises.length) {
            resolve(results);
          }
        });
    });
  });
}

// Example Usage:
const promise1 = Promise.resolve(1);
const promise2 = Promise.reject(new Error("Error 2"));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 100));
const promise4 = new Promise((resolve, reject) => setTimeout(() => reject("Timeout 4"), 50));

const promises = [promise1, promise2, promise3, promise4];

myPromiseAllSettled(promises)
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error("Unexpected error:", error); // This should not happen in this implementation.
  });
