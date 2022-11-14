
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c 
1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten :
4. Ausgabe in Konsole :
*/

// output(add(2,3));
// output(subtract(2,3))
// output(multiply(2,4));
// output(divide(2,2));
// output(divide(2,0));


// module: Calculator / Tests:
// agreement: "+","-","*","/"
output(calculator("+"));
output(calculator("-"));
output(calculator("*"));
output(calculator("/"));
output(calculator("#?!"));

function calculator(op){
switch (op) {
    case "+": // add
        return "add";
    case "-": // subtract
        return "sub";
    case "*": // multiply
        return "mul";
    case "/": // divide 
        return "divide";
    default:    // Error
        return "Error";
    }
}

// Division
// var 3.
function divide(a,b) {
    if (b==0){
    }

    return a / b;
    }
// Multiplikation
function multiply(a,b) {
    return a * b;
    }
// Addition
function add(a,b) {
return a + b;
}
// Subtraktion
function subtract(a,b) {
    return a - b;
    }
// module: console output /Test
function output(outputData){
console.log(outputData);
}

