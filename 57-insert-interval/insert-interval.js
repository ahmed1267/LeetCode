/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let index
    let min
    if(intervals.length==0) return [newInterval]
    if(newInterval[0]>intervals[intervals.length-1][1]){
         intervals.push(newInterval)
         return intervals
         }
    for(let i=0;i<intervals.length;i++){
        if(newInterval[0]<=intervals[i][1]){
            index=i
            min=Math.min(newInterval[0], intervals[i][0])
            while(i<intervals.length){
                if(newInterval[1]<intervals[i][0]){
                    intervals.splice(index,i-index,[min, newInterval[1]])
                    break;
                }else if(newInterval[1] == intervals[i][0]){
                      intervals.splice(index,i-index+1,[min, intervals[i][1]])
                      break;
                }else if(newInterval[1]> intervals[i][1] && i==intervals.length-1){
                    
                    intervals.splice(index,i-index+1,[min, newInterval[1]])
                      break;
                }else if(newInterval[1]<intervals[i][1]){
                     intervals.splice(index,i-index+1,[min, intervals[i][1]])
                      break;
                }else if(newInterval[1] == intervals[i][1]){
                      intervals.splice(index,i-index+1,[min, intervals[i][1]])
                      break;
                }
                i++
            }
            break;
        }
    }
   return intervals
};