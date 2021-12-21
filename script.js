let display = document.querySelector('.calc__screen');
let bttnNum = document.querySelectorAll('.num');
let op = document.querySelectorAll('.op');
const eq = document.querySelector('.eq');
const dot = document.querySelector('.dot');
const ac = document.querySelector('.clear');
const neg = document.querySelector('.neg');
const per = document.querySelector('.per');

let num1 = 0;
let num2 = 0;
let opSymbol;
let finalNumber;

neg.addEventListener('click', () => {
	if (display.innerHTML.includes('-')) {
		num1 = display.innerHTML.replace(/-/g, '');
	} else {
		num1 = '-' + num1;
	}
	display.innerHTML = num1;
});

bttnNum.forEach((el) => {
	el.addEventListener('click', () => {
		numberClick(el.innerHTML);
	});
});

op.forEach((el) => {
	el.addEventListener('click', () => {
		opClicks(el.innerHTML);
	});
});

eq.addEventListener('click', () => {
	equalClick();
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
per.addEventListener('click', () => {
	if (!num2) {
		num1 = num1 / 100;
	} else if (num2) {
		num1 = num2 * (num1 / 100);
	}
	display.innerHTML = num1;
});

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

const numKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const opKeys = ['+', '-', '*', '/'];
const eqSign = ['=', 'Enter'];

document.onkeyup = function (el) {
	if (numKeys.includes(el.key)) {
		numberClick(el.key);
	} else if (opKeys.includes(el.key)) {
		opClicks(el.key);
	} else if (eqSign.includes(el.key)) {
		equalClick();
	}
};

window.onkeydown = function (e) {
	if (e.key == '/') {
		e.preventDefault();
	}
};

function opClicks(type) {
	if (finalNumber) {
		num2 = finalNumber;
		num1 = 0;
		display.innerHTML = 0;
		opSymbol = type;
	} else if (num2 > 0) {
		num2 = parseFloat(num2);
		num1 = parseFloat(num1);
		operate(num2, opSymbol, num1);
		opSymbol = type;
		num2 = finalNumber;
		display.innerHTML = num2;
	} else {
		opSymbol = type;
		display.innerHTML = 0;
		num2 = num1;
		num1 = 0;
	}
}

function numberClick(type) {
	if (type == '.') {
		if (!display.innerHTML.includes('.')) {
			num1 += type;
			display.innerHTML = num1;
		} else {
			return;
		}
	} else if (display.innerHTML.includes('-0')) {
		if (display.innerHTML.length <= 2) {
			num1 = '-' + type;
		} else {
			num1 += type;
		}
		display.innerHTML = num1;
	} else if (finalNumber) {
		if (display.innerHTML.includes('.')) {
			num1 += type;
			display.innerHTML = num1;
		} else {
			finalNumber = undefined;
			num1 = type;
			display.innerHTML = num1;
		}
	} else if (num1 == 0) {
		if (display.innerHTML.includes('.')) {
			num1 += type;
			display.innerHTML = num1;
		} else {
			num1 = type;
			display.innerHTML = num1;
		}
	} else {
		num1 += type;
		display.innerHTML = num1;
	}
}

function equalClick(type) {
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
}
