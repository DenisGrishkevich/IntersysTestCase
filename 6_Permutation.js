const prompt=require('prompt-sync')({sigint:true}); 

let firstArray = prompt('Enter the first array: ');
let secondArray = prompt('Enter the second array: ');

console.log(firstArray.split(' ').sort().toString() == secondArray.split(' ').sort().toString() ? 'YES' : 'NO');