const sort0s1s = (arr) => {
    let lo = 0
    let hi = arr.length - 1
    while(lo <= hi) {
        if (arr[lo] === 1 && arr[hi] === 0) {
            let temp = arr[lo]
            arr[lo] = arr[hi]
            arr[hi] = temp
            lo++
            hi--
            continue
        }
        if (arr[lo] === 0) {
            lo++
        }
        if (arr[hi] === 1) {
            hi--
        }
    }
    return arr
}

console.log(sort0s1s([1,0,1,0,1]))
console.log(sort0s1s([0,1,0]))
console.log(sort0s1s([1,1]))
console.log(sort0s1s([0]))