const {readFileSync} = require('fs');

const data = readFileSync('./input/day2', 'utf8').split("\r\n")

let part1 = { depth: 0, horizontal: 0}
let part2 = { depth: 0, horizontal: 0, aim: 0}
for(let i of data) {
    d = i.split(" ")
    direction = d[0] 
    distance = parseInt(d[1])
    switch(direction){
        case "down":
            part1.depth  += distance
        break;
        case "up":
            part1.depth  -= distance
        break;
        case "forward":
            part1.horizontal += distance
        break;
    }
}

console.log(`Part One Answer: ${part1.depth*part1.horizontal}\nPart Two: To Be Done`)
