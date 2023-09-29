

function printOne(){
    var currently = document.getElementById("output").innerHTML;
    currently += '1'
    document.getElementById("output").innerHTML = currently;
}

function printTwo(){
    var currently = document.getElementById("output").innerHTML;
    currently += '2'
    document.getElementById("output").innerHTML = currently;
}

function printThree(){
    var currently = document.getElementById("output").innerHTML;
    currently += '3'
    document.getElementById("output").innerHTML = currently;
}

function printFour(){
    var currently = document.getElementById("output").innerHTML;
    currently += '4'
    document.getElementById("output").innerHTML = currently;
}

function printFive(){
    var currently = document.getElementById("output").innerHTML;
    currently += '5'
    document.getElementById("output").innerHTML = currently;
}

function printSix(){
    var currently = document.getElementById("output").innerHTML;
    currently += '6'
    document.getElementById("output").innerHTML = currently;
}

function printSeven(){
    var currently = document.getElementById("output").innerHTML;
    currently += '7'
    document.getElementById("output").innerHTML = currently;
}

function printEight(){
    var currently = document.getElementById("output").innerHTML;
    currently += '8'
    document.getElementById("output").innerHTML = currently;
}

function printNine(){
    var currently = document.getElementById("output").innerHTML;
    currently += '9'
    document.getElementById("output").innerHTML = currently;
}

function printZero(){
    var currently = document.getElementById("output").innerHTML;
    currently += '0'
    document.getElementById("output").innerHTML = currently;
}

function printDecimal(){
    var currently = document.getElementById("output").innerHTML;
    currently += '.'
    document.getElementById("output").innerHTML = currently;
}

function clearScreen(){
    var currently = document.getElementById("output").innerHTML;
    currently = '';
    document.getElementById("output").innerHTML = currently;
}

function printAdd(){
    var currently = document.getElementById("output").innerHTML;
    var lengthOfCurrently = currently.length;
    if (currently[lengthOfCurrently-1]==='*' || currently[lengthOfCurrently-1]==='-' || currently[lengthOfCurrently-1]==='+'){
        var x = 1;
    }
    else{
        currently += '+'
        document.getElementById("output").innerHTML = currently;
    }

}

function printSub(){
    var currently = document.getElementById("output").innerHTML;
    var lengthOfCurrently = currently.length;
    if (currently[lengthOfCurrently-1]==='*' || currently[lengthOfCurrently-1]==='-' || currently[lengthOfCurrently-1]==='+'){
        var x = 1;
    }
    else{
        currently += '-'
        document.getElementById("output").innerHTML = currently;
    }
}

function printMult(){
    var currently = document.getElementById("output").innerHTML;
    var lengthOfCurrently = currently.length;
    if (currently[lengthOfCurrently-1]==='*' || currently[lengthOfCurrently-1]==='-' || currently[lengthOfCurrently-1]==='+'){
        var x = 1;
    }
    else{
        currently += '*'
        document.getElementById("output").innerHTML = currently;
    }
}

function solve(){
    var currently = document.getElementById("output").innerHTML;
    currently = eval(currently);
    document.getElementById("output").innerHTML = currently;
}
