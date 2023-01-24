// // /*Task 1*/

// let userName = prompt('enter your name:');
// alert(`Hello, ${userName}!`)

// // /*Task 2*/

// const year = new Date().getFullYear();
// const userYear = prompt('enter your year of birth:');
// // alert(`Your age, ${year - userYear}!`);

// if (userYear<0){
//     alert('Error, enter your correct age!')
// }else{
//     alert(`Your age, ${year - userYear}!`);
// }

// // /*Task 3*/

// const sideOfSquare = prompt ('enter any lenght:');
// if (sideOfSquare<=0){
//     alert('Error, enter correct lenght!')
// }else{
//     alert(`Perimetr of a square, ${sideOfSquare * 4} cm`);
// }

// // /*Task 4*/

// const circleRadius = prompt('enter any radius:');
// if (circleRadius<0){
//     alert('Error, enter correct radius!')
// }else{
//     alert(`Perimetr of a square, ${circleRadius * circleRadius * Math.PI}`);
// }

// /*Task 5*/

// const distanceBetweenCities = prompt('enter any distance (in kilometrs):');
// const distanceTime = prompt('enter the desired route time(an hour):');
// if (distanceBetweenCities<0 || distanceTime<0){
//     alert('Error, enter correct data!')
// }else{
//     alert(`You need to drive at a speed of ${(distanceBetweenCities / distanceTime).toFixed(2)} km/h to arrive on time`);
// }

/*Task 6*/

// const dollar = 40.20;
// const euro = 41.30;
// const currencyConversion = prompt('enter the dollar amount:');
// if (currencyConversion<=0){
//     alert('Error, enter correct data!')
// }else{
//     alert(`Your amount in euros ${(currencyConversion * dollar / euro).toFixed(2)}`);
// }

/*Task 7*/

// const userGb = 1024;
// const filesMb = 820;
// const yourFlashDrive = prompt("Введіть обсяг флешки у ГБ:");
// if (yourFlashDrive <= 0){
//     alert('Error, enter correct data!')
// }else{
//     alert(`The number of files that fit on the flash drive ${(yourFlashDrive * userGb / filesMb).toFixed(0)}`)
// }

/*Task 8*/

const yourMoney = prompt('enter the money amount:');
const chocolatePrice = prompt('enter the price of chocolate:');
const amountOfChocolate = Math.floor(yourMoney / chocolatePrice)
if (yourMoney<=0 || chocolatePrice<=0){
    alert('Error, enter correct data!')
}else{
    alert(`You can by ${amountOfChocolate} of chocolates, the rest of you ${yourMoney -(amountOfChocolate * chocolatePrice)}`);
}













