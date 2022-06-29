// Array Methods
// forEach()
let arr = [ 'grapefruit', 4, 'hello', 5.6, true ]
arr.forEach(printStuff)
// the forEach() method returns a callback
function printStuff(e, i, a){
    console.log(e , i , a);
}
// filter()
var newArray = arr.filter( onlyStrings )
function onlyStrings( e ){
    if ( (typeof e == "string") == true ){
        return e;
    } 
}

console.log(newArray)

// map()
let num = [1,2,3,4,5,6,7,8,9]
var added_one = num.map( addOne )
function addOne( e ) {
    return e + 10
}
console.log( added_one );
console.log( num );

// reduce
var r = [1,2,3]
var initialValue = 0
var new_arr = r.reduce( callback , initialValue)
function callback( previousResult , nextValue ) {
    return previousResult + nextValue
}
console.log(new_arr)