class amount {
    ticketPrice: number;
    numberOfTickets: number;

    constructor(price: number, ticketsBooked: number) {
            this.ticketPrice = price;
            this.numberOfTickets = ticketsBooked;
    }

}

let ticketOne = new amount(450, 3);
console.log(ticketOne);
