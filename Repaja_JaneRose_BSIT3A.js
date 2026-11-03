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

    getPaymentDetails() {
        return `${this.processPayment()}\n${this.showAmount()}`;
    }
}

class CashPayment extends Payment {
    payCash() {
        return `Paid ₱${this.amount} using Cash`;
    }

    getPaymentMethod() {
        return "Payment Method: Cash";
    }
}

class GCashPayment extends Payment {
    payGCash() {
        return `Paid ₱${this.amount} using GCash`;
    }

    getPaymentMethod() {
        return "Payment Method: GCash";
    }
}

const cash = new CashPayment(500);
const gcash = new GCashPayment(750);

console.log("=== Cash Payment ===");
console.log(cash.getPaymentDetails());
console.log(cash.getPaymentMethod());
console.log(cash.payCash());

console.log("\n=== GCash Payment ===");
console.log(gcash.getPaymentDetails());
console.log(gcash.getPaymentMethod());
console.log(gcash.payGCash());
