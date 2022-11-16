const reverseString = function(str) {
const spiltStr = str.split('');
const reverseStr = spiltStr.reverse();
const joinArray = reverseStr.join('');
return joinArray;   
}
// Do not edit below this line
module.exports = reverseString;

