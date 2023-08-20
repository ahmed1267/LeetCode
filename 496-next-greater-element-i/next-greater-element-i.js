/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let arr = []
    for (let i = 0; i < nums1.length; i++) {
        let oldL = arr.length
        let curr = nums2.find(number => number === nums1[i])
        let index = nums2.indexOf(curr)
        for (let j = index + 1; j < nums2.length; j++) {
            if (nums2[j] > curr) {
                arr.push(nums2[j])
                break;
            }

        }
        if (oldL === arr.length) {
            arr.push(-1)
        }
    }
    return arr
};