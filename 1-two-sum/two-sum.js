/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    for (let i = 0; i < nums.length; i++) {
        let index=nums.indexOf(target-nums[i])
        if(nums.includes(target-nums[i])&& index!=i) return [i,index]
    }
    // nums=nums.sort((a,b)=> a-b)
    // for(let i=0;i<nums.length;i++){

    // }
};
