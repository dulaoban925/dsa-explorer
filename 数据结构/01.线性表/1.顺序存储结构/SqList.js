/**
 * 线性表 - 线性存储结构
 */

class SqList extends List {
  // 线性表的最大容量
  maxSize
  // 存储数据元素的数组
  data = []
  // 线性表当前长度
  length = 0

  constructor(maxSize) {
    this.maxSize = maxSize
    this.data = new Array(maxSize)
    this.length = 0
  }

  /**
   * 返回线性表中第 i 个位置的数据元素
   * @param {number} i 线性表指定元素位置
   */
  getElem(i) {
    // 确保请求的位置在有效范围内
    if (i < 1 || i > this.length) {
      return null
    }
    // 返回数组中相应位置的元素
    return this.data[i - 1]
  }

  /**
   * 将元素 e 插入到线性表第 i 个位置
   * @param {number} i 要插入的线性表位置
   * @param {object} e 待插入的数据元素
   */
  insert(i, e) {
    // 检查插入位置是否在有效范围内
    if (i < 1 || i > this.length + 1) {
      throw new Error('插入位置不合理');
    }
    // 检查是否需要扩展数组容量
    if (this.length >= this.maxSize) {
      throw new Error('超出数组容量限制');
    }

    // 从数组尾部开始向前遍历并移动元素
    for (let j = this.length; j >= i; j--) {
      this.data[j] = this.data[j - 1]
    }

    // 在位置 i 插入元素 e
    this.data[i - 1] = e
    // 更新线性表的长度
    this.length++
  }

  /**
   * 删除线性表第 i 个位置的元素并返回被删除的元素
   * @param {number} i 要删除的元素在线性表中的位置
   * @returns {any} 被删除的元素
   */
  delete(i) {
    // 检查线性表是否为空或删除位置是否超出范围
    if (this.length === 0 || i < 1 || i > this.length) {
      throw new Error('删除位置不合理');
    }

    // 保存待删除的元素
    let e = this.data[i - 1]
    // 从待删除元素的下一个位置开始向前移动元素
    for (let j = i; j < this.length; j++) {
      this.data[j - 1] = this.data[j]
    }
    // 调整线性表长度
    this.length--
    // 返回被删除的元素
    return e
  }
}