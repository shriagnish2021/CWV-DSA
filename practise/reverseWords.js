const reverseArr = function (arr, start, end) {
    for (let i = start, j = end; i < j; i++, j--) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}

console.log(reverseArr([1,2,3,4], 0, 3))

const reverseWords = (string) => {
    const stringArr = string.split("")
    const n = stringArr.length

    // reverse entire string
    reverseArr(stringArr, 0, n - 1)

    let i = 0;

    for (let l = 0; l < n; l++) {
        if (stringArr[l] !== ".") {
            if (i !== 0) {
                stringArr[i++] = "."
            }

            let r = l;
            while (r < n && stringArr[r] !== ".") {
                stringArr[i++] = stringArr[r++]
            }

            reverseArr(stringArr, i - (r - l), i-1)

            l = r
        }
    }
    return stringArr.slice(0, i).join("")
}

// stack approach - naive approach
const reverseWords2 = (string) => {
    const wordsArr = string.split(".");
    const result = [];

    for (let word of wordsArr) {
        if (word.length > 0) {
            result.push(word)
        }
    }
    return result.reverse().join(".")
}

console.log(reverseWords2("i.like.this.program.very..much"))