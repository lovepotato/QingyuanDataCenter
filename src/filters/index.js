export function formatImageSrc(val) {
  const imgUrl = 'https://qycomuhome.qyyanglao.com/f/d/'
  return val.indexOf('http') > -1 ? val : imgUrl + val
}
