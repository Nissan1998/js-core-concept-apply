
function leapYear(years){
    for(i=0; i<=years; i++){
        const isleapYear = years % 4;
        if(isleapYear ==0){
            console.log('This is leap Year');
        }
        else{
            console.log('This year is not leap Year');
        }
        return years;
    } 
}
const givenYear = leapYear(2024);
console.log(givenYear);