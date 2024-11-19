/**
 * 基础队列
 */
class BaseSqQueue {

  // 队列最大容量
  MAX_SIZE = 10
  // 元素数组
  data = []
  // 队列元素个数
  length = 0
  // 队尾指针
  tail = 0

  constructor(data) {
    this.initQueue(data)
  }

  // 初始化队列结构
  initQueue(data) {}

  // 清空队列
  clearQueue() {}

  // 获取队头元素
  getHead() {}

  // 元素e入栈io'
  enQueue(e) {
    if (this.length >= this.MAX_SIZE) {
      console.error('队列已满')
      return
    }
    this.data[this.tail] = e
    this.tail++
    this.length++
  }

  // 队头元素出栈
  deQueue() {
    if (this.length === 0) {
      console.warn('队列已空')
      return null
    }
    const e = this.data[0]
    for (let i = 0; i < this.data.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    this.data[this.tail] = null
    this.tail--
    this.length--
    return e
  }
}