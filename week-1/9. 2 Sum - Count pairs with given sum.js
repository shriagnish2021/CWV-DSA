function countPairs(arr, target) {
    let count = 0
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[target - arr[i]] !== undefined) {
            count = count + obj[target - arr[i]];
        }
        obj[arr[i]] = (obj[arr[i]] || 0) + 1
    }
    return count
}

console.log(countPairs([1, 5, 7, -1, 5], 6))