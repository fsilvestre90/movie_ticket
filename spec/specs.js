describe('Ticket', function() {
    it("creates a new ticket with the given properties", function() {
        var testTicket = new Ticket(8.50, "3 Ninjas", 16, 21, true);
        expect(testTicket.price).to.equal(8.50);
        expect(testTicket.movieName).to.equal("3 Ninjas");
        expect(testTicket.movieTime).to.equal(16);
        expect(testTicket.age).to.equal(21);
        expect(testTicket.firstRelease).to.equal(true);
    });

    it("applies discount to senior citizen", function() {
        var testTicket = new Ticket(8.50, "3 Ninjas", 16, 67, true);
        expect(testTicket.seniorDiscount()).to.equal(6.50);
    });

    it("does not discount to 21 year old", function() {
        var testTicket = new Ticket(8.50, "3 Ninjas", 16, 21, true);
        expect(testTicket.seniorDiscount()).to.equal(8.50);
    });

    it("applies discount to matinee", function() {
        var testTicket = new Ticket(8.50, "3 Ninjas", 17, 21, true);
        expect(testTicket.matineeDiscount()).to.equal(7.50);
    });

    it("does not apply discount to matinee", function() {
        var testTicket = new Ticket(8.50, "3 Ninjas", 12, 21, true);
        expect(testTicket.matineeDiscount()).to.equal(8.50);
    });

    it("applies discount to first releases", function() {
        var testTicket = new Ticket(8.50, "3 Ninjas", 12, 21, false);
        expect(testTicket.firstReleaseDiscount()).to.equal(7.50);
    })

});
