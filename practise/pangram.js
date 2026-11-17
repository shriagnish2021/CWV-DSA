const isPangram = (string) => {
    const arr = new Array(26).fill(false);
    for (let i = 0; i < string.length; i++) {
        const c = string[i]

        if (c >= "A" && c <= "Z") {
            arr[c.charCodeAt(0) - "A".charCodeAt(0)] = true
        }

        if (c >= "a" && c <= "z") {
            arr[c.charCodeAt(0) - "a".charCodeAt(0)] = true
        }
    }
    for (let i of arr) {
        if (!i) {
            return false
        }
    }
    return true
}

console.log(isPangram("The quick"))