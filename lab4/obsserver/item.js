class Item {
    constructor(name) {
        this.name = name;
        this.inStock = false;
        this.observers = [];
    }

    updateAvailability() {
        console.log(`Item ${this.name} is now in stock`);
        this.inStock = true;
        this.notifyAll();
    }

    register(observer) {
        this.observers.push(observer);
    }

    deregister(observer) {
        this.observers = this.observers.filter(obs => obs.id !== observer.id);
    }

    notifyAll() {
        this.observers.forEach(observer => observer.update(this.name));
    }
}

module.exports = Item;