// Input: str = "gfg"
// Output: 7
// Explanation: The seven distinct subsequences are "", "g", "f", "gf", "fg", "gg" and "gfg" 
// Brute force binary recursion tree

const genSub = (ind, cur, str, set) => {
    const n = str.length
    if (ind === n) {
        set.add(cur)
        return
    }
    // exclude
    genSub(ind + 1, cur, str, set)

    // include
    genSub(ind+1, cur + str[ind], str, set)

}
const distinctSub = (string) => {
    let set = new Set()

    let cur = ""

    genSub(0, cur, string, set)
    return set.size
}

// Using dynamic programming
// dp = [1]

const distinctSub2 = (str) => {
    const n = str.length
    const dp = Array(n+1).fill(0)
    const last = Array(26).fill(-1)
    dp[0] = 1 

    for (let i = 1; i <= n; i++) {
        dp[i] = 2 * dp[i-1]
        idx = str.charCodeAt(i-1) - "a".charCodeAt(0)
        if (last[idx] !== -1) {
            dp[i] = dp[i] - dp[last[idx]]
        }

        last[idx] = i-1
    }
    return dp[n]
}

console.log(distinctSub2("gfg"))