/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let map={}
    for(let i=0;i<nums.length;i++){
        if(!map[nums[i]]) map[nums[i]]=0
        map[nums[i]]+=1
    }
    let res=0
    for(let count in map){
        if(map[count]==1) return -1
        res+=Math.floor(map[count]/3)
        if(map[count]%3 !=0) res+=1
    }
    return res
};