const fizzBuzz = (number: number): string =>{
    if (number === 0) return "0"
    if(number % 15 === 0) return "FIZZBUZZ"
    if(number % 3 === 0) return "FIZZ"
    if(number % 5 === 0) return "BUZZ"
    return number.toString()
}

describe('FizzBuzz', function () {
    //test ou it en mot cle
    it('should do be true', function () {
        //mot clé de jest
        //je m'attend que la valeur en espect soit la valeur en toBe
        expect(true).toBe(true)
    })
    it('should return 0 when 0 is provided', function () {
        expect(fizzBuzz(0)).toBe("0")
    })
    it('should return 1 when 1 is provided', function () {
        expect(fizzBuzz(1)).toBe("1")
    })
    it('should return 3 when 3 is provided', function () {
        expect(fizzBuzz(3)).toBe("FIZZ")
    })
    //Il est possible de faire des sous catégories de test
    describe('Non divisible numbers', function () {
        it.each([
            ["0", 0],
            ["1", 1],
            ["FIZZBUZZ", 15],
        ])("should return %s when %i is provided", function (expected: string, n: number) {
            expect(fizzBuzz(n)).toBe(expected)
        })
    })
    describe('Divisible par 3', function () {
        it('should return "FIZZ" when 3 is provided', function () {

        })
    })
})