function findAnagrams(s,p) {
    const result = []
    const charArr = new Array(26).fill(0)
    for (let i = 0; i < p.length; i++) {
        charArr[s[i].charCodeAt(0) - "a".charCodeAt(0)] = 1
    }
    console.log(charArr)

    // let count = 0
    // for (let i = 0; i < p.length; i++) {
    //     if (set.has(s[i])) {
    //         count++
    //     }
    //     if (count === 3) {
    //         result.push(0)
    //     }
    // }
    // for (let i = p.length; i < s.length; i++) {
    //      if (set.has(s[i])) {
    //         count++
    //     }
    //     if (set.has(s[i - p.length])) {
    //         count--
    //     }
    //     console.log(i, count)
    //     if (count === 3) {
    //         result.push(i - p.length + 1)
    //     }
    // }
    // return result
};

console.log(findAnagrams("cbaebabacd", "abc"))