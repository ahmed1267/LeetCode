/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let res=[], i=0
    while(i<intervals.length && intervals[i][1]<newInterval[0]){
        res.push(intervals[i])
        i+=1
    }

    while(i< intervals.length && intervals[i][0] <= newInterval[1]){
        newInterval=[Math.min(intervals[i][0], newInterval[0]), Math.max(newInterval[1], intervals[i][1])] 
        i+=1
    }

    res.push(newInterval)
    while(i<intervals.length){
        res.push(intervals[i])
        i+=1
    }
    return res
};