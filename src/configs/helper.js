export const updateReducer = (type, payload) => {
  return { type, payload }
}

export const debounce = (fn, delay = 1000) => {
  let timerId = null

  return (...args) => {
    clearTimeout(timerId)
    timerId = setTimeout(() => fn(...args), delay)
  }
}
