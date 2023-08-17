/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    let map = new Map()
    for(let i =0; i<nums.length;i++){
        if(!map.get(nums[i])) map.set(nums[i],1)
        else return true
    }
    return false
    // let set=new Set()
    // for(let i=0;i<nums.length;i++){
    //     set.add(nums[i])
    // }
    // if(set.size!=nums.length) return true
    // return false
};