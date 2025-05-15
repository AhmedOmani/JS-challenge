
function executeSequentially(arr , X) {
    console.log("Running: " + arr[0].name);
    let currentPromise = arr[0].func(X);
    
    for (let i = 1 ; i < arr.length ; i++) {
        
        let currentTask = arr[i].func;

        currentPromise = currentPromise.then(function(prevResultPromise) {
            if (prevResultPromise === null) {
                console.log("Terminating early due to null");
                return null ;
            }
            console.log("Running: " + arr[i].name);
            return currentTask(prevResultPromise);
        });

    }
    
    return currentPromise;
}


function asyncTask1() {
    return new Promise((resolve , reject) => {
        console.log("First Task");
        resolve("The data you wait for");
    });
}

function asyncTask2(val) {
    return new Promise((resolve , reject) => {
        console.log("Second Task");
        resolve(null);
    });
}

function asyncTask3(val) {
    return new Promise((resolve, reject) => {
        console.log("Third Task");
        resolve(val);
    });
}

const promisesArray = [asyncTask1 , asyncTask2 , asyncTask3];

const task = [
  (x) => Promise.resolve(x + 1),
  (x) => Promise.resolve(x * 2),
  (x) => Promise.resolve(x - 3)
];

const tasks = [
  { name: "Add One", func: (x) => Promise.resolve(x + 1) },
  { name: "Double It", func: (x) => Promise.resolve(x * 2) },
  { name: "Subtract 3", func: (x) => Promise.resolve(x - 3) },
];

executeSequentially(tasks , 5).then((val) => console.log(val));

console.log("End of initial phase");