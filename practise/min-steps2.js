// Minimum steps required to reduce all the elements of the array to zero

// Given an array arr[] of positive integers, the task is to find the minimum steps to reduce all the elements to 0. In a single step, -1 can be added to all the non-zero elements of the array at the same time.

// Input: arr[] = {1, 5, 6} 
// Output: 6 
// Operation 1: arr[] = {0, 4, 5} 
// Operation 2: arr[] = {0, 3, 4} 
// Operation 3: arr[] = {0, 2, 3} 
// Operation 4: arr[] = {0, 1, 2} 
// Operation 5: arr[] = {0, 0, 1} 
// Operation 6: arr[] = {0, 0, 0}
// Input: arr[] = {1, 1} 
// Output: 1 


const minSteps2 = (arr) => {
    return Math.max(...arr)
}

console.log(minSteps2([1,5,6]))