/*Task 1*/

const userName = prompt('enter your name:');
if (userName.length == 0) {
  alert(`Нou haven't entered a name!`);
  window.location.reload();
}else{
  alert(`Hello, ${userName}!`)
}

/*Task 2*/

const year = new Date().getFullYear();
const userYear = prompt('enter your year of birth:');

if (userYear<0){
    alert('Error, enter your correct age!')
}else{
    alert(`Your age, ${year - userYear}!`);
}

/*Task 3*/

const sideOfSquare = prompt ('enter any lenght:');
if (sideOfSquare<=0){
    alert('Error, enter correct lenght!')
}else{
    alert(`Perimetr of a square, ${sideOfSquare * 4} cm`);
}

/*Task 4*/

const circleRadius = prompt('enter any radius:');
if (circleRadius<0){
    alert('Error, enter correct radius!')
}else{
    alert(`Circle radius is, ${circleRadius * circleRadius * Math.PI.toFixed(2)} m2`);
}

/*Task 5*/

const distanceBetweenCities = prompt('enter any distance (in kilometrs):');
const distanceTime = prompt('enter the desired route time(an hour):');
if (distanceBetweenCities<0 || distanceTime<0){
    alert('Error, enter correct data!')
}else{
    alert(`You need to drive at a speed of ${(distanceBetweenCities / distanceTime).toFixed(2)} km/h to arrive on time`);
}

/*Task 6*/

const dollar = 40.20;
const euro = 41.30;
const currencyConversion = prompt('enter the dollar amount:');
if (currencyConversion<=0){
    alert('Error, enter correct data!')
}else{
    alert(`Your amount in euros ${(currencyConversion * dollar / euro).toFixed(2)}`);
}

/*Task 7*/

const flashGb = 1024;
const flashMb = 820;
const yourFlashDrive = prompt('Enter the memory size of your flash drive in GB');
if (yourFlashDrive <= 0){
    alert('Error, enter correct data!')
}else{
    alert(`The number of files that fit on the flash drive ${(yourFlashDrive * flashGb / flashMb).toFixed(0)}`)
}

/*Task 8*/

const yourMoney = prompt('enter the money amount:');
const chocolatePrice = prompt('enter the price of chocolate:');
const amountOfChocolate = Math.floor(yourMoney / chocolatePrice)
if (yourMoney<=0 || chocolatePrice<=0){
    alert('Error, enter correct data!')
}else{
    alert(`You can by ${amountOfChocolate} of chocolates, the rest of you ${yourMoney - (amountOfChocolate * chocolatePrice)}`);
}

/*Task 9*/

const threeDigitNumber = prompt('enter a three digit number:')
if(threeDigitNumber <100 || threeDigitNumber >999){
    alert('Error, enter correct data!')
}else{
    alert(`Your palinder: ${threeDigitNumber.split('').reverse().join('')}`);
}

/*Task 10*/

const integerNumber = prompt('enter a integer number:');

if(integerNumber % 2 == 0){
    alert('even')
}else if(integerNumber % 2 != 0){
    alert('odd');
}













