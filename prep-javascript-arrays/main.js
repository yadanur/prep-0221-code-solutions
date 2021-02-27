var languagesArray = ['html', 'css', 'javascript', 'react', 'node.js'];

console.log(languagesArray);
console.log('Length of the array is: ', languagesArray.length);

languagesArray.push('c#', 'php');
console.log(languagesArray);

languagesArray.pop();
console.log(languagesArray);
languagesArray.unshift('C++');
console.log(languagesArray);
languagesArray.shift();
console.log(languagesArray);
var thirdElement = languagesArray[2];
console.log('Third element is ', thirdElement);
var arrayLength = languagesArray.length;
console.log('The length of the array is ', arrayLength);
var lastItem = languagesArray[languagesArray.length - 1];
console.log('The last item is ', lastItem);
