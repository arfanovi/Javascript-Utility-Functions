

// 1. Function to Calculate Power

// Declare Function | function name circuitPower()



// function circuitPower(voltage, current){
//     return voltage * current;
// }
// // console.log()
// const input = circuitPower(10,10);
// console.log(input)


// // Javascript Function to Merge Two Array
function mergeArrays(arrayFirstName, arrayLastName){
    return Array.from(arrayFirstName).concat(Array.from(arrayLastName))
}

const arrayFirstName = ['Arfan'];
const arrayLastName = ['Ovi'];
const mergeArray = mergeArrays(arrayFirstName,arrayLastName);
console.log(mergeArray)


// Create a function ‘arrayValuesTypes’ that takes an array and returns the types of values (data types) in a new array. Ex- arrayValuesTypes([1, 2, "null", []]) ➞ ["number", "number", "string", "object"]

function arrayValueTypes(array){
    return array.map(item => typeof item);
}

const result = arrayValueTypes([1,2,"null", []]);
console.log(result);