// Find the subarray with a given sum of provided the array has non-negative numbers.

const subArrayNonNegativeNumbers = (arr, target) => {
    let sum = 0
    let startIndex = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]

        while (sum > target) {
            sum = sum - arr[startIndex]
            startIndex++
        }

        if (sum === target) {
            return [startIndex + 1, i + 1]
        }
    }
    return [-1]
}

console.log(subArrayNonNegativeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15))

// Subarray with given sum (including negative numbers)
const subArrayWithNegativeNumbers = (arr, target) => {
    const prefixSum = [0]
    for (let i = 0; i < arr.length; i++) {
        prefixSum.push(prefixSum[i] + arr[i])
    }

    const obj = {}
    for (let i = 0; i < prefixSum.length; i++) {
        if (obj[prefixSum[i] - target] !== undefined) {
            return [obj[prefixSum[i] - target]+1, i]
        }
        if (obj[prefixSum[i]] === undefined) {
            obj[prefixSum[i]] = i
        }
    }
    return [-1]
}

console.log(subArrayWithNegativeNumbers([1,1,5], 5))