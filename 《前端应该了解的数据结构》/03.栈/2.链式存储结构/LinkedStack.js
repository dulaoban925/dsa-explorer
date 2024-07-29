/**
 * 栈的链式存储结构
 */

// 链栈节点结构
class LinkedStackNode {
  // 数据域
  data = null
  // 后继指针域
  next = null

  constructor(data) {
    this.data = data
  }
}

// 链栈结构
class LinkedStack {

  // 栈顶指针
  top = null
  // 栈元素个数
  length = 0

  constructor(data) {
    this.initStack(data)
  }

  // 初始化栈结构
  initStack(data) {}

  // 清空栈
  clearStack() {}

  // 获取栈顶元素
  getTop() {}

  // 将数据 data 插入栈顶
  push(data) {
    // 1. 生成新的 **节点 s**。
    const s = new LinkedStackNode(data)
    // 2. 将当前栈顶元素赋值给 **节点 s** 的后继。
    s.next = this.top
    // 3. 将栈顶指针指向 **节点 s**。
    this.top = s
    // 4. 栈元素个数 +1。
    this.length++
  }

  // 删除栈顶元素
  pop() {
    // 1. 判断栈是否为空，若为空，报错。
    if (this.length === 0) {
      throw new Error('栈为空')
    }
    // 获取栈顶节点 s
    const s = this.top
    // 将栈顶指针向下移动。
    this.top = this.top.next
    // 栈元素数量 -1。
    this.length--
    return s.data
  }
}