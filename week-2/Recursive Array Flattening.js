const nestedData = [2, [7, [3,4]]];

/**
 * @param {Array} arr
 * @param {number} depth
 */
function customFlat(arr, depth = 1) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depth >= 1) {
        result.push(...customFlat(arr[i], depth - 1))
      } else {
        result.push(arr[i])
      }
  }

  return result
}

console.log(customFlat(nestedData, 1)); 
console.log(customFlat(nestedData, 2)); 
console.log(customFlat(nestedData, Infinity)); 