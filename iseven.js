function isEven(evenAndOdd){
    for(i = 0; i<=evenAndOdd; i++){
        const remainder = evenAndOdd % 2
        
        if(remainder === 0){
            console.log('Even Number');
            return true;
        } 
        else{
            console.log('Odd Number');
            return true;
        }   
    }
}
const number = isEven(1952);
console.log(number);
