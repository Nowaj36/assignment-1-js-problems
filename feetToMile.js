function feetToMile(feet) {
    if(feet < 0){
        return -1;
    }
    else if(feet == 0){
        return 0;
    }
    else{
        let mile = feet * 0.000189394;
    return mile.toFixed(5);
    }
}
let feet = 5280;
let result = feetToMile(feet);
if(result < 0) {
    console.log('Distance can not be negetive. Please provide right value')
}
else if (result == 0) {
    console.log('Distance can not be zero. Please provide right value')
}
else {
    console.log('Converted distance from feet to mile is:', result)
}
// result = result.toFixed(5);
console.log(result, "mile");