// 1. Create a javascript function which accept a number as input and insert dashes (-) between each two even numbers. 
//For example if you accept 025468 the output should be 0-254-6-8.
// 30 mins



/*
let inputNumber = prompt("Enter your number");

function instertedNumbers(num) {

    let prev = '',
        newstring = '';

    num = num.toString();

    for (let i = 0; i < num.length; i++) {
        parseInt(num[i]) % 2 == 0 ? current = 'even' : current = 'odd'; //ternary operator
        if (current == 'even' && prev == 'even') {
            newstring = newstring + '-' + num[i];
            prev = 'even';
        } else {
            newstring = newstring + num[i];
            prev = current;
        }
    }

    return newstring;

}
console.log(instertedNumbers(inputNumber));

*/


// 2. Create a javascript function that will find all numbers divisable by 7 and 3 in a array from 1 to 100.
// 30 mins


function loveTheThrees() {

    let finalArray = [];

    for (let i = 1; i < 100; i++) {
        if (i % 3 === 0 && i % 7 === 0) {
            finalArray.push(i);

        }
    }
    return finalArray;

}
console.log(loveTheThrees());



// 3. Create a Javascript ATM machine. 
//The ATM should have the following functions:
//- make desposit (this function should add money to the users balance)
//- make withdrawal (this function should should withdraw money to the users balance)
//- get the balance (this function should display the current balance of the user)
//- exit (this function should close the window)
// create interactive menu using alerts
// 90 mins

// when using inputs in forms, if you want the page not to reload (and lose the text message) use the event parameter (event) inside the event and write event.preventDefault() in the anonymous function




var getTheBalance = prompt("Enter your balance: ");

function getBalance(blncnumber) {
    alert('Your current balance is: ' + blncnumber + ' $');

}
getBalance(getTheBalance);


var makingDeposits = prompt("How much money do you want to add to your balance: ");

function makeDeposit(deposit,blncnumber) {
    let finalbal = deposit + blncnumber;

    alert('Added money: ' + deposit + ' $');
    alert("After added money: " + finalbal + " $");

    

}

makeDeposit(makingDeposits,getTheBalance);


