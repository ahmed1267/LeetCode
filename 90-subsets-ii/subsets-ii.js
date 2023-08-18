/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums=nums.sort((a,b)=> a-b)
    let res=[]
    let sub=[]
    let i=0
    var rec=function(nums,sub,i){
        if(i===nums.length){
            res.push([...sub])
            return
        }
        rec(nums,[...sub,nums[i]],i+1)
        while(nums[i]==nums[i+1]&&i<nums.length){
            i++
        }

            
            rec(nums,sub,i+1)
        
    }
    rec(nums,sub,i)
    return res
};