class Payment {
    constructor(amount) {
        this.amount = amount;
    }

    processPayment() {
        return "Processing payment...";
    }

    showAmount() {
        return `Amount: ₱${this.amount}`;
    }
}

class CashPayment extends Payment {
    payCash() {
        return `Paid ₱${this.amount} using Cash`;
    }
}

class GCashPayment extends Payment {
    payGCash() {
        return `Paid ₱${this.amount} using GCash`;
    }
}

const cash = new CashPayment(500);
const gcash = new GCashPayment(750);

console.log(cash.processPayment());
console.log(cash.showAmount());
console.log(cash.payCash());

console.log(gcash.processPayment());
console.log(gcash.showAmount());
console.log(gcash.payGCash());