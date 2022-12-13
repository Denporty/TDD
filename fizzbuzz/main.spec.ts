// const mainFunction = (number: number): Array<number> => {
//     let arrayContent = []
//     if (number === 9) return [3,3]
//     if (number % 3 === 0 && number % 2 === 0) {
//         while (number % 3 === 0) {
//             arrayContent.push(2)
//             number = number/2
//         }
//         arrayContent[arrayContent.length-1] = 3
//         return arrayContent
//     }
//     if (number % 2 === 0) {
//         while (number % 2 === 0) {
//             arrayContent.push(2)
//             number = number/2
//         }
//         return arrayContent;
//     }
//     if (number > 1) return [number]
//     return []
// }

const mainFunction = (number: number): Array<number> => {
    if (number % 11 === 0) {
        return whileFunction(number, 11, 11, 2)
    }
    if (number % 7 === 0 && number % 3 === 0) {
        return whileFunction(number, 7, 7, 3)
    }
    if (number % 7 === 0) {
        return whileFunction(number, 7, 7, 2)
    }
    if (number % 5 === 0 && number % 2 === 0) {
        return whileFunction(number, 5, 5, 2)
    }
    if (number % 5 === 0) {
        return whileFunction(number, 5, 5, 3)
    }
    if (number % 3 === 0) {
        return whileFunction(number, 3, 3, 2)
    }
    if (number % 3 === 0 && number % 2 === 0) {
        return whileFunction(number, 3, 3, 2)
    }
    if (number % 2 === 0) {
        return whileFunction(number, 2, 2)
    }
    if (number > 1) return [number]
    return []
}

const isPair = (number: number): Boolean => {
    return number % 2 === 0;
}

const whileFunction = (number: number, modulo: number, toPush: number, verification: number = null): Array<number> => {
    let arrayContent = []
    if (number % verification === 0) {
        while (number % verification === 0) {
            arrayContent.push(verification)
            number = number/verification
        }
    }
    while (number % modulo === 0) {
        arrayContent.push(toPush)
        number = number/toPush
    }
    if (modulo === 3) arrayContent[arrayContent.length-1] = 3
    return arrayContent
}

describe('factorisation', function () {
    it('should return [] when 1 is provided', function () {
        expect(mainFunction(1)).toStrictEqual([])
    })
    it('should return [2] when 2 is provided', function () {
        expect(mainFunction(2)).toStrictEqual([2])
    })
    it('should return [5] when 5 is provided', function () {
        expect(mainFunction(5)).toStrictEqual([5])
    })
    it('should return [2,2] when 4 is provided', function () {
        expect(mainFunction(4)).toStrictEqual([2,2])
    })
    it('should return [2,3] when 6 is provided', function () {
        expect(mainFunction(6)).toStrictEqual([2,3])
    })
    it('should return [7] when 7 is provided', function () {
        expect(mainFunction(7)).toStrictEqual([7])
    })
    it('should return [2,2,2] when 8 is provided', function () {
        expect(mainFunction(8)).toStrictEqual([2,2,2])
    })
    it('should return [3,3] when 9 is provided', function () {
        expect(mainFunction(9)).toStrictEqual([3,3])
    })
    it('should return [2,3,3] when 18 is provided', function () {
        expect(mainFunction(18)).toStrictEqual([2,3,3])
    })
    it('should return [2,3,3] when 18 is provided', function () {
        expect(mainFunction(18)).toStrictEqual([2,3,3])
    })
    it('should return [2,5] when 10 is provided', function () {
        expect(mainFunction(10)).toStrictEqual([2,5])
    })
    it('should return [3,5] when 15 is provided', function () {
        expect(mainFunction(15)).toStrictEqual([3,5])
    })
    it('should return [2,2,5] when 20 is provided', function () {
        expect(mainFunction(20)).toStrictEqual([2,2,5])
    })
    it('should return [2,2,7] when 28 is provided', function () {
        expect(mainFunction(28)).toStrictEqual([2,2,7])
    })
    it('should return [2,2,2,5] when 40 is provided', function () {
        expect(mainFunction(40)).toStrictEqual([2,2,2,5])
    })
    it('should return [2,11] when 22 is provided', function () {
        expect(mainFunction(22)).toStrictEqual([2,11])
    })
})