const twoSum = (arr, target) => {
    const obj = {}
    for (let i=0; i < arr.length; i++) {
        if (obj[target - arr[i]] !== undefined) {
            return [obj[target - arr[i]], i]
        }
        obj[arr[i]] = i
    }
}

// Two sum using two pointer method
const twoSum2 = (arr, target) => {
    let l = 0, r = arr.length - 1;
    while (l < r) {
        if ((arr[l] + arr[r]) > target) {
            r--
        } else if ((arr[l] + arr[r]) < target) {
            l++
        } else {
            return [l, r]
        }
    }
}

console.log(twoSum2([2,4,5,6,7], 8))