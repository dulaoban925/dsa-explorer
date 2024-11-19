/**
 * 单链表
 */

// 链表节点类
class SLinkedNode {
  constructor(data) {
    this.data = data
    this.next = undefined
  }
}

// 链表类
class SLinkedList {
  // 头节点
  head
  // 链表长度
  length = 0
  constructor() {
    this.head = new SLinkedNode(null)
    this.length = 0
  }

  /**
   * 返回单链表中第 i 个位置的数据元素
   * @param {number} i 指定元素的位置
   */
  getElem(i) {
    // 获取头结点
    let p = this.head
    // 元素从第 1 个位置开始查找
    let j = 1
    // 遍历位置在 i 之前的节点
    while(j < i) {
      p = p.next
      j++
    }
    // 若第 i 个位置无节点 返回 空
    if (!p || j > i) return null
    // 匹配成功，返回节点 p 的数据
    return p.data
  }

  /**
   * 在链表位置 i 插入数据 e
   * @param {object} e 需要插入的节点数据
   * @param {number} i 要插入的链表位置
   */
  insert(e, i) {
    // 获取链表第 i 个节点
    const p = this.getElem(i);
    // 若不存在节点 p，返回 false 或报错
    if (!p) return false
    // 生成数据为 e 的节点 s
    const s = new SLinkedNode(e)
    // 将 s.next 指针指向 i+1 位置的节点，将 p.next 指向 s
    s.next = p.next
    p.next = s
    // 链表长度 +1
    this.length++
    return true
  }

  /**
   * 删除链表中第 i 个节点
   * @param {number} i 要删除的节点位置
   */
  delete(i) {
    // 获取位置 i 前面的节点 p
    const p = this.getElem(i - 1)
    // 若不存在节点 p，返回 false 或报错
    if (!p) return false
    // 要删除的节点 q
    const q = p.next
    p.next = q.next

    return q.data
  }
}

/**
 * 头插法：单链表整表创建，包含 n 个随机数节点
 * @param {number} n 创建的单链表的节点个数
 */
function createListHead(n) {
  const slList = new SLinkedList()

  if (isNaN(n) || n < 0) {
    throw new Error('参数不合法')
  }
  if (n === 0) return slList
  for (let i = 0; i < n; i++) {
    const p = new SLinkedNode(Math.random() * 100)
    p.next = slList.head.next
    slList.head.next = p
    slList.length++
  }

  return slList
}

const l = createList(10)
console.log(l.head, l.getElem(10))

/**
 * 尾插法：单链表整表创建，包含 n 个随机数节点
 * @param {number} n 创建的单链表的节点个数
 */
function createListTail(n) {
  // 空链表
  const slList = new SLinkedList()
  // 尾结点
  let r = null

  if (isNaN(n) || n < 0) {
    throw new Error('参数不合法')
  }
  if (n === 0) return slList
  for (let i = 0; i < n; i++) {
    const p = new SLinkedNode(Math.random() * 100)
    if (i === 0) {
      slList.head.next = p
      r = p
    } else {
      r.next = p
      r = p
    }
    slList.length++
  }
  return slList
}

