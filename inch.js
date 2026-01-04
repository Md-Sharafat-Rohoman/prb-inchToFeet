function inchToFeet(inch){
    const feet = inch/12;
    return feet;
}
console.log(inchToFeet(75));

function inchToFeet2(inch){
    const feetRemaining = inch/12;
    const feetNumber = parseInt(feetRemaining);

    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch';
    return result;
}
console.log(inchToFeet2(80));

function mileTokilometer(mile){
    const kilometer = mile*1.60934
    return kilometer;
}
console.log(mileTokilometer(4.8))