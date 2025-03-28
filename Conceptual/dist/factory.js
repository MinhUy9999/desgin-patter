"use strict";
class ConcreteFactory1 {
    createProductA() {
        return new ConcreteProductA1();
    }
    createProductB() {
        return new ConcreteProductB1();
    }
}
class ConcreteFactory2 {
    createProductA() {
        return new ConcreteProductA2();
    }
    createProductB() {
        return new ConcreteProductB2();
    }
}
class AbtractFactoryProductA {
}
class AbtractFactoryProductB {
}
class ConcreteProductA1 extends AbtractFactoryProductA {
    methodA() {
        console.log('ConcreteProductA1.methodA');
    }
}
class ConcreteProductB1 extends AbtractFactoryProductB {
    methodB() {
        console.log('ConcreteProductB1.methodB');
    }
}
class ConcreteProductA2 extends AbtractFactoryProductA {
    methodA() {
        console.log('ConcreteProductA2.methodA');
    }
}
class ConcreteProductB2 extends AbtractFactoryProductB {
    methodB() {
        console.log('ConcreteProductB2.methodB');
    }
}
