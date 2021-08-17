function findLargestNumber(arg1,arg2,arg3){
    let number1 = +arg1;
    let number2 = +arg2;
    let number3 = +arg3;
    let largestNumber = 0;

    if(number1 > number2 && number1 > number3){
        largestNumber = number1;
    }
    else if(number2 > number1 && number2 > number3){
        largestNumber = number2;
    }
    else if(number3 > number1 && number3 > number2){
        largestNumber = number3;
    }
    console.log(`The largest number is ${largestNumber}`);
}
findLargestNumber(5,-3,16);