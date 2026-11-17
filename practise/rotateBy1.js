// 1. By storing last element in variable and shofting the entire array to right
const rotateBy1 = (arr) => {
    const n = arr.length - 1
    const lastElement = arr[n]
    for (let i=n; i > 0; i--) {
        arr[i] = arr[i-1]
    }
    arr[0] = lastElement
}

// 2. By using two pointers
const rotateBy1v2 = (arr) => {
    let i = 0, j = arr.length - 1;
    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++
    }
    return arr
}

// 3. By usring reversal algorithm
const rotateBy1v3 = (arr) => {
    for (let i = 0, j = arr.length - 2; i < j; i++, j--) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}

console.log(rotateBy1v3([1,2,3,4,5]))