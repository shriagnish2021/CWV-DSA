function areIsomorphic(s1, s2) {
    const obj1 = {}
    const obj2 = {}

    for (let i = 0; i < s1.length; i++) {
        if (obj1[s1[i]] === undefined) {
            obj1[s1[i]] = i
        }
        if (obj2[s2[i]] === undefined) {
            obj2[s2[i]] = i
        }
        if (obj1[s1[i]] !== obj2[s2[i]]) {
            return false
        }
    }
    return true
}

console.log(areIsomorphic("aab", "xxy"))
console.log(areIsomorphic("aab", "xey"))
