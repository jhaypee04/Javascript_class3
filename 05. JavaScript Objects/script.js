// Objests
//Syntax
var car = {
    name: 'chevrolet',
    mileage: 10000,
    color: 'silver'
}
// Create a dog object
let dog = {
    dogName: 'Bingo',
    weight: 3.5,
    color: 'light brown',
    breed: 'Dobberman',
    age: 3,
    burglarBitter: false
};// A dog object with its properties.

// Referencing/Getting the Values from the Object
var bingo = dog.dogName; // 1. Dot notation is used to reference the object values
console.log(bingo);
console.log(car.name);

// Updating Objects
dog.weight = 4;
console.log(dog);

// Class Work
// 1. Create a new myCar object for a car. Add some properties, including, but not limited to, make and model, and values for a typical car or your car. Feel free to use booleans, strings, or numbers.
//Solution
let myCar = {
    make:  'volvo',
    color: 'black',
    speed: '300kmh',
    model: 'volvo2010'
}

// 2. Create a variable that can hold the string value color. This variable containing a string value color can now be used to reference the property name within myCar. Then, use the variable within the square bracket notation to assign a new value to the color property in myCar.
// dog['weight'] 2. Square Bracket Notation
// Solution
let color = 'color';
myCar[color] = 'red';
console.log(myCar);

// 3. Use that same variable and assign a new property string value to it, such as forSale. Use the bracket notation once again to assign a new value to the forSale property to indicate whether the car is available for purchase.
//Solution
color = 'forSale';
myCar[color] = true;
console.log(myCar);

// 4. Output make and model into the console.


// 5. Output the value of forSale into the console.


//Nesting Objects and Arrays
let myCar1 = {
    //Object in Object
    make: {
        carName1: 'volvo',
        carName2: 'Benz',
        carName3: 'Ford'
    },
    color: 'black',
    speed: '300kmh',
    //Array in Object
    model: ['volvo2010', 'volvo470' ]
}

// Referencing the values from nested objects and arrays
// For Arrays
var model = myCar1.model[1]
console.log(model);
//For Objects
var make = myCar1.make.carName2;
console.log(make);

// Objects in array
// var arr = [ {}, {}, {} ];
// var arr = [ 
//     {
//         a:'value1',
//         b: 'value2',
//         c: 'value3'
//     }, 
//     {
//         d:'value1',
//         e: 'value2',
//         f: 'value3'
//     }
//  ];
var addresses = [
    {
        street: 'Okpoyo Cr',
        number: 4,
        zipcode: 123456,
        city: 'PH City',
        state: 'Rivers'
    },
    {
        street: '1st Boulevard',
        number: 13,
        zipcode: 1234,
        city: 'Somewhere in Anywhere',
        state: 'I dont know'
    }
];
let streetName = addresses[0].street;
console.log(streetName);

// Class Work 2
// 1. Create an object named people that contains an empty array that is called friends.
//Solution
// let people = {
//     friends: []
// };
// 2. Create three variables, each containing an object, that contains one of your friend's first names, last names, and an ID value.
//Solution
var data1 = {
    firstName: 'Felix',
    lastname: 'PrinceWill',
    id: 1
}
var data2 = {
    firstName: 'Eddy',
    lastname: 'Queen',
    id: 2
}
var data3 = {
    firstName: 'Fola',
    lastname: 'Tinubu',
    id: 3
}

// 3. Add the three friends to the friend array.
//Solution
// let people = {
//     friends: [ data1, data2, data3 ]
// };

// 4. Output it to the console.
console.log(people.friends);



// Class Work 3 (Submit to Google ClassRoom )
// Title: Company product catalog
// In this project, you will implement a data structure for a product catalog and create queries to retrieve data.
// 1. Create an array to hold an inventory of store items.
// 2. Create three items, each having the properties of name, model, cost, and quantity.
// 3. Add all three objects to the main array using an array method, and then log the inventory array to the console.
// 4. Access the quantity element of your third item, and log it to the console.
// Experiment by adding and accessing more elements within your data structure.