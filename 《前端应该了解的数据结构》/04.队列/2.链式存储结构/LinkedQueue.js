/**
 * 链队列节点类
 */
class LinkedQueueNode {
  constructor(data) {
    this.data = data
    this.next = undefined
  }
}

/**
 * 链队列类
 */
class LinkedQueue {
  // 队头指针，指向头节点
  head
  // 队尾指针，指向队尾元素节点
  tail
  // 队列长度
  length = 0

  constructor() {
    // 空状态 head 和 tail 指针同时指向头节点
    this.head = this.tail = new LinkedQueueNode(null)
    this.length = 0
  }

  enQueue(data) {
    // 生成新节点 e
    const e = new LinkedQueueNode(data)
    // 将当前队尾元素的后继节点赋值为 e
    this.tail.next = e
    // 将队尾指针指向新节点 e
    this.tail = e
    this.length++
  }

  deQueue() {
    // 获取待移除的队头元素
    const e = this.head.next
    // 将头节点的后继赋值为 e 的后继
    this.head.next = e.next
    // 若当前队尾元素是 e，则删除后，队列为空，tail 指针指向头节点
    if (this.tail === e) {
      this.tail = this.head
    }
    this.length--
    return e.data
  }
}
