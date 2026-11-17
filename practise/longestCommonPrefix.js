// using sorting inbuilt fn -> O(n * m * log n)
const longestCommonPrefix = (arr) => {
    arr.sort()
    const first = arr[0]
    const last = arr[arr.length - 1]

    const minWordLength = first.length > last.length ? last.length : first.length

    let str = ""

    for (let i = 0; i < minWordLength; i++) {
        if (first[i] === last[i]) {
            str += first[i]
        } else {
            break;
        }
    }
    return str
}

// using char by char matching
const longestCommonPrefix2 = (arr) => {
    const n = arr.length
    let charIndex = 0
    let count = 0
    let str = ""
    while (true) {
        if (charIndex > arr[0].length - 1) {
            break
        }
        let char = arr[0][charIndex]
        for (let i = 0; i < n; i++) {
            if (arr[i][charIndex] === char) {
                count++
            }
        }
        if (count === n) {
            str += arr[0][charIndex]
            count = 0
            charIndex++
        } else {
            break;
        }
    }
    return str
}

console.log(longestCommonPrefix2(["g", "g", "g"]))