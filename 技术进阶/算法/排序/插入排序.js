/**
 * 插入排序
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // 定义临时变量，存储当前遍历的值
    const tempValue = arr[i]
    // 获取临时变量左侧的索引，用于获取左侧值与临时变量比较
    let position = i - 1
    // 若左侧有值且大于临时变量，则将左侧的值向右移动一位
    while (position >= 0 && arr[position] > tempValue) {
      arr[position + 1] = arr[position]
      // 继续向左比较
      position--
    }
    // 此时，position的值为 -1 或 小于 tempValue 的值，将临时变量插入到该位置的右侧
    arr[position+1] = tempValue
  }

  return arr
}
console.log(insertionSort([4,2,7,1]))