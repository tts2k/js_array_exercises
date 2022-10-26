/*9. I have 1 object like this: 
* const order = {
* 	cart: [
* 		{ id: 1, name: "ao dai", amount: 5, price: 100000 },
* 		{ id: 2, name: "ao coc", amount: 2, price: 200000 },
* 		{ id: 3, name: "quan dai", amount: 3, price: 150000 },
* 		{ id: 4, name: "quan coc", amount: 4, price: 130000 },
* 	],
* 	customer: 'Name',
* 	address: '12 Giai Phong Street'
* 	};
* Please use only reduce method, and only one time, return for me 2 variables: totalOfMoney = 1870000, totalOfAmount = 14;
* 
*
*/

/* Program */
function total(arr) {
  return arr.cart.reduce((prev, obj) => {
    return {
      totalOfMoney: prev.totalOfMoney + obj.price * obj.amount,
      totalOfAmount: prev.totalOfAmount + obj.amount
    }
  }, { totalOfMoney:0, totalOfAmount: 0 })
}

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

/* Test */
console.log(total(order));
