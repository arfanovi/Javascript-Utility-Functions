

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
