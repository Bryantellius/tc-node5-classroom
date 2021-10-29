const sales = [
  {
    subtotal: 19.5,
    taxRate: 0.1,
  },
  {
    subtotal: 20,
    taxRate: 0.1,
  },
  {
    subtotal: 19.99,
    taxRate: 0.15,
  },
  {
    subtotal: 100.72,
    taxRate: 0.05,
  },
];

let totals = sales.map(function (value) {
  return value.subtotal + value.subtotal * value.taxRate;
});

console.log(totals)