
//feladat01.js

function feladat01(szinek) {
    let n = 1
    let faktors = []
    let numOfCombinations = 0
    faktors[0] = 1
    for (i = 1; i <= szinek.length; i++) {
        n = n * i
        faktors[i] = n
    }
    for (i = 2; i <= szinek.length; i++) {
        numOfCombinations = numOfCombinations + ((faktors[szinek.length]) / ((faktors[i]) * (faktors[(szinek.length - i)])))
    }
    return numOfCombinations
}


