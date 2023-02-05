const prompt=require('prompt-sync')({sigint:true}); 

let array = [];

while (true) {
  let input = prompt('Enter the number (x for exit): ');
  if (input == 'x') {
    break;
  }
  array.push(Number(input));
}

let powers = new Set();
array.forEach(num => {
  let i = 0;
  while (2 ** i <= num) {
    if (num & (1 << i)) {
      powers.add(2 ** i);
    }
    i++;
  }
});

let result = Array.from(powers).sort((a, b) => a - b);
if (result.length === 0) {
  console.log('NA');
} else {
  console.log(result.join(', '));
}