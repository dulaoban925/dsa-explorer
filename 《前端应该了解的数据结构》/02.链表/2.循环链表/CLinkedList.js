/**
 * 循环链表
 */

// 链表节点类
class CLinkedNode {
  constructor(data) {
    this.data = data
    this.next = undefined
  }
}

// 链表类
class CLinkedList {
  // 尾节点，链表为空时，指向头结点（即头部的空节点）
  tail
  // 链表长度
  length = 0
  constructor() {
    this.tail = new CLinkedNode(null)
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
    const s = new CLinkedNode(e)
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
 * 将链表 l2 的节点合并到 链表 l1 中
 * @param {CLinkedList} l1 合并的目标链表
 * @param {CLinkedList} l2 被合并的链表
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
