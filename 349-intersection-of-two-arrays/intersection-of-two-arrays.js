/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let map =new Set()
    let res=new Set()
    for(let i=0;i<nums1.length;i++){
        if(!map.has(nums1[i]))map.add(nums1[i])
    }
    for(let i=0;i<nums2.length;i++){
        if(map.has(nums2[i]))res.add(nums2[i])
    }
    return Array.from(res)
};