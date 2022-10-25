
function woodCalculator(table, chair, bed) {
    const woodForChair = 1;
    const woodForTable = 3;
    const woodForBed = 5; 
    
    if(chair < 0 || table < 0 || bed < 0){
        return -1;
    }
    else{
        let totalChairWood = chair * woodForChair;
        let totalTableWood = table * woodForTable;
        let totalBedWood = bed * woodForBed;
        let totalWood = totalChairWood + totalTableWood + totalBedWood;

        return totalWood;
    }
}
let woodForProduct = woodCalculator(10, 1, 3);
console.log(woodForProduct, "qubic feet");