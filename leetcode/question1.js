/**
 * 已知如下数组：
 * var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
 * 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
 */

// function flat(arr) {
//   return [...new Set(arr.flat(Infinity))].sort((a, b) => a - b);
// }

// function flat(arr) {
//   return [...new Set(arr.toString().split(','))].map(Number).sort((a,b) => a - b);
// }

// console.log(flat([[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]))

// 判断两个变量是否相等
function checkEqual(val1, val2) {
	const valType1 = typeof val1;
	const valType2 = typeof val2;
	let flag = true;
	// 1.判断类型
	if (valType1 !== valType2) {
		flag = false
	} else {
		// 2.类型相等判断是否为object
		if (valType1 === 'object') {
			for (let key in val1) {
				if (val1[key] !== val2[key]) {
					flag = false;
					break;
				}
			}
		} else {
			flag = val1 === val2;
		}
	}

	return flag;
}

console.log(checkEqual('a', 'a'));
console.log(checkEqual(1, 1));