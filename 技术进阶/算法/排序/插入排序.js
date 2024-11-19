/**
 * 插入排序
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const tempValue = arr[i]
    let position = i - 1
    while (position >= 0 && arr[position] > tempValue) {
      arr[position + 1] = arr[position]
      position--
    }
    arr[position+1] = tempValue
  }

  return arr
}
console.log(insertionSort([4,2,7,1]))