// Dutch national algorithm
const sort012 = (arr) => {
    let l = 0;
    let mid = 0;
    let r = arr.length - 1

    while (mid <= r) {
        if (arr[mid] === 0) {
            [arr[l], arr[mid]] = [arr[mid], arr[l]]
            l++
            mid++
        } else if (arr[mid] === 1) {
            mid++
        } else {
            [arr[mid], arr[r]] = [arr[r], arr[mid]]
            r--
        }
    }
    return arr
}

console.log(sort012([0, 1, 2, 0, 1, 2]))