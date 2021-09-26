let display = document.querySelector('.calc__screen');
let bttnNum = document.querySelectorAll('.num');
let op = document.querySelectorAll('.op');

const add = function (num1, num2) {
	return num1 + num2;
};

const subtract = function (num1, num2) {
	return num1 - num2;
};

const multiply = function (num1, num2) {
	return num1 * num2;
};

const divide = function (num1, num2) {
	return num1 / num2;
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
