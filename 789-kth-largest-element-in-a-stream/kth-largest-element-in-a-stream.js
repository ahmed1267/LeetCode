/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest{
    constructor(k, nums){
        this.k=k
        this.nums= new MinPriorityQueue()
        for(let i in nums) this.nums.enqueue(nums[i])
        
        while(this.nums.size()>k) this.nums.dequeue()

    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if(this.nums.size()&&this.k<=this.nums.size()){
    if (val>this.nums.front().element) {
        this.nums.enqueue(val)
        this.nums.dequeue()
        }
    }else{
        this.nums.enqueue(val)
    }
    return this.nums.front().element
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */