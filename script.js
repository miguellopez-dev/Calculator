let display = document.querySelector('.calc__screen');
let bttnNum = document.querySelectorAll('.num');
let op = document.querySelectorAll('.op');
let eq = document.querySelector('.eq');

let num1 = 0;
let num2 = 0;
let opSymbol;
let finalNumber;

bttnNum.forEach((el) => {
	el.addEventListener('click', () => {
		if (num1 == 0) {
			num1 = el.innerHTML;
			display.innerHTML = num1;
		} else if (finalNumber) {
			finalNumber = undefined;
			num1 = el.innerHTML;
			display.innerHTML = num1;
		} else {
			num1 += el.innerHTML;
			display.innerHTML = num1;
		}
	});
});

op.forEach((el) => {
	el.addEventListener('click', () => {
		opSymbol = el.innerHTML;
		display.innerHTML = 0;
		num2 = num1;
		num1 = 0;
	});
});

eq.addEventListener('click', () => {
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	console.log(typeof num1);
	operate(num2, opSymbol, num1);
	display.innerHTML = finalNumber;
});

const add = function (num1, num2) {
	return (finalNumber = num1 + num2);
};

const subtract = function (num1, num2) {
	return (finalNumber = num1 - num2);
};

const multiply = function (num1, num2) {
	return (finalNumber = num1 * num2);
};

const divide = function (num1, num2) {
	return (finalNumber = num1 / num2);
};

const operate = function (num1, op, num2) {
	s = op;
	switch (s) {
		case 'X':
			return multiply(num1, num2);

		case '/':
			return divide(num1, num2);

		case '-':
			return subtract(num1, num2);

		case '+':
			return add(num1, num2);

		default:
			break;
	}
};
