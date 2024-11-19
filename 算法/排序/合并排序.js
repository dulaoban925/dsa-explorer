/**
 * 合并排序算法：
 * 应用递归实现排序的算法
 * 先将原始数组递归要中点为界限，拆分成最终长度为1的数组，
 * 然后对最终拆分的数组进行递归排序组合
 */

/**
 * 假定arr1和arr2都是已排过序的数组
 * @param {Object} arr1
 * @param {Object} arr2
 */
function merge(arr1, arr2) {
  // 定义已排序的数组及两个数组的指针
  const sortedArr = [];
  let firstPointer = 0;
  let sedPointer = 0;
  while (firstPointer < arr1.length && sedPointer < arr2.length) {
    if (arr1[firstPointer] <= arr2[sedPointer]) {
      sortedArr.push(arr1[firstPointer]);
      firstPointer++
    } else {
      sortedArr.push(arr2[sedPointer]);
      sedPointer++
    }
  }
  while (firstPointer < arr1.length) {
    sortedArr.push(arr1[firstPointer]);
    firstPointer++;
  }
  while (sedPointer < arr2.length) {
    sortedArr.push(arr2[sedPointer]);
    sedPointer++;
  }
  return sortedArr;
}

/**
 * 拆分原始数组，直至长度为0或1
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length/2);
  const arr1 = mergeSort(arr.slice(0, mid));
  const arr2 = mergeSort(arr.slice(mid));
  return merge(arr1, arr2);
}

console.log(mergeSort([5,8,9,2,3,1,10]));
