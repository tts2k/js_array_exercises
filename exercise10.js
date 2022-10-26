/*
* 10. 	Write 3 methods myMap, myFilter, myReduce (suggest: user Array.prototype, "this" keyword, and for loop).
*       3 these methods have similar in use and usage as map, filter, reduce of array in JS
*/

/* Program */
Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }

  return result;
}

Array.prototype.myFilter = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result.push(this[i]);
    }
  }

  return result;
}

Array.prototype.myReduce = function(callback, initialValue) {
  const init = (initialValue) ? initialValue : this[0];
  const result = init;

  for (let i = 1; i < this.length; i++) {
    result = callback(result, this[i]);
  }

  return result;
}

/* Test */

// Map
const arr = [1, 2];

const arrMapped = arr.myMap((e) => { return { raw: e, doubled: e * 2} });
console.log(arrMapped);


// Filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const wordsFiltered = words.myFilter(word => word.length > 6);
console.log(wordsFiltered);

// Reduce
const order = {
  cart: [
    { id: 1, name: "ao dai", amount: 5, price: 100000 },
    { id: 2, name: "ao coc", amount: 2, price: 200000 },
    { id: 3, name: "quan dai", amount: 3, price: 150000 },
    { id: 4, name: "quan coc", amount: 4, price: 130000 },
  ],
  customer: 'Name',
  address: '12 Giai Phong Street'
};

const orderReduced = order.cart.reduce((prev, obj) => {
    return {
      totalOfMoney: prev.totalOfMoney + obj.price * obj.amount,
      totalOfAmount: prev.totalOfAmount + obj.amount
    }
  }, { totalOfMoney:0, totalOfAmount: 0 })
console.log(orderReduced);
