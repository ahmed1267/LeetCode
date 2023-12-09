/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
   
    if (intervals.length<2) return 0
    intervals = intervals.sort((a, b) => a[0] - b[0])
    let ans=0 ,temp=0
    for(let i=1;i<intervals.length;++i){
        if(intervals[i][0]<intervals[temp][1]){
            ans+=1
            if(intervals[i][1]<intervals[temp][1]) 
            temp=i
        }
        else temp=i
    }
    return ans

};