 
let ageStr = prompt('you must be at least 21 years old in order to purchase alcohol. It is also a criminal offense in all 36 states to make false statements (including fabricating IDs) in order to purchase alcohol please kindly state your age in the box to enable you purchase');
let age = Number(ageStr);
 
let feedback = age >= 21 ?
    'Congratulation You\'re eligible to purchase alcohol.' :
    'Sorry You must be at least 21 years old to purchase alcohol on this site .';
 
alert(feedback);