// Minimum steps to make sum and the product of all elements of array non-zero

// Input: N = 4, arr[] = {0, 1, 2, 3} 
// Output: 1 
// Explanation: 
// As product of all elements of the array is zero 
// Increment the array element 0 by 1, such that array sum and product is not equal to zero.
// Input: N = 4, arr[] = {-1, -1, 0, 0} 
// Output: 3 
// Explanation: 
// As product of all elements of the array is zero 
// Increment the array element 2 and 3 by 1, such that array sum and product is not equal to zero 


const minSteps = (arr) => {
    let steps = 0;
    let sum = 0;
    for (let i=0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr[i]++
            steps++
        }
        sum = sum + arr[i]
    }
    if (sum === 0) {
        arr[0]++
        steps++
    }
    return steps
}

console.log(minSteps([-1,-1,0,0]))
console.log(minSteps([0,1,2,3]))