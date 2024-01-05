/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let arr= new Array(nums.length).fill(0)
    let size=0

    for(let num of nums){
        let i=0, j=size
        while(i != j){
            let mid = Math.floor((j-i)/2)+i
            if(arr[mid]< num) i=mid+1
            else j=mid
        }
        arr[i]=num
        if(i==size) size+=1
    }
    return size;
};