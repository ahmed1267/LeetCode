/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if(nums.length==2) return (nums[0]-1) * (nums[1]-1)
    let max=0,index1,index2
    for(let i=0;i<nums.length;i++){
        if(nums[i]>max){
            max=nums[i]
            index1=i
        }
    }
    max=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]>=max && i!= index1){ 
            max=nums[i]
            index2=i    
        }
    }
    return (nums[index1]-1) * (nums[index2]-1)
};