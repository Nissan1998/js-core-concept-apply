// const    myInches =300;
// const myFeet = myInches /12;
// console.log(myFeet);



// const    dadaInches =200;
// const dadaFeet = dadaInches /12;
// console.log(dadaFeet.toFixed(2));


// const    dadiInches =100;
// const dadiFeet = dadiInches /12;
// console.log(dadiFeet);
function convert(inches){
    const feet = inches /12;
    return feet;
}
const myFeet = convert(144);
console.log(myFeet)
const dadaFeet = convert(156);
console.log(dadaFeet);
