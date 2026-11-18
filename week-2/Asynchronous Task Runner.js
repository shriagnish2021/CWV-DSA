/**
 * @param {Array<() => Promise<any>>} tasks - Array of functions returning promises
 * @param {number} limit - Maximum concurrent executions
 */
async function promiseAllWithConcurrencyLimit(tasks, limit) {
    // TODO: Your implementation
    if (tasks.length === 0) {
        return []
    }
    let nextIndexToRun = 0
    const result = new Array(tasks.length)

    async function worker() {
        while (nextIndexToRun < tasks.length) {
            const currentIndex = nextIndexToRun
            nextIndexToRun++
            result[currentIndex] = await tasks[currentIndex]()
        }
    }

    const workers = Array.from({ length: Math.min(limit, tasks.length) }, () => worker())
    await Promise.all(workers)

    return result
}

// --- Input Data for Testing ---
const createDriverTask = (id, delay) => () =>
    new Promise((resolve) => {
        console.log(` Fetching Driver ${id}...`);
        setTimeout(() => {
            console.log(` Driver ${id} loaded`);
            resolve(`Data for Driver ${id}`);
        }, delay);
    });

const tasks = [
    createDriverTask(1, 1000),
    createDriverTask(2, 500),
    createDriverTask(3, 200),
    createDriverTask(4, 1000),
];

// If limit is 2, Task 1 and 2 start. 
// When Task 2 finishes at 0.5s, Task 3 starts immediately.
promiseAllWithConcurrencyLimit(tasks, 2).then(results => {
    console.log("All tasks completed:", results);
});
// console.log(promiseAllWithConcurrencyLimit(tasks, 2))