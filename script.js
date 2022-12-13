let numOne = '';
let numTwo = '';
let operator = '';

function add (x, y) {
    return x + y;
};
function subtract (x, y) {
    return x - y;
};
function multiply (x, y) {
    return x * y;
};
function divide (x, y) {
    return x / y;
};

function operate (x, operator, y) {
    x = Number(x);
    y = Number(y);
    switch (operator) {
        case '+':
            return add(x, y)
        case '-':
            return subtract(x, y)
        case '*':
            return multiply(x, y)
        case '÷':
            return divide(x, y)
    };
};

function opClear () {
    numOne = '';
    numTwo = '';
    operator = '';
};

function equals () {
    numTwo += arrBox.textContent;
    if (numTwo === '0' && operator === '÷') {
        arrBox.textContent = '';
        historyBox.textContent = '';
        opClear ();
        alert('Cannot divide by zero');
    }
    else if (numOne === '' || numTwo === '' || operator === '') {
        arrBox.textContent = '';
        historyBox.textContent = '';
        opClear ();
        alert('No equation entered');
    }
    else {
        let solution = operate(numOne, operator, numTwo);
        historyBox.textContent += ' = ' + solution;
        arrBox.textContent = solution;
        opClear();
    };
};

function operatorDblP () {
    numTwo += arrBox.textContent;
    if (numTwo === '0' && operator === '÷') {
        opClear ();
        arrBox.textContent = '';
        historyBox.textContent = '';
        alert('Cannot divide by zero');
    }
    else {
        let solution = operate(numOne, operator, numTwo);
        historyBox.textContent += ' = ' + solution;
        numOne = solution;
        arrBox.textContent = '';
        numTwo = '';
        operator = '';
    };
};

let operatey = document.querySelector('#operatey');
operatey.addEventListener('click', () => {
    equals ();
});

let arrBox = document.querySelector('#currentInput');
let historyBox = document.querySelector('#inputHistory');

let oney = document.querySelector('#oney');
oney.addEventListener('click', () => {
    arrBox.textContent += 1;
    historyBox.textContent += 1;
});
let twoy = document.querySelector('#twoy');
twoy.addEventListener('click', () => {
    arrBox.textContent += 2;
    historyBox.textContent += 2;
});
let threey = document.querySelector('#threey');
threey.addEventListener('click', () => {
    arrBox.textContent += 3;
    historyBox.textContent += 3;
});
let foury = document.querySelector('#foury');
foury.addEventListener('click', () => {
    arrBox.textContent += 4;
    historyBox.textContent += 4;
});
let fivey = document.querySelector('#fivey');
fivey.addEventListener('click', () => {
    arrBox.textContent += 5;
    historyBox.textContent += 5;
});
let sixy = document.querySelector('#sixy');
sixy.addEventListener('click', () => {
    arrBox.textContent += 6;
    historyBox.textContent += 6;
});
let seveny = document.querySelector('#seveny');
seveny.addEventListener('click', () => {
    arrBox.textContent += 7;
    historyBox.textContent += 7;
});
let eighty = document.querySelector('#eighty');
eighty.addEventListener('click', () => {
    arrBox.textContent += 8;
    historyBox.textContent += 8;
});
let niney = document.querySelector('#niney');
niney.addEventListener('click', () => {
    arrBox.textContent += 9;
    historyBox.textContent += 9;
});
let zeroy = document.querySelector('#zeroy');
zeroy.addEventListener('click', () => {
    arrBox.textContent += 0;
    historyBox.textContent += 0;
});

let addy = document.querySelector('#addy');
addy.addEventListener('click', () => {
    if (operator.length > 0) {
        operatorDblP ();
        operator += '+';
        historyBox.textContent += '+';
    }
    else {
        historyBox.textContent += '+';
        numOne += arrBox.textContent
        operator += '+';
        arrBox.textContent = '';
    }
});

let subtracty = document.querySelector('#subtracty');
subtracty.addEventListener('click', () => {
    if (operator.length > 0) {
        operatorDblP ();
        operator += '-';
        historyBox.textContent += '-';
    }
    else {
        historyBox.textContent += '-';
        numOne += arrBox.textContent
        operator += '-';
        arrBox.textContent = '';
    }
});

let multiplyy = document.querySelector('#multiplyy');
multiplyy.addEventListener('click', () => {
    if (operator.length > 0) {
        operatorDblP ();
        operator += '*';
        historyBox.textContent += '*';
    }
    else {
        historyBox.textContent += '*';
        numOne += arrBox.textContent
        operator += '*';
        arrBox.textContent = '';
    }
});

let dividey = document.querySelector('#dividey');
dividey.addEventListener('click', () => {
    if (operator.length > 0) {
        operatorDblP ();
        operator += '÷';
        historyBox.textContent += '÷';
    }
    else {
        historyBox.textContent += '÷';
        numOne += arrBox.textContent
        operator += '÷';
        arrBox.textContent = '';
    }
});

let cleary = document.querySelector('#cleary');
cleary.addEventListener('click', () => {
    opClear ();
    arrBox.textContent = '';
    historyBox.textContent = '';
});