/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let map = new Map()
    let count=0
    nums3.forEach(c=> {
        nums4.forEach(d=> {
            map.set(c+d, (map.get(c+d) || 0) + 1);
        })
    })
    nums1.forEach(a=>{
        nums2.forEach(b=>{
            if(map.has(-(a+b)))
            count+=map.get(-(a+b))
        })
    })
    return count
};