const countPairs = (arr, target) => {
    const obj = {}
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (obj[target - arr[i]] !== undefined) {
            count = count + (obj[target - arr[i]]) 
        }
        obj[arr[i]] = (obj[arr[i]] || 0) + 1
    }
    return count
}

console.log(countPairs([1, 1, 1, 1], 2))