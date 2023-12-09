/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let n= matrix[0].length
    let m= matrix.length
    var BS = function (matrix, target, up, down) {
        if (up > down) return false
        let mid = Math.floor((up + (down - up) / 2))
        if (target <= matrix[mid][n - 1] && target >= matrix[mid][0]) return matrix[mid]
        else if (target > matrix[mid][n - 1]) return BS(matrix, target, mid + 1, down)
        else if (target < matrix[mid][0]) return BS(matrix, target, up, mid - 1)

    }
    let arr = BS(matrix, target, 0, m - 1)

    var BSArr = function (arr, target, left, right) {

        if (left > right) return false
        let mid = Math.floor((left + (right - left) / 2))
        if (arr[mid] == target) return true
        else if (target > arr[mid]) return BSArr(arr, target, mid + 1, right)
        else if (target < arr[mid]) return BSArr(arr, target, left, mid - 1)

    }

    return BSArr(arr, target, 0, n - 1) ? true : false

};