const bubbleSort = (arr) => {
    const n = arr.length
    for (i = 0; i < n; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }

        }
    }
    return arr
}

const selectionSort = (arr) => {
    const n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i
        for (j = i + 1; j < n; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr
}

const insertionSort = (arr) => {
    const n = arr.length
    for (let i = 1; i < n; i++) {
        let valueToInsert = arr[i]
        let j = i - 1;
        while (j >= 0 && arr[j] > valueToInsert) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = valueToInsert
    }
    return arr
}

// console.log(bubbleSort([1,2,4,3]))
// console.log(selectionSort([1,2,4,3]))
console.log(insertionSort([8, 20, -2, 4, -6]))


