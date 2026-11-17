const areIsomorphic = (s1, s2) => {
    const m1 = {}
    const m2 = {}
    for (let i = 0; i < s1.length; i++) {
        if (!(s1[i] in m1)) {
            m1[s1[i]] = i
        }
        if (!(s2[i] in m2)) {
            m2[s2[i]] = i
        }

        if (m1[s1[i]] !== m2[s2[i]]) {
            return false
        }

    }
    return true
} 

console.log(areIsomorphic("abca", "xycx"))