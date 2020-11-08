export const toFixedIfNeeded = (value, digits) => {
  if (Math.round(value) !== value) {
    return value.toFixed(digits)
  } else {
    return String(value)
  }
}
