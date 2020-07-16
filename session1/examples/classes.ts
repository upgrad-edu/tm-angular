class Booking {
    ticketPrice: number;
    numberOfTickets: number;

    constructor(price: number, ticketsBooked: number) {
            this.ticketPrice = price;
            this.numberOfTickets = ticketsBooked;
    }
    public calculateAmount() {
          return this.ticketPrice * this.numberOfTickets;
    }
}

let ticketOne = new Booking(450, 3);
console.log(ticketOne.calculateAmount());
