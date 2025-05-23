import { AbstractFactory, ConcreteFactory1, ConcreteFactory2 } from './factory';

function clientCode(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();
    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}

console.log('Client: Testing client code with the first factory type...');
clientCode(new ConcreteFactory1());

console.log('\nClient: Testing the same client code with the second factory type...');
clientCode(new ConcreteFactory2());
