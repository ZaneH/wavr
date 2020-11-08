// credit: https://stackoverflow.com/a/5002161/3411191
export const noHTML = (str) => {
  if (!str) {
    return ''
  }

  const clean = str.replace(/<\/?[^>]+(>|$)/g, '')
  return clean
}
