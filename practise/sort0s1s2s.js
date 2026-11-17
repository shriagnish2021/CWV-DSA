const sort0s1s2s = (arr) => {
    let lo = 0, mid = 0 

    let hi = arr.length - 1
    while(mid <= hi) {
        if (arr[mid] === 0) {
            [arr[lo], arr[mid]] = [arr[mid], arr[lo]];
            lo++
            mid++
        } else if(arr[mid] === 1) {
            mid++
        } else {
            [arr[mid], arr[hi]] = [arr[hi], arr[mid]];
            hi--
        }
    }
    return arr

}

console.log(sort0s1s2s([0, 1, 2, 0, 1, 2]))
console.log(sort0s1s2s([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]))

