/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    let max=nums.reduce((a,b)=> a|b,0)
    let res=0
    function rec(nums,start,val){
        if(val== max) res+=1
        for(let i=start;i<nums.length;i++){
            rec(nums,i+1,val|nums[i])
        }
    }
    rec(nums,0,0)
    return res
};