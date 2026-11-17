// Find Subarray with given Sum from Array of non-negative Numbers

const subarraySum = (arr, target) => {
        // code here
        let sum = 0;
        let startIndex = 0;
        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i]
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

console.log(subarraySum([26, 3, 28, 7], 52))

// Find the maxSubarraySum of size k
function maxSubarraySum(nums, k) {
    let windowSum = 0
    for (let i = 0; i < k; i++) {
        windowSum = windowSum + nums[i]
    }
    let maxSum = windowSum
    for (let i = k; i < nums.length; i++) { 
        windowSum = windowSum + nums[i] - nums[i-k]
        maxSum = Math.max( windowSum, maxSum)
    }
    return maxSum
}

console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3))

const kadanesMaxSubarray = (nums) => {
    if (nums.length === 0) return 0;
    
    let maxSum = nums[0]; // Fix: Initialize to the first element, not 0
    let currSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currSum = Math.max(nums[i], currSum + nums[i]);
        maxSum = Math.max(maxSum, currSum);
    }
    
    return maxSum;
};

console.log(kadanesMaxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))