const prompt=require('prompt-sync')({sigint:true}); 

let input = prompt('Enter the string: ');
let inputOnlyLetter = input.replace(/[^A-Za-z]/gi, '').toLowerCase();

console.log(inputOnlyLetter == inputOnlyLetter.split('').reverse().join('') ? 'YES' : 'NO');