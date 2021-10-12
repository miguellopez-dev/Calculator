let display = document.querySelector('.calc__screen');
let bttnNum = document.querySelectorAll('.num');
let op = document.querySelectorAll('.op');
let eq = document.querySelector('.eq');
let dot = document.querySelector('.dot');
const ac = document.querySelector('.clear');

let num1 = 0;
let num2 = 0;
let opSymbol;
let finalNumber;

bttnNum.forEach((el) => {
	el.addEventListener('click', () => {
		if (el.innerHTML == '.') {
			if (!display.innerHTML.includes('.')) {
				num1 += el.innerHTML;
				display.innerHTML = num1;
			} else {
				return;
			}
		} else if (finalNumber) {
			if (display.innerHTML.includes('.')) {
				num1 += el.innerHTML;
				display.innerHTML = num1;
			} else {
				finalNumber = undefined;
				num1 = el.innerHTML;
				display.innerHTML = num1;
			}
		} else if (num1 == 0) {
			if (display.innerHTML.includes('.')) {
				num1 += el.innerHTML;
				display.innerHTML = num1;
			} else {
				num1 = el.innerHTML;
				display.innerHTML = num1;
			}
		} else {
			num1 += el.innerHTML;
			display.innerHTML = num1;
		}
	});
});

op.forEach((el) => {
	el.addEventListener('click', () => {
		if (finalNumber) {
			num2 = finalNumber;
			num1 = 0;
			display.innerHTML = 0;
			opSymbol = el.innerHTML;
		} else if (num2 > 0) {
			num2 = parseFloat(num2);
			num1 = parseFloat(num1);
			operate(num2, opSymbol, num1);
			opSymbol = el.innerHTML;
			num2 = finalNumber;
			display.innerHTML = num2;
		} else {
			opSymbol = el.innerHTML;
			display.innerHTML = 0;
			num2 = num1;
			num1 = 0;
		}
	});
});

eq.addEventListener('click', () => {
	if (!opSymbol) {
		display.innerHTML = 0;
		return;
	} else {
		num1 = parseFloat(num1);
		num2 = parseFloat(num2);
		operate(num2, opSymbol, num1);
		if (typeof finalNumber == 'string') {
			display.innerHTML = finalNumber;
		} else {
			display.innerHTML = goodRound(finalNumber);
		}
	}
});

ac.addEventListener('click', () => {
	num1 = 0;
	num2 = 0;
	opSymbol = undefined;
	finalNumber = undefined;
	display.innerHTML = 0;
});

function darkSide() {
	num1 = 0;
	num2 = 0;
	opSymbol = undefined;

	finalNumber = 'The dark side in you I sense.';
}

function add(num1, num2) {
	return (finalNumber = num1 + num2);
}

function subtract(num1, num2) {
	return (finalNumber = num1 - num2);
}

function multiply(num1, num2) {
	return (finalNumber = num1 * num2);
}

function divide(num1, num2) {
	if (num2 == 0) {
		return darkSide();
	} else {
		return (finalNumber = num1 / num2);
	}
}

function goodRound(number) {
	return Number(Math.round(number + 'e' + 5) + 'e-' + 5);
}

function operate(num1, op, num2) {
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
}
