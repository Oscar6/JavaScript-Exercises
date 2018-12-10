// Write a function that takes a number as an input. 
// Have it create an empty array and then push a string into the array as many 
// times as the input number
//
// Name the function "finalFunction"

function finalFunction(num){
    var emptyArray =[];
    var string = "Teleport me into the array";

    while (emptyArray.length < num){
        emptyArray.push(string)
    }
    return emptyArray
}

console.log(finalFunction(3));