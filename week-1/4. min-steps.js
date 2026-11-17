// Minimum steps to make sum and the product of all elements of array non-zero
// {-1, -1, 0, 0}  output = 3
const minSteps = (arr) => {
    let sum = 0
    let step = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            step++
            arr[i]++
        }
        sum += arr[i]
    }
    return sum === 0 ? ++step : step
}

console.log(minSteps([0, 1, 2, 3]))