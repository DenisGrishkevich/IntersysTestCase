const prompt=require('prompt-sync')({sigint:true}); 

// This parameter (arrayLength) is not needed in this solution. 
// It was possible to use it with a loop, but the presented solution is more universal for me.
let arrayLength = prompt('Enter size of array: ');
let array = prompt('Enter an array separated by spaces: ').replace(/\s/g, '').split('').map(Number);

let dict = {};

for (let i = 0; i < array.length; i++) {
    array[i] in dict ? dict[array[i]]++ : dict[array[i]] = 1;
}

let maxKey;
let maxValue = 0;

for (let key in dict) {
    if (dict[key] > maxValue) {
        maxKey = key;
        maxValue = dict[key];
    }
    if (dict[key] == maxValue) {
        maxKey = Math.max(maxKey, key)
    }
}

console.log(maxKey);