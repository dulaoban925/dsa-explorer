/**
 * 循环队列
 */
class CircleSqQueue {

  // 队列最大容量
  MAX_SIZE = 10
  // 元素数组
  data = []
  // 队列元素个数
  length = 0
  // 队尾指针
  head = 0
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
    /**
     * 若 tail 指针指向队列最后一个位置（下标 this.MAX_SIZE - 1），表示已没有后移的空间，将 tail 指向下标 0 的位置；
     * 否则，后移 1 位。
     */
    if (this.tail === this.MAX_SIZE - 1) this.tail = 0
    else this.tail++
    this.length++
  }

  // 队头元素出栈
  deQueue() {
    if (this.length === 0) {
      console.warn('队列已空')
      return null
    }
    const e = this.data[this.head]
    this.data[this.head] = null
    /**
     * 若 head 指针指向队列最后一个位置（下标 this.MAX_SIZE - 1），表示已没有后移的空间，将 head 指向下标 0 的位置；
     * 否则，则后移 1 位
     */
    if (this.head === this.MAX_SIZE - 1) this.head = 0
    else this.head++
    this.length--
    return e
  }
}
