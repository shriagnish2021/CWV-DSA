function checkPangram(s) {
    const string = s.toLowerCase()
    const arr = new Array(26).fill(0)
    for (let i = 0; i < string.length; i++) {

        if ((string.charCodeAt(i) >= 'a'.charCodeAt(0)) && (string.charCodeAt(i) <= 'z'.charCodeAt(0))) {
            arr[string.charCodeAt(i) - 'a'.charCodeAt(0)]++
        }
    }

    return arr.every(a => a !== 0)
}

console.log(checkPangram("Bawds jog, flick quartz, vex nymph"))