const stringToNumber = (number: string) => {
    let result = 0
    let numberArray = []

    if(number === '') return result
    if (number.includes('//')) {
        let toto = number.split(/[\n//]+/)
        console.log(toto[1])
        let elementToSplit = number.split(toto[1])
        numberArray = elementToSplit.toString().split(/[\n,//]+/)
    } else {
        numberArray = number.split(/[\n,]+/)
    }
    //let numberArray = elementToSplit[1].split(/[\n,;]+/)
    console.log(numberArray)

    numberArray.forEach(numberItem => {
        if (numberItem !== "") {
            result += parseInt(numberItem)
        }
    })

    console.log(result)

    return result
}

describe('String to number', function () {
    it('should return 0 when "" is provided', function () {
        expect(stringToNumber("")).toEqual(0)
    })
    it('should return 2 when "2" is provided', function () {
        expect(stringToNumber("2")).toEqual(2)
    })
    it('should return 4 when "2,2" is provided', function () {
        expect(stringToNumber("2,2")).toEqual(4)
    })
    it('should return 12 when "3,4,5" is provided', function () {
        expect(stringToNumber("3,4,5")).toEqual(12)
    })
    it('should return 7 when "3\n4" is provided', function () {
        expect(stringToNumber("3\n4")).toEqual(7)
    })
    it('should return 12 when "//;\n1;2;3\n4" is provided', function () {
        expect(stringToNumber("//;\n1;2;3\n4")).toEqual(10)
    })
    it('should return 30 when "//%\n10%10%10\n0" is provided', function () {
        expect(stringToNumber("//%\n10%10%10\n0")).toEqual(30)
    })
})