/*6. Given an array arr1. Write a function that returns a new array of the elements that appear more than once in arr1. The elements in new array can only appear once in this array.
* Example: 	const arr1 = [1,2,3,4,2,3,5,3,1,1,5,2,3];
* 		const myFunc = (inputArr) => {
* 			// write your code here
* 		}
* 		const arr2 = myFunc(arr1); // [2,3,1,5]
*/

/* Program */

function moreThanOnce(input) {
  const result = [];
  const inputMap = {};

  input.forEach(e => {
    if (inputMap[e]) {
      result.push(e);
      delete inputMap[e];
    }
    else {
      inputMap[e] = true;
    }
  });

  return Array.from(new Set(result));
}

/* Test */
//console.log(moreThanOnce([1,2,3,4,2,3,5,3,1,1,5,2,3]));
//console.log(moreThanOnce([]));
//console.log(moreThanOnce([1, 2]));
//console.log(moreThanOnce([1, 1, 1]));
//console.log(moreThanOnce([0, -1, -3, -4, -3, -3]));
