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
		case 'x':
			return multiply(num1, num2);

		case 'd':
			return divide(num1, num2);

		default:
			break;
	}
};
