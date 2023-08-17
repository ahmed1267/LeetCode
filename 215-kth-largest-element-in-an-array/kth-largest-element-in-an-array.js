/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // let q= new MaxPriorityQueue()
    // nums.forEach((num) => q.enqueue(num)) 

    // for(let i=0;i<k-1;i++){
    //     q.dequeue()
    // }
    // return q.front().element
    nums=nums.sort((a,b)=>b-a)
    return nums[k-1]
};