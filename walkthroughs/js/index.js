// Car Class
class Car {
  constructor(id, make, model, year, color, price) {
    this.id = id;
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;
  }
}

// Transaction class
class Transaction {
  constructor(type, amount, product, customerDetails) {
    this.type = type;
    this.amount = amount;
    this.product = product;
    this.time = new Date();
    this.customerDetails = customerDetails;
  }
}

// CarLot Class
class Dealership {
  constructor() {
    this.nextAvailableId = 1;
    this.inventory = [];
    this.transactions = [];
    this.money = 1000000;
  }

  report() {
    console.log(
      `==========\nCars: ${this.inventory.length}\nTransactions: ${this.transactions.length}\nMoney: $${this.money}\n==========`
    );
  }

  sell(carId, customerDetails) {
    let carIdx = this.inventory.findIndex(({ id }) => carId == id);
    let soldCar = this.inventory.splice(carIdx, 1)[0];
    let transaction = new Transaction(
      "sale",
      soldCar.price,
      soldCar,
      customerDetails
    );

    this.money += soldCar.price;
    this.transactions.push(transaction);
  }

  add(make, model, year, color, price) {
    let newCar = new Car(
      this.nextAvailableId++,
      make,
      model,
      year,
      color,
      price + 2000
    );

    let transaction = new Transaction("stock", price, newCar);

    this.money -= price;
    this.transactions.push(transaction);
    this.inventory.push(newCar);
  }
}

let dealership = new Dealership();

dealership.add("Ford", "Mustang", 2020, "silver", 20000);

dealership.report();

dealership.sell(1, { name: "Ben Bryant", address: "Birmingham" });

dealership.report();
