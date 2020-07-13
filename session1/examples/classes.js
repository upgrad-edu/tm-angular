var amount = /** @class */ (function () {
    function amount(price, ticketsBooked) {
        this.ticketPrice = price;
        this.numberOfTickets = ticketsBooked;
    }
    amount.prototype.totalCost = function () {
        return this.ticketPrice * this.numberOfTickets;
    };
    return amount;
}());
var ticketOne = new amount(450, 3);
console.log(ticketOne.totalCost());
