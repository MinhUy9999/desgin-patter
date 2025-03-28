"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factory_1 = require("./factory");
function clientCode(factory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();
    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}
console.log('Client: Testing client code with the first factory type...');
clientCode(new factory_1.ConcreteFactory1());
console.log('\nClient: Testing the same client code with the second factory type...');
clientCode(new factory_1.ConcreteFactory2());
