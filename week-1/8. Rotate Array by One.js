const rotate = (arr) => {
    const n = arr.length

    for (let i = n - 2; i >= 0; i--) {
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]
    }
    return arr
}