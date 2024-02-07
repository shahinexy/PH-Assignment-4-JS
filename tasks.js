function calculateMoney(ticketSale) {
    if(ticketSale < 0){
        return 'Invalid Number';
    }
    if(typeof ticketSale !== 'number'){
        return 'Pleace Enter a valid number.'
    }
    const totalTicketPrice = ticketSale*120 ;
    const totalCost = 500 + (8*50);
    return totalTicketPrice - totalCost;
}
console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-93));
console.log(calculateMoney(0));
console.log(calculateMoney('Shahin'));