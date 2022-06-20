//DOM
//To get html elements using the DOM. We have a special object to help us. Which is the document object
//Getting ID from HTML 
var element = document.getElementById('element');
element.innerHTML = 'Hello World';

//Class Work 1
// Try experimenting with getting elements by their IDs:
// 1. Create an HTML element and assign an ID in the element attribute.
// 2. Select the page element using its ID.
var para = document.getElementById('para'); // an element
// 3. Output the selected page element into the console
// console.log(para);

//Getting CLASS from HTML
var h2 = document.getElementsByClassName('h2'); // array of element
console.log(h2);

//Class Work 2
// Select all matching page elements using the class name of the element.
// 1. Create a simple HTML file to work on.

// 2. Add three HTML elements adding the same class to each. You can use different tags as long as the same element class is included. Add some content within each element so you can distinguish between them.

// 3. Add a script element to your file, and within it select the page elements by class name. Assign the resulting HTMLCollection values to a variable.

// 4. You can use an index value to select the individual HTMLCollection items, just as you would for array items. Starting with an index of 0, select one of the page elements with the class name and output the element into the console.
var divElement = document.getElementsByClassName('divElement');
console.log(divElement);
console.log(divElement[2]);

//Accessing Element with a CSS Selector
// querySelector(h1) //Single first h1
// or querySelectorAll('h1') // All h1

// var elem =  document.querySelector('h1');
// console.log(elem.innerHTML);

// var elem1 =  document.querySelectorAll('h1');
// console.log(elem1[0].innerHTML);
// console.log(elem1[1].innerHTML);

// Class Work 3
// Use querySelector() to enable single element selection:
// 1. Create another simple HTML file.
// 2. Create four HTML elements adding the same class to each. They can be
// different tag names as long as they have the class within the element
// attribute.
// 3. Add some content within each element so you can distinguish between them.
// 4. Within a script element, use querySelector() to select the first occurrence of the elements with that class and store it in a variable. If there is more than
// one matching result in querySelector(), it will return the first one.
// 5. Output the element into the console.

//Class Work 4
// Use querySelectorAll() to select all matching elements in an HTML file:
// 1. Create an HTML file and add four HTML elements, adding the same class to
// each one.
// 2. Add some content within each element so you can distinguish between them.
// 3. Within a script element, use QuerySelectorAll() to select all the matching
// occurrences of the elements with that class and store them in a variable.
// 4. Output all the elements into the console, first as an array and then looping
// through them to output them one by one.