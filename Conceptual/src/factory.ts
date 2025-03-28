interface AbtractFactory {
    createProductA(): ProductA;
    createProductB(): ProductB;
}

class ConcreteFactory1 implements AbtractFactory {
    public createProductA(): AbtractFactoryProductA {
        return new ConcreteProductA1();
    }
    public createProductB(): AbtractFactoryProductB {
        return new ConcreteProductB1();
    }
}

class ConcreteFactory2 implements AbtractFactory {
    public createProductA(): AbtractFactoryProductA {
        return new ConcreteProductA2();
    }
    public createProductB(): AbtractFactoryProductB {
        return new ConcreteProductB2();
    }
}

interface ProductA {
    methodA(): void;
}

interface ProductB {
    methodB(): void;
}

abstract class AbtractFactoryProductA implements ProductA {
    public abstract methodA(): void;
}

abstract class AbtractFactoryProductB implements ProductB {
    public abstract methodB(): void;
}

class ConcreteProductA1 extends AbtractFactoryProductA {
    public methodA(): void {
        console.log('ConcreteProductA1.methodA');
    }
}

class ConcreteProductB1 extends AbtractFactoryProductB {
    public methodB(): void {
        console.log('ConcreteProductB1.methodB');
    }
}

class ConcreteProductA2 extends AbtractFactoryProductA {
    public methodA(): void {
        console.log('ConcreteProductA2.methodA');
    }
}

class ConcreteProductB2 extends AbtractFactoryProductB {
    public methodB(): void {
        console.log('ConcreteProductB2.methodB');
    }
}