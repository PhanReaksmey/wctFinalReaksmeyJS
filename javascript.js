function createCounter() {
    let count = 0; 
    return function() {

        console.log('Student Name:Phan Reaksmey');
        count++; 
        return count;
    }
}

// Create a counter instance
const counter = createCounter();

console.log(counter()); // Output: Student Name: Your Full Name, 1
console.log(counter()); // Output: Student Name: Your Full Name, 2
console.log(counter()); // Output: Student Name: Your Full Name, 3
