const prompt=require('prompt-sync')({sigint:true}); 

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let input = [];

let t = parseInt(prompt('Enter the number of test cases: '));
for (let i = 0; i < t; i++) {
  input.push(prompt('Enter the value of m and n separated by a space: ').split(' '));
}

for (let i = 0; i < input.length; i++) {
  let count = 0;
  for (let j = input[i][0]; j <= input[i][1]; j++) {
    if (isPrime(j)) count++;
  }
  console.log(count);
}
