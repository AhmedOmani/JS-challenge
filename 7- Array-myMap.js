

Array.prototype.myMap = function(cb) {
    const result = [];
    for (let i = 0 ; i < this.length ; i++) {
        result.push(cb(this[i] , i , this)); //This what real MAP does.
    }
    return result ;
}

const arr = [1 , 2 , 3] ;

const res = arr.myMap((X , idx) => {return X * 2});

console.log(res);