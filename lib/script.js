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



//2 Write a program to check whether a number is divisible by 5 and 11 or not

var a = "";

function checkNumberDivided() {
    var a = document.getElementById("number1").value;

    if (a % 5 == 0 && a % 11 == 0) {
        alert("your number is " + a + " ok.");
    } else  if (a % 5 == 0 || a % 11 == 0){
        alert("your number is " + a + " ok.");
    }
    else {
        alert("your number is " + a + " not divisible by 5 or 11.");
    }
    
    console.log(a);
}
