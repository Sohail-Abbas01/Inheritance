//What is Inheritance in JavaScript?
//In JavaScript, inheritance allows one object to access properties and methods from another object. You can think of it like a child inheriting features from a parent.

//We will create a "parent" object (like a Person) and a "child" object (like a Student) that will inherit properties and methods from Person.

// Step 1: Create a parent object (Person)
let person = {
    name: "Alice",
    age: 25,
    sayHello: function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};
//.....
// Step 2: Create a child object (Student) that inherits from person
let student = Object.create(person);

// Add more properties specific to the student
student.grade = "A";

// Add a method specific to student
student.study = function() {
    return `I am studying for my exams.`;
};

// Step 3: Call methods on the student object
console.log(student.sayHello());  // Output: Hello, my name is Alice and I am 25 years old.
console.log(student.study());     // Output: I am studying for my exams.
