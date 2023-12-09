/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {

    let result=0
var dfs= function(val,i){
    if(i<nums.length){
        dfs(val^nums[i],i+1)
        dfs(val,i+1)
    }
    if(i==nums.length) result+=val
}
dfs(0,0)
return result

};