class Customer {
    constructor(id) {
        this.id = id;
    }

    update(itemName) {
        console.log(`Sending email to customer ${this.id} for item ${itemName}`);
    }

    getID() {
        return this.id;
    }
}

module.exports = Customer;