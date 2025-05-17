//both Objects ===> maybe yes maybe no
//both Arrays ===> maybe yes maybe no 
//both primitives ===> base case 
//Array , object / object , Array ===> not equal

function deepEqual(a , b , visited = new WeakSet()) {
	
	//base cases 
	if (a === undefined || b === undefined) return false;
	if (typeof a !== "object" || a === null || typeof b !== "object" || b === null) return a === b;
	
	//Both are Dates
	if (a instanceof Date && b instanceof Date) {
		return a.getTime() === b.getTime;
	}

	//Both are RegExp
	if (a instanceof RegExp && b instanceof RegExp) {
		return a.source === b.source && a.flags === b.flags;
	}

	//Cirucular reference
	if (visited.has(a) && visited.has(b)) return a === b;

	visited.add(a);
	visited.add(b);

	//Both are not array
	if (Array.isArray(a) !== Array.isArray(b)) return false;
	
	//Both array
	ok = true ;
	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) 
			return false;
		for (let i = 0 ; i < a.length ; i++) 
			if (!deepEqual(a[i] , b[i])) 
				return false;
		return true ;
	}

	//Both objects
	const keysA = Object.keys(a);
	const keysB = Object.keys(b);

	if (keysA.length != keysB.length) return false ;
	
	for (let key of keysA) 
		if (!b.hasOwnProperty(key) || !deepEqual(a[key] , b[key])) 
			return false;
	
	return true ;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })); // Order of keys shouldn't matter
// -> true

console.log(deepEqual(new Date('2023-10-26'), new Date('2023-10-26'))); // -> true
console.log(deepEqual(new Date('2023-10-26'), new Date('2023-10-27'))); // -> false
console.log(deepEqual(/abc/i, /abc/i)); // -> true
console.log(deepEqual(/abc/i, /abd/i)); // -> false
console.log(deepEqual(/abc/i, /ABC/i)); // -> false (case-sensitive flag matters)
