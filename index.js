

// 1. Function to Calculate Power

// Declare Function | function name circuitPower()



function circuitPower(voltage, current){
    return voltage * current;
}
// console.log()
const input = circuitPower(10,10);
console.log(input)



// Write a JavaScript function named ‘findMaxNumber’ that takes an array of numbers as an argument and returns the maximum number in the array. If the array is empty, the function should return null.

function findMaxNumber(array){
    if(array.length === 0) {
        return null;
    }
    return Math.max(...array)
}

const arrayNumber = [ 10,20,3,0,4,50,666,8];
const maxArrayNumbers = findMaxNumber(arrayNumber);
console.log(maxArrayNumbers);

const emptyArray = [];
const maxEmptyArray = findMaxNumber(emptyArray);
console.log(maxEmptyArray)




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


