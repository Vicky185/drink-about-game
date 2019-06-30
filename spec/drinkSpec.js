describe("whatCanIDrink", function() {
    
    beforeEach(function() {
        drink = new whatCanIDrink;
    });
    describe("Checks age", function() {
        it("should exist", function() {
            expect(whatCanIDrink).toBeDefined();
        });
        it("should return drink toddy when whatCanIDrink(13)", function() {
            var result = whatCanIDrink(13);
            expect(result).toBe("Drink Toddy");
        });
        it("should return drink coke when whatCanIDrink(17)", function() {
            var result = whatCanIDrink(17);
            expect(result).toBe("Drink Coke");
        });
        it("should return drink beer when whatCanIDrink(20)", function() {
            var result = whatCanIDrink(20);
            expect(result).toBe("Drink Beer");
        });
         it("should return drink whiskey when whatCanIDrink(129)", function() {
            var result = whatCanIDrink(129);
            expect(result).toBe("Drink Whiskey");
        });
        it("should be unable to return when when whatCanIDrink(140)", function() {
            var result = whatCanIDrink(140);
            expect(result).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        });
        it("should be able to call a drink when whatCanIDrink(17)", function() {
            var result = whatCanIDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);
        });
    });
});