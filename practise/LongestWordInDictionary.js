// d = ["ale", "apple", "monkey", "plea"], s = "abpcplea"
const isSubsequence = (word, s) => {
    let i = 0, j = 0;
    if (word.length > s.length) return false

    while ((i < word.length) && (j < s.length)) {
        if (word[i] === s[j]) {
            i++
        }
        j++
    }

    return i === word.length
}

const longestWordInDictionary = (arr, s) => {
    let longest = ""
    for (let str of arr) {
        if (isSubsequence(str, s)) {
            longest = (str.length > longest.length) || ((str.length === longest.length) && (str < longest)) ? str : longest
        }
    }
    return longest
}

// console.log(isSubsequence("plea", "abpcplea"))
console.log(longestWordInDictionary(["ale", "apple", "monkey", "plea"], "abpcplea"))
console.log(longestWordInDictionary(["a", "b", "c"], "abpcplea"))