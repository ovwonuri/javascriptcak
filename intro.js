// Simple Calculator
document.write("<h2>Javascript Calculator</h2>"+
"Welcome to Calculator" +
"\nYou can choose from the menu:" +
"\n+ = addition |" +
"\n- = subtraction |" +
"\n* = multiplication |" +
"\n/ = division"
);


const operator_db = {"+":"Addition", "-":"Subtraction", "*":"Multiplication", "/":"Division"};
let user_operator = prompt("Please make a choice from the menu +, -, *, /: ");

if (!(Object.keys(operator_db).includes(user_operator))) {
alert("we cannot perform this action you selected at the moment" +
"kindly use the options from the menu try again later")
}
else{
alert("Welcome to do " + operator_db[user_operator]);
let userInput1 = Number(prompt("Enter first number: "));
let userInput2 = Number(prompt("Enter second number: "));
try{
if (userInput1 == "" && userInput2 == "") 
throw "You did not enter either one of the numbers";

if (Number.isNaN(userInput1) || Number.isNaN(userInput2)) 
throw "Only numbers are allowed";

else{
switch (user_operator) {
    case "+":
        alert(userInput1 + " (plus) " + 
        " " + userInput2 + " = " + (Number(userInput1 + userInput2)));
        break;
    
    case "-":
        alert(userInput1 + " (minus) " + 
        " " + userInput2 + " = " + (Number(userInput1 - userInput2)));
        break;
    
    case "*":
        alert(userInput1 + " (multiplied by) " + 
        " " + userInput2 + " = " + (Number(userInput1 * userInput2)));
        break;
    
    case "/":
        if (userInput2 == "" || userInput2 == 0 )
        throw "Zero cannot divide a number";
        else{
            alert(userInput1 + " (divided by) " + 
            " " + userInput2 + " = " + (Number(userInput1 / userInput2)));
        }
        break;
        
    default:
        break;
}

}



}
catch (err){
alert("Error: " + err);
}

}
