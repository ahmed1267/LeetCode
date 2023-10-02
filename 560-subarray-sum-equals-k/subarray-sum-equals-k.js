/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map ={}
    map[0]=1
    let pSum=0
    let res=0
    for(let i=0;i<nums.length;i++){
        pSum+=nums[i]
        diff=pSum-k
        if(map[diff]) res+=map[diff]
        map[pSum]? map[pSum]+=1 : map[pSum]=1
    }
    return res
};