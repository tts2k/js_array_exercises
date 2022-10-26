/*3. Find pairs of elements whose sum is equal to a given number
* Example: [1,7,9,2,5,3,8], sum = 10 => [1,9] ; [7,3]; [2,8]
*/

/* Program */

function pairSum(arr, sum) {
    const result = [];

    if (arr.length < 2) {
        return result;
    }

    if (arr.length === 2) {
        return (arr[0] + arr[1] === sum) ? [arr] : result;
    }

    arr.sort((a, b) => a - b);
    let cursorStart = 0;
    let cursorEnd = arr.length - 1;

    while (cursorStart < cursorEnd) {
        while (arr[cursorStart] + arr[cursorEnd] === sum) {
            result.push([arr[cursorStart], arr[cursorEnd]]);
            cursorStart++;
        }
        cursorEnd--;

    }
    
    return result;
}

/* Test */
//console.log(pairSum([1,7,9,2,5,3,8], 10));
//console.log(pairSum([1,2,3,4,5,6,11], 10));
//console.log(pairSum([-1,-7,-9,-2,-5,-3,-8], -10));
//console.log(pairSum([0, 1, 3, -3, 9, 8, 2, 5, -8, -4, 13], 5));
//console.log(pairSum([3, 3, 3, 3, 3, 5], 8));
//console.log(pairSum([3, 3, 3, 3, 3, 3], 6));
//console.log(pairSum([3, 3, 3, 3, 3, 6], 6));
//console.log(pairSum([], 10));
//console.log(pairSum([1], 10));
//console.log(pairSum([1,2], 10));
//console.log(pairSum([1,2], 3));
