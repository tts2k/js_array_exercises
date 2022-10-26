/*1. Write a function with 2 input parameters (each parameter is an array). 
* This function returns an array of the same elements in two arrays;
*
* Example: 	array1 = [1,2,3,4,5,6];
*			array2 = [3,4,8,9,12];
*			=> [3,4]
*
*
*/

/* Program */
function sameElements(array1, array2) {
  const result = new Set();
  const elementsMap1 = {};
  const elementsMap2 = {};

  const lengthMax = (array1.length > array2.length) ? array1.length : array2.length;

  let cursor = 0;
  while (cursor < lengthMax) {
    if (array1[cursor]) {
      let element = array1[cursor];
      if (elementsMap2[element]) {
        result.add(element);
        delete elementsMap2[element];
      }

      elementsMap1[element] = true;
    } 

    if (array2[cursor]) {
      let element = array2[cursor];
      if (elementsMap1[element]) {
        result.add(element);
        delete elementsMap1[element];
      }

      elementsMap2[element] = true;
    } 

    cursor++;
  }

  return Array.from(result);
}

/* Test */
//console.log(sameElements([1,2,3,4,5,6], [3,4,8,9,12]));
//console.log(sameElements([3,4,8,9,12], [1,2,3,4,5,6]));
//console.log(sameElements([3,4,8,null,12], [1,2,3,4,5,6]));
//console.log(sameElements([3,4,8,9,null], [1,2,null,4,5,6]));
//console.log(sameElements([3,3,3,9,4], [3,3,9,4,4,6]));
//console.log(sameElements([3,3,3,3,3], [3,3,3,3,3,3]));
//console.log(sameElements([],[]));
//console.log(sameElements([1],[]));
//console.log(sameElements([],[1]));
//console.log(sameElements([1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7], [3, 5, 9, 10, 88]));
//console.log(sameElements([9, 7, 2, 3, 4, 5, 6, 1, , 8, 7, 7], [3, 5, 9, 10, 88]));
