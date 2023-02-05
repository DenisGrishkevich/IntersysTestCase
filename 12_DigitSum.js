const prompt=require('prompt-sync')({sigint:true}); 

// This parameter (arrayLength) is not needed in this solution. 
// It was possible to use it with a loop, but the presented solution is more universal for me.
let arrayLength = prompt('Enter size of array: ');
let array = prompt('Enter an array separated by spaces: ').split(' ');

let maxIndex;
let maxValue = 0;

for (let i = 0; i < array.length; i++) {
    let sum = array[i].split('').map(Number).reduce((sum, num) => sum + num);
    if (sum > maxValue) {
        maxIndex = i;
        maxValue = sum;
    }
    if (sum == maxValue) {
        Number(array[maxIndex]) < Number(array[i]) ? maxIndex = i : null;
    }
}

console.log(maxIndex);