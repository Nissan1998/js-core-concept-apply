function getOddSum(numbers){
    let sum = 0;
    for(var i=0; i<numbers.length; i++){
        var index = i;
        var elements = numbers[index];
        sum = sum + elements;
        console.log(sum);

        
    }
}

const myArray = [21,33,43,22,34,53,56,100,500];
getOddSum(myArray)