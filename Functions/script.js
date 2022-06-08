// Basic Functions
// What is a function?
// A function performs a task, gives us results, and does something!
// Syntax:
// function theNameOfTheFunction() {
//     // code to execute!
// }
// Example of a Basic function:
// function sayHello() {
//     console.log("Hello?");
// }
// // Invoking a function
// sayHello();

// Naming Functions
// 1. Use camelaseC for your functions
// 2. Make sure that the name describes what the function is doing
// 3. Use a verb to describe what the function is doing

//  Class Work 1:
// We are going to create a program that will randomly describe an inputted name.
// 1. Create an array of descriptive words.
// 2. Create a function that contains a prompt asking the user for a name.
// 3. Select a random value from the array using Math.random.
// 4. Output into the console the prompt value and the randomly selected array value.
// 5. Invoke the function.

//Solution
//1.
// var arr = [ "Good", "Bad", "Awesome", "Dangerous", "Better" ];
//2.
// function getUserName(    ) {
//     let name = prompt("Tell me your name... ");
//     let randomWord = Math.floor( Math.random() * arr.length );
//     //4.
//     console.log( name + " " + arr[randomWord] );
// }
// //5.
// getUserName(     );

// Parameters and arguments
// function sayHello(  /* parameter */   ) {
//     console.log("Hello?");
// }
// // Invoking a function
// sayHello(  /* argument (s) */  );

// Example

// function callName( name ) {
//     console.log("Hello " + name );
// }
// callName("Toby");

// Class Work 2
// 1. Write a function that takes an argument and a parameter and then multiplies it by 2
// 2. write the result to the console

// Returning function values
// let result = callName( "Harry" ); // Hello harry
// console.log( result) ; //undefined

// function callName( name ) {
//     return "Hello " + name;
// }
// let newFunc = callName( 'Bethel' );
// console.log( newFunc );

// Variable Scope in functions
//Two types of variable scopes:
//1. Global variable
//2. Local variable

// Global variable
// var x = 20;

// function funcScope(){
//     console.log( 20 + x);
// }
// funcScope();

// local variable

// function localScope() {
//     var x = 30;
//     console.log(x);
// }
// localScope();
// console.log( 'The value of x is: ' + x );

// Nesting Functions
// Having a function within a function

function outerFunction() {
    console.log("Outer function");

    function innerFunction() {
        console.log("Inner function");
    }

    innerFunction();
}
outerFunction();

// Exercise
// What value is output into the console?
let val = 10;
function tester(val){
    val += 10; // val = val + 10
    if(val < 100){
        return tester(val);
    }
    return val;
}
tester(val);
console.log(val);

//Explain it
// Post explanation to the google classroom
// 10 Marks