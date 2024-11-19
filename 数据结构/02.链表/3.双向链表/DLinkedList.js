/**
 * 双向链表
 */

// 链表节点类
class DLinkedNode {
  constructor(data) {
    // 数据域
    this.data = data
    // 前驱指针域
    this.prior = undefined
    // 后继指针域
    this.next = undefined
  }
}

// 链表类
class DLinkedList {
  // 头结点
  head
  // 链表长度
  length = 0
  constructor() {
    this.head = new DLinkedNode(null)
    this.length = 0
  }

  /**
   * 返回循环链表中第 i 个位置的数据元素
   * @param {number} i 指定元素的位置
   */
  getElem(i) {
    if (i < 1 || i > this.length) return null;
    // 获取头结点
    let p = this.tail.next
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
    const s = new DLinkedNode(e)

    // 1.将 **节点 p** 赋值给 **节点 s** 的前驱。
    s.prior = p
    // 2.将 **节点 p.next** 赋值给 **节点 s** 的后继。
    s.next = p.next
    // 3.将 **节点 s** 赋值给节点 **节点 p.next** 的前驱。
    p.next.prior = s
    // 4.将 **节点 s** 赋值给 **节点 p** 的后继。
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
    // 获取要删除的节点 p
    const p = this.getElem(i)
    // 若不存在节点 p，返回 false 或报错
    if (!p) return false

    // 1.把 **节点 p** 的后继赋值给 **节点 p.prior** 的后继。
    p.prior.next = p.next
    // 2.把 **节点 p** 的前驱赋值给 **节点 p.next** 的前驱。
    p.next.prior = p.prior

    return p.data
  }
}

/**
 * 将链表 l2 的节点合并到 链表 l1 中
 * @param {CLinkList} l1 合并的目标链表
 * @param {CLinkList} l2 被合并的链表
 * @returns
 */
function combine(l1, l2) {
  // l1 第一个节点
  const p = l1.tail.next
  // 将 l1 尾结点指针指向l2 第一个节点
  l1.tail.next = l2.tail.next
  // 将 l2 的最后一个节点的指针指向 l1 的第一个节点
  l2.tail.next = p
  return l1
}
