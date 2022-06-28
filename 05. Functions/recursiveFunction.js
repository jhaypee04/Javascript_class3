// Recursive Functions
// Calling same function from inside the function.
function aRecursiveFunc(param){
    console.log(param);
    if ( param > 0 ){
        aRecursiveFunc(--param);
    }
}
aRecursiveFunc(3);