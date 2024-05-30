/**
 * 栈的顺序存储结构
 */
class ListStack {
  // 栈容量
  MAX_SIZE = 10
  // 栈元素数据结合
  data = []
  // 栈元素数量
  length = 0
  // 栈顶指针
  top = null

  constructor(data) {
    this.initStack(data)
  }

  // 初始化栈结构
  initStack(data) {}

  // 清空栈
  clearStack() {}

  // 获取栈顶元素
  getTop() {}

  // 将元素e插入栈顶
  push(e) {
    if (this.top === this.MAX_SIZE - 1) {
      throw new Error('栈已满')
    }
    // top 指针上移
    this.top++
    // 将新元素 e 添加到栈中
    this.data[this.top] = e
    // 栈元素数量 +1。
    this.length++
  }

  // 删除栈顶元素
  pop() {
    if (this.top === -1) {
      throw new Error('栈为空')
    }
    const e = this.data[this.top]
    this.top--
    this.length--
    return e
  }
}