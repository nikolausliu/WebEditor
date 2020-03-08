/**
 * 添加组件时,使用列表索引将无法正确应用拖拽动画,所以需要一个唯一可key
 * @param {Function} md5 传入md5库
 */
export function getHash(md5) {
  if (typeof md5 !== 'function') {
    return
  }
  return md5(new Date().toString() + Math.random())
}
