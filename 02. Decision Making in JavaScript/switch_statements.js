// alert("Hello");
// Switch statement is not different from the if else if statement.
// var prince = "Welcome";

// if (prince == "Not here"){
//     alert("No where to be found!");
// } else if (prince == "Welcome"){
//     alert("Mr Prince is with us!");
// } else {
//     alert("Welcome any way!");
// }
// The Syntax of the switch statement is:
// switch (expression){
//     case value1:
//         //Code to be executed
//         break;
//     case value2:
//         //Code to be executed
//         break;
//     case value-n:
//         //Code to be executed
//         break;
//     default:
//         // When all other cases are false, i will run
//         break;
// }

let activity = "Learn Coding";

switch(activity) {
    case "Get up":
        console.log("It is 6:30AM");
        break;
    case "Breakfast":
        console.log("It is 7:00AM");
        break;
    case "Drive to Loctech in benz":
        console.log("It is 8:00AM");
        break;
    case "Learn Coding":
        console.log("It is 9:00AM");
        break;
    case "Lunch":
        console.log("It is 12:00PM");
        break;
    case "Drive Home":
        console.log("It is 5:00PM");
        break;
    case "Dinner":
        console.log("It is 6:30PM");
        break;
    case "Sleep":
        console.log("It is 1:00AM");
        break;
    default:
        console.log("We do not do anything");
        break;
}