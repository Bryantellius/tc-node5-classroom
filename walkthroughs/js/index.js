let productFromDatabase = {
  name: "Macbook",
  color: "silver",
  price: 1299.99,
  salePercentage: 10,
};

function calcSaleTotal({ price, salePercentage }) {
  return price * salePercentage + price;
}

calcSaleTotal(productFromDatabase);
calcSaleTotal({ price: 100, salePercentage: 13 });
