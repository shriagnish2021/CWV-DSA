const romanToInteger = (string) => {
    let value = 0;
    const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    for (let i = 0; i < string.length; i++) {
        if (romanValues[string[i+1]] > romanValues[string[i]]) {
            value = value - romanValues[string[i]]
        } else {
            value = value + romanValues[string[i]]
        }
    }
    return value
}

console.log(romanToInteger("IX"))