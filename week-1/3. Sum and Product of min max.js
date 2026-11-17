const sumAndProductOfminMaxInArray = (arr) => {
    let max = arr[0]
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return {
        sum: min + max,
        product: min * max
    }
}

console.log(sumAndProductOfminMaxInArray([1,2,3,4,5,6,7]))