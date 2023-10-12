/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    // let arr = []
    // for (let i = 0; i < nums1.length; i++) {
    //     let oldL = arr.length
    //     let curr = nums2.find(number => number === nums1[i])
    //     let index = nums2.indexOf(curr)
    //     for (let j = index + 1; j < nums2.length; j++) {
    //         if (nums2[j] > curr) {
    //             arr.push(nums2[j])
    //             break;
    //         }

    //     }
    //     if (oldL === arr.length) {
    //         arr.push(-1)
    //     }
    // }
    // return arr

    let map = new Map()
    let stack= []
    for(let i=nums2.length-1;i>=0;i--){
        while(stack.length&&stack[stack.length-1]<nums2[i]){
            stack.pop()
        }
        let n=stack.length-1
        map.set(nums2[i],stack[n]> nums2[i] ? stack[n] : -1)
        stack.push(nums2[i])
        
    }

    return nums1.map(num => map.get(num))
};