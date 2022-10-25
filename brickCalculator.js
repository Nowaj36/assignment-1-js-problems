function brickCalculator(floor) {
   const brickFristTenFloof = 15;
   const brickSecondTenFloof = 12;
   const brickHeighestRest = 10;
   const remainingFloor = floor - 20; 
   const bricksPerFeet = 1000;

   if(floor < 0 || floor == 0) {
     return -1;
   }
   else if(remainingFloor < 0 || remainingFloor == 0) {
     let remainingAfterFloor = floor - 10;
     if(remainingAfterFloor < 0 || remainingAfterFloor == 0){
          let bricks = brickFristTenFloof * bricksPerFeet * floor;
          return bricks;
     }
     else {
          let bricksForFristTenFloor = brickFristTenFloof * bricksPerFeet * 10;
          let bricksForRemainingFloor = brickSecondTenFloof * bricksPerFeet * remainingAfterFloor;
          bricks = bricksForFristTenFloor + bricksForRemainingFloor;
          return bricks;
     }
   }
   else {
          let bricksForFristTenFloor = brickFristTenFloof * bricksPerFeet * 10;
          let bricksForSecondTenFloor = brickSecondTenFloof * bricksPerFeet * 10;
          let bricksForRemainingFloor = brickHeighestRest * bricksPerFeet * remainingFloor;
          bricks = bricksForFristTenFloor + bricksForSecondTenFloor + bricksForRemainingFloor;
          return bricks;
   }
}
   
console.log(brickCalculator(21));