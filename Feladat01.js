
//feladat01.js

function feladat01(colors) {
    let n = 1
    let factors = []
    let numOfCombinations = 0
    factors[0] = 1
    for (i = 1; i <= colors.length; i++) {
        n = n * i
        factors[i] = n
    }
    for (i = 2; i <= colors.length; i++) {
        numOfCombinations = numOfCombinations + (factors[colors.length] / (factors[i] * factors[(colors.length - i)]))
    }
    return numOfCombinations
}



