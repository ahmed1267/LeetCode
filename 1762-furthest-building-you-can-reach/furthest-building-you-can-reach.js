/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    const pq = new MinPriorityQueue({ compare: (a, b) => a - b });
    const n = heights.length;
    let i
    for( i=0;i<n-1;i++){
        const currHeight= heights[i]
        const nextHeight= heights[i+1]
        if(currHeight< nextHeight){
            const needHeight= nextHeight-currHeight
            pq.enqueue(needHeight)
            if(pq.size()<=ladders) continue;
            const needSmallHeight= pq.dequeue()
            if(bricks< needSmallHeight) break;
            bricks-=needSmallHeight
        }
    }
    return i
};