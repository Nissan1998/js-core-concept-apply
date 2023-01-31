function milesConvert(miles){
    const kMeter = miles*1.60934;
    return kMeter;
}
const myDestination = milesConvert(2);
console.log(myDestination);
const dadaDestination = milesConvert(10);
console.log(dadaDestination);

function convertKg(kg){
    const gram = kg *1000;
    return gram;
}
const iHave = convertKg(5);
console.log(iHave ,'gram');
