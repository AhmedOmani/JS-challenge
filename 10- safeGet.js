
//Assume first that path is a string.
function safeGet(obj , path , defaultVal) {
    if (obj === null) return defaultVal ;

    //Normalize the path
    const keys = Array.isArray(path) ? path : (typeof path === 'string' && path.length > 0) ? path.split(".") : [];

    if (keys.length === 0) return obj ;

    let current = obj ;
    for (let i = 0 ; i < keys.length ; i++) {
        if (current === null) return defaultVal ;
        current = current[keys[i]];
    }

    return current !== undefined ? current : defaultVal ;
}

const data = {
    user: {
        profile: {
            name: "Alice",
            hobbies: ["reading", "traveling"]
        }
    }
};

console.log(safeGet(data, "user.profile.name", "Unknown"));             // "Alice"
console.log(safeGet(data, ["user", "profile", "name"], "Unknown"));     // "Alice"
console.log(safeGet(data, "user.profile.age", 25));                     // 25 (not found)
console.log(safeGet(data, "user.profile.hobbies.0", "None"));           // "reading"
console.log(safeGet(data, "", "default"));                              // Returns full data object
console.log(safeGet(null, "user.name", "Unknown"));                     // "Unknown"