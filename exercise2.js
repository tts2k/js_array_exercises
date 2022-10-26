/*1. Find 2 elements with the greatest sum in an array*/

/* Program */
function greatestSum(input) {
    const length = input.length;
    if (length < 2) {
        return [];
    }

    input.sort((a, b) => a - b);

    return [input[length - 1], input[length - 2]];
}

/* Test */
//console.log(greatestSum([1,7,9,2,5,3,8]));
//console.log(greatestSum([1,7,-9,2,5,3,-8]));
//console.log(greatestSum([1]));
//console.log(greatestSum([]));
