const multiplyLargeNumbers = (s1, s2) => {
    const n1 = s1.length
    const n2 = s2.length
    const ans = Array(n1+n2).fill(0)
    let shift = 0

    for (let j = n2 - 1; j >= 0; j--) {
        let carry = 0
        let product = Array(n1+n2).fill(0)
        let k = n1+n2-1-shift
        for (let i = n1 - 1; i >= 0; i--) {
            let pro = (+s2[j] * +s1[i]) + carry
            carry = Math.floor(pro/10)
            product[k] = pro%10
            k--
        }
        shift++

        let carr = 0
        for (let m = n1+n2-1; m >= 0; m--) {
            let sum = ans[m] + product[m] + carr
            ans[m] = sum % 10
            carr = Math.floor(sum/10)
        }
    }
    return ans
}
// function multiplyStrings(s1, s2) {
//     if (!s1 || !s2) return "0";

//     // Handle signs upfront
//     const isNeg = (s1[0] === '-') !== (s2[0] === '-');
//     if (s1[0] === '-') s1 = s1.slice(1);
//     if (s2[0] === '-') s2 = s2.slice(1);

//     const n1 = s1.length, n2 = s2.length;
//     const result = new Array(n1 + n2).fill(0);

//     // Standard column-by-column multiplication
//     for (let i = n1 - 1; i >= 0; i--) {
//         for (let j = n2 - 1; j >= 0; j--) {
//             const pos = (n1 - 1 - i) + (n2 - 1 - j);
//             const sum = (+s1[i] * +s2[j]) + result[pos];

//             result[pos] = sum % 10;
//             result[pos + 1] += Math.floor(sum / 10);
//         }
//     }

//     // Trim trailing zeroes (stored in reverse)
//     let end = result.length - 1;
//     while (end >= 0 && result[end] === 0) end--;

//     if (end === -1) return "0";

//     let s = "";
//     while (end >= 0) s += result[end--];

//     return isNeg ? "-" + s : s;
// }
console.log(multiplyLargeNumbers("123", "25"))