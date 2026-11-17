// 4,3,2
const findMinMax = (arr) => {
    const n = arr.length;

    if (n===1) return arr[0];

    let min = arr[0];
    let max = arr[0]
    for (let i = 1; i < n ; i++) {
        if(arr[i] < min) {
            min = arr[i]
        }
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    return [min, max]
}
console.log(findMinMax([4,3,2,5]))
