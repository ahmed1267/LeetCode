/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let res = new Array(nums.length)
    let l=0, r=nums.length-1
    for(let i=nums.length-1;i>=0;i--){
        if(Math.abs(nums[l])>= Math.abs(nums[r])){
            res[i]=Math.pow(nums[l],2)
            l+=1
        }else{
            res[i]=Math.pow(nums[r],2)
            r-=1
        }
    }
    return res
};