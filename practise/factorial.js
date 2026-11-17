const factorial = (n) => {
    if (n==1 || n ==0) {
        return 1
    } else {
        return n * factorial(n-1)
    }
}

console.log(factorial(4))

const countDown = (n) => {
    if (n === 0) {
        console.log("Blast off!")
    } else {
        console.log(n)
        countDown(n-1)
    }
}

countDown(3)

// sum of first nnumbers
const sumTo = (n) => {
    if (n === 1) {
        return 1
    } else {
        return n + sumTo(n-1)
    }
}
console.log(sumTo(4))

const reverseString = (s) => {
    if (s.length === 1) {
        return s
    } else {
        return reverseString(s.slice(1)) + s[0]
    }
}
console.log(reverseString("abc"))

const sumArr = (arr) => {
    if (arr.length === 1) {
        return arr[0]
    } else {
        return sumArr(arr.slice(1)) + arr[0]
    }
}
console.log(sumArr([1,2,3]))