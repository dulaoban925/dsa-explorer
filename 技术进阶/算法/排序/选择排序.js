/**
 * 选择排序
 * 1. 从左到右检查数组的每个元素，找出最小值，记录最小值的索引；
 * 2. 将最小值与最初遍历的值交换位置；
 * 3. 重复以上步骤，直到某次遍历开始于数组结尾，此时数组已经排序完成；
 */
function selectionSort(arr) {
  // 开启遍历，每次遍历对应一次对于数组中未排序元素的检查
  for (let i = 0; i < arr.length; i++) {
    // 存储最小值对应的索引
    let minIndex = i
    // 从 i 开始，检查数组的每个元素，找出最小值，记录最小值的索引
    // 为什么从 i 开始，因为外层每次遍历，都会将一个最小值放到数组前面，也就是说 0 - i 之间的元素已经排序好了
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    // 若最小值索引不是初始值，则交换位置
    if (minIndex!== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}

console.log(selectionSort([4,1,2,7]))