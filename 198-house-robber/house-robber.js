/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let rob=0, noRob=0
    for(let i=0;i<nums.length;i++){
        let newRob=noRob+nums[i]
        let newNoRob= Math.max(noRob, rob)
        noRob=newNoRob
        rob=newRob
    }
    return Math.max(noRob,rob)
};