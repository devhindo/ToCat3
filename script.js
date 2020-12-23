var products = [
  { type: 'A', price: 5, name: 'type A 1'},
  { type: 'B', price: 7.5, name: 'type B 1'},
  { type: 'C', price: 10, name: 'type C 1'},
  { type: 'A', price: 15, name: 'type A 2'},
  { type: 'A', price: 2, name: 'type A 3'},
];



// solution structure 1
/* function getTotalPrice(products, type) {
    let total = 0;
    for (i=0; i < products.length; i++) {
      if (products[i].type == type) {
       total = total + products[i].price;
      }
    }
    return total;
}  */



// solution structure 2
 function getTotalPrice(products, type) {
   var selected = products.filter( product => product.type == type);
   var total = selected.reduce( (total, select) => total + select.price,0);
   return total;
  } 
 
   

 // example
 getTotalPrice(products, 'A'); // 5 + 15 + 2 = 22
 getTotalPrice(products, 'B'); // 7.5
 getTotalPrice(products, 'C'); // 10
