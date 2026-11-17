// Brute force approach by self
// const decimalToRoman = (input) => {
//     const base = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
//     const romanValues = {
//         1: "I",
//         4: "IV",
//         5: "V",
//         9: "IX",
//         10: "X",
//         40: "XL",
//         50: "L",
//         90: "LC",
//         100: "C",
//         400: "CD",
//         500: "D",
//         900: "CM",
//         1000: "M"
//     }
//     if (base.includes(input)) return romanValues[input]
//     let romanStr = ""
    
//     let base2 = base.find((val, index) => val <= input && input < base[index+1]) ?? input > 1000 ? 1000 : undefined

//     let r=input % base2, q = Math.floor(input / base2);
//     if (r === 0) {
//         for (let i = 0; i < q; i++) {
//             romanStr += romanValues[base2]
//         }
//         return romanStr
//     }
    
//     while (r !== 0) {
//         for (let i = 0; i < q; i++) {
//             romanStr += romanValues[base2]
//         }

//         base2 = base.find((val, index) => val <= r && r < base[index+1])
//         if (r % base2 === 0) {
//             romanStr += romanValues[r]
//         }
//         r = r%base2
//         q = Math.round(r / base2)
//     }
//     return romanStr

// }

// approach for general purpose
const decimalToRoman = (input) => {
    const base = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
    const romanValues = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "LC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    }
    if (base.includes(input)) return romanValues[input]
    let romanStr = ""
    let r = input
    for (let i = base.length - 1; i > 0; i--) {
        if (Math.floor(r/base[i]) > 0) {
            for (let j = 0; j < Math.floor(r/base[i]); j++) {
                romanStr += romanValues[base[i]]
            }
            r = r%base[i];
        }
    }
    
    return romanStr

}

// approach for limited range
const decimalToRoman2 = (input) => {
    const t = ["", "M", "MM", "MMM"]
    const h = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM" ]
    const te = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XL"]
    const o = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]

    const thousands = t[Math.floor(input/1000)]
    const hundreds = h[Math.floor(input%1000/100)]
    const tens = te[Math.floor(input%1000%100/10)]
    const ones = o[Math.floor(input%1000%100%10)]

    return thousands + hundreds + tens + ones
}

console.log(decimalToRoman(3549))