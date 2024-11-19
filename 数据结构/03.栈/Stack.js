/**
 * 栈
 */
class Stack {
  // 栈容量
  MAX_SIZE = 10
  // 栈元素数据结合
  data = []
  // 栈元素个数
  length = 0
  // 栈顶指针
  top = -1

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
  push(e) {}

  // 删除栈顶元素
  pop() {}
}