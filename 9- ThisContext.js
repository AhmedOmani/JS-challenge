

function test() {
    console.log(this);
}
test();

const lol = () => {
    console.log(this);
}
lol();

const obj = {
    name: "Ali",
    Fly: function () {
        console.log(this.name);
    }
}
obj.Fly() // it will print the name becuase the regular function has its own `this`.

const objArrow = {
    name: "Ali",
    Fly: () => {
        console.log(this.name);
    }
}

objArrow.Fly(); //It will gives undefined becuase ArrowFunction doesnot have their own `this`.