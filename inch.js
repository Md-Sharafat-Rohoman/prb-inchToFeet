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

for(let i=0; i<=10; i++){
    console.log(i)
}

const number =10;
if(number<5){
    console.log('this is five')
}
else if(number < 10){
    console.log('this is ten')
}
else if(number <15){
    console.log('this is fifteen')
}
else{
    console.log('this is number',number)
}

number ? 'number' : 'this not number'


// var, let , const 

const name = 'faru moni';