/**
 * 线性表
 */
class List {
  // 数据元素集合
  data = []
  // 线性表长度
  length = 0

  constructor(data) {
    this.data = data
    this.length = data.length
  }

  // 清空线性表
  clearList() {}

  // 获取下标 i 处的元素
  getElem(i) {}

  // 匹配线性表中与元素 e 相同的元素，返回对应下标；不存在则返回 -1
  locateElem(e) {}

  // 插入
  insert(i, e) {}

  // 删除元素
  delete(i) {}
}