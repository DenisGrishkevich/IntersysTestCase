const prompt=require('prompt-sync')({sigint:true}); 

// This parameter (arrayLength) is not needed in this solution. 
// It was possible to use it with a loop, but the presented solution is more universal for me.
let arrayLength = prompt('Enter size of array: ');
let array = prompt('Enter an array separated by spaces: ');

console.log(array.split(' ').reverse().join(' '));