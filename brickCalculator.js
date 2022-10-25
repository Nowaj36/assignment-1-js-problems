let brickFirstFloor = 15;
let brickSecondFloor =12;
let birckRemaingFloor = 10;
let bricksPerFeet = 1000;
function brickCalculator(floor) {
     if(floor <= 10) {
          bricks = bricksPerFeet * brickFirstFloor * floor;
     }
     else if(floor <=20) {
          let bricksFirstPart = bricksPerFeet * brickFirstFloor * 10;
          let bricksRemaining = floor - 10;
          let bricksRemainingPart = bricksPerFeet * brickSecondFloor * bricksRemaining;
          bricks = bricksFirstPart + bricksRemainingPart;
     }
     else {
          let bricksRemaining = floor - 20;
          let bricksFirstPart = bricksPerFeet * brickFirstFloor * 10;
          let bricksSecondPart = bricksPerFeet * brickSecondFloor * 10;
          let bricksRemainingPart = bricksPerFeet * birckRemaingFloor * bricksRemaining;
          bricks = bricksFirstPart + bricksSecondPart + bricksRemainingPart;
     }
     return bricks;
}
console.log(brickCalculator(21));