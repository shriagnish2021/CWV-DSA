const romanToInteger = (roman) => {
    const romanToInteger = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let valueSum = 0
    for (let i = 0; i < roman.length; i++) {
        if (romanToInteger[roman[i + 1]] > romanToInteger[roman[i]]) {
            valueSum = valueSum - romanToInteger[roman[i]]
        } else {
            valueSum = valueSum + romanToInteger[roman[i]]
        }
    }
    return valueSum
}

console.log(romanToInteger("MCMIV"))