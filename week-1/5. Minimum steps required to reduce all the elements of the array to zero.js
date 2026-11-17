// Minimum steps required to reduce all the elements of the array to zero

const minSteps2 = (arr) => {
    return Math.max(...arr)
}

console.log(minSteps2([ 1, 2, 4 ]))