/*4.
* Get a new array from the given array so that the elements appear only once (using Set)
* Example: [1,2,3,1,2,3,4,5,6,4] => [1,2,3,4,5,6]
*/

/* Program */
function toSet(input) {
  return Array.from(new Set(input));
}

/* Test */
console.log(toSet([1,2,3,1,2,3,4,5,6,4]));
