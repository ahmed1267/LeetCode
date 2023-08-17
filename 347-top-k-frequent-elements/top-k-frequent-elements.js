/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    // const map = {}
    // const res = []
    // const heap = new MinPriorityQueue()

    // for (const n of nums) map[n] = map[n] + 1 || 1

    // for (const [key, count] of Object.entries(map)) {
    //     heap.enqueue(key, count)
        
    //     while (heap.size() > k) heap.dequeue()
    // }
    
    // for (let i = 0; i < k; i++) res.push(heap.dequeue().element)

    // return res
    let map =new Map()
    let res=[]
    for(let i=0;i<nums.length;i++){
        if(!map.has(nums[i])) map.set(nums[i],0)
        map.set(nums[i],map.get(nums[i])+1)
    }
    map= new Map([...map].sort((a,b)=>b[1]-a[1]))
    let itr=map.keys()
    while(res.length!=k){
        res.push(itr.next().value)
    }
    return res
};