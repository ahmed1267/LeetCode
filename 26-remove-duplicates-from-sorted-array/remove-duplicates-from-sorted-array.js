/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

    let set = new Set(nums)
    let k = set.size
    nums.length=0
    nums .push(...set.values())
    return k 
};
