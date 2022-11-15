
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c 
1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten :
4. Ausgabe in Konsole :
*/

// startApp()
function startApp(){
    output(calculator(getNumber("first"),getNumber("second"),getOp()));
}

function getNumber(figure){
    let inputstr = prompt("Please insert" + figure + "Number:"  )
    let num = parseInt(inputstr)
return num;
}

output(getOp());
function getOp(){
let op =prompt("Please insert +, -, *,/");
if (isoValid(op)) {
    return "operator ok";
} else {
   return "operator nicht ok";
}

}
function isoValid(op){
    return op == "+" || op == "-" ||op == "*" || op == "/"|| op == ":";
}

// output(add(2,3));
// output(subtract(2,3))
// output(multiply(2,4));
// output(divide(2,2));
// output(divide(2,0));
// output(divide(2,0));
// output(divide(2,0));


// module: Calculator / Tests:
// agreement: "+","-","*","/"
// *

// output(calculator(2,2,"+"));
// output(calculator(2,2,"-"));
// output(calculator(2,2,"*"));
// output(calculator(2,0,"/"));
// output(calculator(2,2,"#?!"));
function calculator(a,b,op){
switch (op) {
    case "+": // add
        return add(a,b);
    case "-": // subtract
        return subtract(a,b);
    case "*": // multiply
        return multiply(a,b);
    case "/": // divide 
    case ":": // divide 
        return divide(a,b);
    default:    // Error
        return "Something went Wrong!";
    }
}

// Division
// var 3.
function divide(a,b) {
    if (b==0){
        return "Division by 0 is no tPossible"
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

// output("Hello");
// output(2);

function output(outputData){
    // console.groupCollapsed(typeof outputData);
    if (typeof outputData == "number") {
        console.log("The result is:" + outputData);
        
    } else { 
        console.log("Error:" + outputData);
        
    }

}

