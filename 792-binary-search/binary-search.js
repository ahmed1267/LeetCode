/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    var BS = function (nums, target, left, right) {
        if (left > right) return -1
        let mid = Math.floor((right-left / 2)+left)
        if (nums[mid] == target) return mid
        else if (target < nums[mid]) return BS(nums, target, left, mid - 1)
        else if (target > nums[mid]) return BS(nums, target, mid + 1, right)
    }
    return BS(nums, target, 0, nums.length - 1)
};