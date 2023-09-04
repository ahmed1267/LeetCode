/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let ans=[]
    let deque=[]
    for(let i=0;i<nums.length;i++){
        while(deque&&nums[deque[deque.length-1]]<=nums[i]){
            deque.pop()
        }
        deque.push(i)
        if(deque[0]==i-k) deque.shift()
        if(i>=k-1) ans.push(nums[deque[0]])
    }
    return ans
};