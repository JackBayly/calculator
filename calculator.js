//Clear button
document.getElementById("C").addEventListener("click", function () {
    document.getElementById('input').value = "";
    x = "";
    y = "";
    op = undefined;
    totes = 0;
});

//Equals button
document.getElementById("equals").addEventListener("click", function () {
    totes = operate(op.toString(), x, y);
    document.getElementById('input').value = totes.toString();
    x = totes.toString();
    y = "";
    op = undefined;

});

//add
function add(x, y) {

    let a = parseInt(x, 10);
    let b = parseInt(y, 10);


    return a + b;
}

//subtract
function subtract(x, y) {
    let a = parseInt(x, 10);
    let b = parseInt(y, 10);
    return a - b;
}

//multiply
function multiply(x, y) {
    let a = parseInt(x, 10);
    let b = parseInt(y, 10);
    return a * b;
}

//divide
function divide(x, y) {
    let a = parseInt(x, 10);
    let b = parseInt(y, 10);
    return a / b;
}


function operate(op, x, y) {
    if (op === "+") {
        return add(x, y);
    } else if (op.toString() === "−") {
        return subtract(x, y);
    } else if (op === "×") {
        return multiply(x, y);
    } else if (op === "÷") {
        return divide(x, y);
    } else {

        console.log("Hello" + op);

    }
}


let displayValue = undefined;
let x = "";
let y = "";
let op = undefined;
let totes = 0;
function GFG_click(clicked) {
    displayValue = document.getElementsByName('input')[0].value += clicked;


    if (isNaN(clicked)) {
        if (op === undefined) {
            op = clicked;
        } else {

            totes = operate(op.toString(), x, y)

            x = totes.toString();
            y = "";
            op = clicked;
        }


    } else {

        if (op === undefined) {
            x += clicked.toString();
        } else {
            y += clicked.toString();
        }
    }
    console.log("x is" + x);
    console.log("op is" + op);
    console.log("y is" + y);

}



