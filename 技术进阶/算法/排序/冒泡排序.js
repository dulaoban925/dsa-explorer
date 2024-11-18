/**
 * 冒泡排序：
 * 对比相邻的两个数组元素，将较大的元素放在后面
 * 嵌套遍历，第一层表示需要比较的次数，第二层目的是将最大的数放在数据的末尾
 * 第一层遍历arr.length - 1次，第二层遍历arr.length - 1 - i次，比较的次数越多，需要比较的元素越少
 */
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length -1 -i; j++) {
//       // 对比相邻的两个元素，小的放在前面
//       if (arr[j] > arr[j+1]) {
//         [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//       }
//     }
//   }

//   return arr;
// }
// console.log(bubbleSort([1,4,2,5,3]))

function bubbleSort(arr) {
  // 未排序的边界，从该索引开始，后面的元素都是已经排序好的
  let unsortedUntilIndex = arr.length - 1;
  let sorted = false

  while (!sorted) {
    sorted = true
    for (let i = 0; i < unsortedUntilIndex; i++) {
      if (arr[i] > arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
        sorted = false
      }
    }
    unsortedUntilIndex--
  }

  return arr
}
console.log(bubbleSort([1,4,2,5,3]))