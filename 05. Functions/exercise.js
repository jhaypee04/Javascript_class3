// Small Exercise
// 1. Create a prompt to ask the user's age
// var userAge = prompt("How old are you!");
// console.log( typeof userAge );  //String
// 2. Convert the response from the prompt to a number (use this in built function: number()  )
// var newAge = Number(userAge);
// console.log( typeof newAge);
// 3. Declare a message variable that you will use to hold the console message for the user
// var message;
// console.log( typeof message);
// 4. If the input age is equal to or greater than 21, set the message variable to "confirm entry to a venue and the ability to purchase alcohol"
// if( newAge >= 21){
//     message = "confirm entry to a venue and the ability to purchase alcohol";
// }else if( newAge >= 19){
//     message = "confirm entry to the venue but deny the purchase of alcohol";
// }else {
//     message = "deny entry";
// }
// 5. If the input age is equal to or greater than 19, set the message variable to "confirm entry to the venue but deny the purchase of alcohol"
// 6. Provide a default else statement to set the message variable to deny entry if
// none are true
// 7. Output the response message variable to the console
// console.log( message );

// Class Work (on Decision Making)
// 1. Create a variable with a Boolean value.
// var a = false;
// 2. Output the value of the variable to the console.
// console.log(a);
// 3. Check whether the variable is true and if so, output a message to the console, using the following syntax:
// if(myVariable) {
//     //action
// }
// if( a ){
//     console.log("True");
// }
// 4. Add another if statement with an ! (NOT operator) in front of the variable to check whether the condition is not true, and create a message that will be printed to the console in that instance. You should have twwo if statements, one with a ! (Not Operator) and the other without. You could also use an if and an else statement instead - experiment!
// if( !a ){
//     console.log("False");
// }
// 5. Change the variable to the opposite to see how the result changes(optional).


// Class Work 2 ( still on Decision Making)

// As discussed in JavaScript Fundamentals, the JavaScript function Math.random() will return a random number in the range of 0 to less than 1, including 0 but not 1. You can then scale it to the desired range by multiplying the result and using Math.floor() to round it down to the nearest whole number; for example, to generate a random number between 0 and 9: 

// //random number between 0 and 1
// let randomNumber = Math.random();
// //multiply by 10 to obtain a number between 0 and 10
// randomNumber = randomNumber * 10; // can return 8.9 = 8
// //so remove the decimal place value to provide a whole number using Math.ceil
// RandomNumber = Math.floor(randomNumber);



// In this exercise, we'll create a Magic 8-Ball random answer generator:
// 1. Start by setting a variable that gets a random value assigned to it. The value is assigned by generating a random number 0-5, for 6 possible results. You can increase this number as you add more results.
// var Ball = Math.floor( Math.random() * 6 );
// 2. Create a prompt that can get a string value input from a user that you can repeat back in the final output.
// var message = prompt("What is your favourite color?");
// 3. Create 6 responses using the switch statement, each assigned to a different value from the random number generator.
// var MagicBall;
// var info_to_user;
// switch (Ball){
//     case 0:
//         MagicBall = Ball;
//         info_to_user = "You got a bag as a gift because Magic Number is " + MagicBall;
//         break;
//     case 1:
//         MagicBall = Ball;
//         info_to_user = "You won a pen because Magic Number is " + MagicBall;
//         break;
//     case 2:
//         MagicBall = Ball;
//         info_to_user = "You are doing well, try better because Magic Number is " + MagicBall;
//         break;
//     case 3:
//         MagicBall = Ball;
//         info_to_user = "You got a pair of shoes because Magic Number is " + MagicBall;
//         break;
//     case 4:
//         MagicBall = Ball;
//         info_to_user = "You won a pencil because Magic Number is " + MagicBall;
//         break;
//     case 5:
//         MagicBall = Ball;
//         info_to_user = "You are doing well, Good job because Magic Number is " + MagicBall;
//         break;
    
// }
// console.log( `Your favorite color is ${message}! \n ${info_to_user} ` ); // Using String Template Literal
// console.log( "Your favorite color is " + message + "\n " + info_to_user ); //Using Double Quotes
// 4. Create a variable to hold the end response, which should be a sentence printed for the user. You can assign different string values for each case, assigning new values depending on the results from the random value.
// 5. Output the user's original answer, plus the randomly selected case response to the console after the user enters their question.

// Class Work Solution (On Loops )
// 1. What will be outputted to the console in this instance? And know Why!
let a = 5;
let b = 10;
let c = 20;
let d = 30;
console.log(a > b || b > a); //true for if one or both operand is true.
console.log(a > b && b > a); //false because both have to be true for the whole condition to be true.
console.log(d > b || b > a);  //true
console.log(d > b && b > a); 

// Ternary Operation:
//Syntax
// (condition) ? True : False
// So the ternary operator states that if the condition is true, then the first expression after the question mark will run. If the condition evaluates to false , then the second expression, after the colon (:) will run.

// 2. What will be outputted to the console in this instance?
// let val = 100;
// let message = (val > 100) ? `${val} was greater than 100` : `${val} was LESS or Equal to 100`;
// console.log(message);
// let check = (val % 2) ? `Odd` : `Even`;
// check = `${val} is ${check}`;
// console.log(check);


// Self-Check
// 1. Set a variable name and assign a function to it. Create a function expression
// with one parameter that outputs a provided argument to the console.
// 2. Pass an argument into the function.
// 3. Create the same function as a normal function declaration.