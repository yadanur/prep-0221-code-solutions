function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addTwoNumbers(4, 4));

function convertHoursToMinutes(number) {
  return number * 60;
}
console.log(convertHoursToMinutes(3));

function personalizeGreeting(name) {
  return ('Hello' + name);
}
console.log(personalizeGreeting('Yusuf'));

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
console.log(addAndMultiplyBy5(3, 4));

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
console.log(multiplyAndDivideBy5(4, 5));

function subtractTwoNumbers(num1, num2) {
  return (num1 - num2);
}
console.log(subtractTwoNumbers(7, 5));

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
console.log(getCircleCircumference(5));

function getFullName(firstName, LastName) {
  return (firstName + ' ' + LastName);
}
console.log(getFullName('Yusuf', 'Adanur'));

function cube(number) {
  return Math.pow(number, 3);
}
console.log(cube(5));
