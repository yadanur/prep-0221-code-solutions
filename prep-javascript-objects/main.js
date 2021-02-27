var person = {
  firstName: 'Yusuf',
  lastName: 'Adanur',
  hobby: 'playing'
};

console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log(fullName);
person.job = 'Teacher';
person.previousJob = 'Student';
console.log("The person's job is ", person.job);
console.log("The person's previous job is ", person.previousJob);
console.log('The complete person object is ', person);

var myCar = {
  make: 'Toyota',
  model: '4Runner',
  year: '2021'
};

console.log('Car information: ', myCar);
myCar['owner'] = fullName;
console.log('The owner of the car is ', myCar['owner']);

console.log('My name is ', fullName, '. And I drive', myCar['year'], myCar['make'], myCar['model']);
myCar['color'] = 'White';
console.log(myCar);
