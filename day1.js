const {readFileSync} = require('fs');
const int = readFileSync('./input/day1', 'utf8').trim().split(`\n`);

p1 = 0;
p2 = 0;
  
for(let i =0; i < int.length -1; i++){
    if(parseInt(int[i+1]) > parseInt(int[i])){
        p1++
    }
}

for(let j = 0; j < int.length -3; j++){
    a = parseInt(int[j]); // set a to the current value
    b = parseInt(int[j+1]); // set b to the next value
    c = parseInt(int[j+2]); // set c to the next value
    d = parseInt(int[j+3]); // set d to the next value

    if(b+c+d > a+b+c){
        p2++
    }
}

console.log(p1, p2);