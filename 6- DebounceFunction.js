function debounce(func , delay) {
    let timerID ;
    let count = 1 ;
    return function(name) {
        clearTimeout(timerID);
        console.log(`Before ${name}:  ` + timerID);
        timerID = setTimeout(function () {
            func(name);
        } , delay);
        console.log(`After ${name}: ` + timerID);
        count++;
    }
    
}

function sayHola(name) {
    console.log("Hola " + name)
}

const debounceHello = debounce(sayHola , 1000);

debounceHello("Ahmed");
setTimeout(() => debounceHello("Saber"), 2100);
setTimeout(() => debounceHello("Rajab") , 1000);


