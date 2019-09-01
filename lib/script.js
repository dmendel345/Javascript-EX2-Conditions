// script 



// 1 - Write a program to check whether a number is negative, positive or zero.
var a = "";

function checkNumber() {
    var a = document.getElementById("number1").value;

    if (a < 0) {
        alert("your number is " + a + " negative.");
    } else if (a > 0) {
        alert("your number is " + a + " positive.");
    }
    else if (a == 0) {
        alert("your number is " + a + " Zero.");
    }
    else {
        alert("Something  is wrong your number is " + a + ".");
    }
    console.log(a);
}



// 2 - Write a program to check whether a number is divisible by 5 and 11 or not

var a = "";

function checkNumberDivided() {
    var a = document.getElementById("number1").value;

    if (a % 5 == 0 && a % 11 == 0) {
        alert("your number " + a + " is ok.");
    } else if (a % 5 == 0 || a % 11 == 0) {
        alert("your number " + a + " is  ok.");
    }
    else {
        alert("your number " + a + " is  not divisible by 5 or 11.");
    }

    console.log(a);
}

// 3 - Write a program to check whether a number is even or odd

var a = "";

function checkNumberOddOrEven() {
    var a = document.getElementById("number1").value;
    if (a == 0) {
        alert("your number " + a + " is Zero");
    }
    else if (a % 2 == 0) {
        alert("your number " + a + " is Even.");
    } else if (a % 2 !== 0) {
        alert("your number " + a + " is Odd.");
    }
    else {
        alert("your number " + a + " Strange.");
    }

    console.log(a);
}


// 4 - Write a program to check whether a year is leap year or not.

var y = "";

function checkYear() {
    var y = document.getElementById("number2").value;
    if (y == 0) {
        alert(+ y + " is not a lEnter a year !");
    }
    else if (y % 4 == 0 && a % 100 !== 0) {
        alert(y + " is a leap year.");
    }
    else if (y % 400 == 0) {
        alert(y + " is a leap year.");
    }
    else {
        alert(+ y + " is not a leap year.");
    }


    console.log(y);
}

// 5 - Write a program to check whether a character is alphabet or not.
var char = "";

function checkCharType() {
    var char = document.getElementById("param1").value;

    if (char >= "a" && char <= "z" || char >= "A" && char <= "Z") {
        alert(char + " is part of the alphabet.");
    }
    else {
        alert(char + " is not part of the alphabet.");
    }

    console.log(char);
}

// 6 - Write a program to input any alphabet and check whether it is vowel or consonant.
var char = "";

function checkChar() {
    var char = document.getElementById("param2").value;

    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
        alert(char + " is a vowel.");
    }
    else if (char >= "0" && char <= "9") {
        alert("Try again!");
    }
    else {
        alert(char + " is a consonant.");
    }

    console.log(char);
}


// 11 - Write a program to count total number of notes in given amount
var money = "";
var bill100 = "";
var bill10 = "";
var bill1 = "";

function checkNumberOfNotes() {
    var money = document.getElementById("money1").value;

    if (money >= "1" && money % 100 == 0) {
        bill100 = Math.trunc(money / 100);
        alert(" number of hundred notes " + bill100);
    }

    else if (money % 10 == 0) {
        bill100 = Math.trunc(money / 100);
        moneyTemp = money - (bill100 * 100);
        bill10 = Math.trunc(moneyTemp / 10);
        alert(" number of hundred notes " + bill100);
        alert(" number of ten notes " + bill10);
    }
    else if (money % 1 == 0) {
        bill100 = Math.trunc(money / 100);
        moneyTemp = money - (bill100 * 100);
        bill10 = Math.trunc(moneyTemp / 10);
        moneyTemp = moneyTemp - (bill10 * 10);
        bill1 = Math.trunc(moneyTemp / 1);
        alert(" number of hundred notes " + bill100);
        alert(" number of ten notes " + bill10);
        alert(" number of one notes " + bill1);
    }
    else {
        alert(money + "is change ");
    }

    console.log(money);
}

