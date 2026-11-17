// Brute force approach
const peakInArray1 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if ((i - 1 < 0)) {
            if (arr[i] > arr[i + 1]) {
                return i
            }
        }

        if ((i + 1) > (arr.length - 1)) {
            if (arr[i] > arr[i - 1]) {
                return i
            }
        }

        if ((arr[i] > arr[i + 1]) && (arr[i] > arr[i - 1])) {
            return i;
        }

    }
}

// Optimal approach
const peakInArray2 = (arr) => {
    const n = arr.length
    if (n === 1) return 0

    if (arr[0] > arr[1]) return 0
    if (arr[n - 1] > arr[n - 2]) return n - 1

    let leftIndex = 0
    let rightIndex = n - 1
    while (leftIndex < rightIndex) {
        const middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if ((arr[middleIndex] > arr[middleIndex + 1]) && (arr[middleIndex] > arr[middleIndex - 1])) {
            return middleIndex
        }
        if (arr[middleIndex] < arr[middleIndex - 1]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
}