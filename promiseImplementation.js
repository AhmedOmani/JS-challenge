function MyPromise(executer) {

    let state = "pending";
    let value = undefined ;
    let reason = undefined ;
    let onFullfiledCallbacks = [];
    let onRejectedCallbacks = [];

    const resolve = (val) => {
        if (state == "pending") {
            state = "fullfiled";
            value = val ;
            onFullfiledCallbacks.forEach((callback) => callback(value));
        }
    };

    const reject = (res) => {
        if (state == "pending") {
            state = "rejected" ;
            reason = res ;
            onRejectCallbacks.forEach((callback) => callback(reason));
        }
    };

    this.then = (onFullfilled , onRejected) => {
        if (state == "fullfiled" && typeof onFullfilled === "function") {
            if (onFullfilled) resolve(value);
        }
        else if (state == "rejected" && typeof onFullfilled === "function") {
            if (onRejected) reject(reason);
        }
        else {
            onFullfiledCallbacks.push(onFullfilled);
            onRejectedCallbacks.push(onRejected);
        }
    }

    this.catch = (onRejected) => {
        return this.then(null , onRejected);
    }

    try {
        executer(resolve , reject) ;
    } catch (error) {
        reject(error);
    }
}

const promise = new MyPromise((resolve , reject) => {
    setTimeout(() => {
        console.log("A7A");
        resolve("2ol yarab");
    }, 1000);
});

promise.then((val) => {
    console.log("A7a with :" , val);
});
promise.then((val) => {
    console.log("A7a2 with :" , val);
});
promise.then((val) => {
    console.log("A7a3 with :" , val);
});