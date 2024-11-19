/**
 * 快速排序
 */
/**
 * 分区
 * @param {*} arr 待分区数组
 * @param {*} leftPointer 左指针
 * @param {*} rightPointer 右指针
 * @returns
 */
function partition(arr, leftPointer, rightPointer) {
  // 基准值索引
  const pivotIndex = rightPointer;
  // 基准值
  const pivot = arr[pivotIndex]
  // 右侧指针指向基准值左侧的元素
  rightPointer--

  while(true) {
    // 左指针向右移动，直到找到大于基准值的元素
    while (arr[leftPointer] < pivot) {
      leftPointer++
    }
    // 右指针向左移动，直到找到小于基准值的元素
    while (arr[rightPointer] > pivot) {
      rightPointer--
    }

    if (leftPointer >= rightPointer) {
      // 若左指针大于等于右指针，则交换基准值与左指针指向的元素
      break
    } else {
      // 若左指针小于右指针，则交换左指针指向的元素与右指针指向的元素
      [arr[leftPointer], arr[rightPointer]] = [arr[rightPointer], arr[leftPointer]]
      leftPointer++
    }
  }
  // 跳出循环，交换基准值与左指针指向的元素
  [arr[pivotIndex], arr[leftPointer]] = [arr[leftPointer], arr[pivotIndex]]
  return leftPointer
}

/**
 * 快速排序
 * @param {*} arr 待排序数组
 * @param {*} leftPointer 左指针
 * @param {*} rightPointer 右指针
 * @returns
 */
function quickSort(arr, leftPointer, rightPointer) {
  // 定义左右指针，若未传入，则默认数组的左右指针
  leftPointer = leftPointer ?? 0
  rightPointer = rightPointer?? arr.length - 1

  // 递归结束条件，当左指针大于等于右指针时，结束递归
  if (leftPointer >= rightPointer) return;

  // 分区，获取基准索引
  const pivotIndex = partition(arr, leftPointer, rightPointer);
  // 对基准索引左侧的数组进行排序
  quickSort(arr, leftPointer, pivotIndex - 1);
  // 对基准索引右侧的数组进行排序
  quickSort(arr, pivotIndex + 1, rightPointer);

  return arr
}

console.log(quickSort([4,2,7,1,3, 4,1,10,9]))