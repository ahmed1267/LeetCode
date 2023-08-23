/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let set = new Set(nums)
    if (nums.length == set.size) return false
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let value = Math.abs(map.get(nums[i]) -i)
            if(value<=k){
                return true
            }else{
                map.set(nums[i],i)
            }
        } else {
            map.set(nums[i], i)
        }
    }


    return false
};