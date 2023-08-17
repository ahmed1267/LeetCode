/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    // for (let i = 0; i < nums.length; i++) {
        
    //     if(nums.includes(target-nums[i])&& nums.indexOf(target-nums[i])!=i) return [i,nums.indexOf(target-nums[i])]
    // }
    let newNum=[]
    for(let i=0;i<nums.length;i++){
        newNum.push([nums[i],i])
    }
    newNum=newNum.sort((a,b)=> a[0]-b[0])
    let left=0
    let right=newNum.length-1
    while(left<right){
        let sum =newNum[left][0]+newNum[right][0]
        if(sum==target) return[newNum[left][1],newNum[right][1]]
        else if(sum>target) right--
        else if(sum<target) left++
        
    }
};
