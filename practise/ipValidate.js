const validateIpv4 = (s) => {
    const n = s.length
        if (n < 7) return false
        
        let testSection = ""
        let dotCounts = 0
        for (let i = 0; i < n; i++) {
            if (s[i] === ".") {
                if (!testSection) {
                    return false
                }
                if (testSection.length > 1 && testSection[0] === "0") return false
                const int = +testSection
                if (int < 0 || int > 255) {
                    return false
                } else {
                    testSection = ""
                    dotCounts++
                }
            } else {
                testSection += s[i]
                if (i === n-1) {
                    if (testSection.length > 1 && testSection[0] === "0") return false
                    const int = +testSection
                    if (int < 0 || int > 255) {
                        return false
                    } else {
                        testSection = ""
                    }
                }
            }
        }
        return dotCounts === 3
}

// const validateIpv6 = (s) => {
//     const validateSection = (sec) => {
//         const n = sec.length
//         if (n === 0 || n > 4)
//     }
// }