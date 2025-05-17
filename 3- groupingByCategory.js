/*

INPUT:
    const books = [
        { title: "The Lord of the Rings", author: "J.R.R. Tolkien", category: "Fantasy" },
        { title: "Pride and Prejudice", author: "Jane Austen", category: "Romance" },
        { title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy" },
        { title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction" },
        { title: "Sense and Sensibility", author: "Jane Austen", category: "Romance" },
        { title: "Foundation", author: "Isaac Asimov", category: "Science Fiction" },
    ];

OUTPUT:
    {
        "Fantasy": [
            { title: "The Lord of the Rings", author: "J.R.R. Tolkien", category: "Fantasy" },
            { title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy" }
        ],
        "Romance": [
            { title: "Pride and Prejudice", author: "Jane Austen", category: "Romance" },
            { title: "Sense and Sensibility", author: "Jane Austen", category: "Romance" }
        ],
        "Fiction": [
            { title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction" }
        ],
        "Science Fiction": [
            { title: "Foundation", author: "Isaac Asimov", category: "Science Fiction" }
        ]
    }

*/

function groupByCategory(arr) {
    let result = {};
    for (let i = 0 ; i < arr.length ; i++) {
        let obj = arr[i] ;
        let category = obj.category ;
        
        if (!(category in result)) {
            result[category] = [];
        }

        result[category].push(obj);
    }
    return result ;
}

function groupByCategoryBuiltin(arr) {
    return arr.reduce(function (acc , item) {
        let category = item.category ;
        if (!acc[category]) acc[category] = [] ;
        acc[category].push(item);
        return acc ;
    });
}

const books = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", category: "Fantasy" },
    { title: "Pride and Prejudice", author: "Jane Austen", category: "Romance" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction" },
    { title: "Sense and Sensibility", author: "Jane Austen", category: "Romance" },
    { title: "Foundation", author: "Isaac Asimov", category: "Science Fiction" },
];

console.log(groupByCategory(books));
console.log(groupByCategoryBuiltin(books));