function Ticket(price, movieName, movieTime, age, firstRelease){
    this.price = price;
    this.movieName = movieName;
    this.movieTime = movieTime;
    this.age = age;
    this.firstRelease = firstRelease;
}

Ticket.prototype.seniorDiscount = function() {
    if(this.age >= 65)
        return (this.price - 2);
    return this.price;
}

Ticket.prototype.matineeDiscount = function() {
    if(this.movieTime >= 17)
        return (this.price - 1);
    return this.price;

}


// things that change ticket price
// age (>65), first release (t/f), matinee (time-based)
