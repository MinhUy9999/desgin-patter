const Item = require("./item");
const Customer = require("./customer");

const item = new Item("Laptop");
const customer1 = new Customer("customer1@example.com");
const customer2 = new Customer("customer2@example.com");

item.register(customer1);
// item.register(customer2);

item.updateAvailability();