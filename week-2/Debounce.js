function debounce(func, wait, immediate = false) {
  let timeout;
  // TODO: Logic to clear timeout and handle 'this' context
  return function(...args) {
    const callNow = immediate && !timeout

    clearTimeout(timeout)

    timeout = setTimeout(() => {
        timeout = null
        if (!immediate) {
            func.apply(this, ...args)
        }
    }, wait)

    if (callNow) {
        func.apply(this, ...args)
    }
  }
}

// Usage in UI:
const onSearch = debounce(() => console.log("Searching for:", "hi"), 300, true);
// document.getElementById('search').addEventListener('input', onSearch);
onSearch()
onSearch()
onSearch()
onSearch()
onSearch()