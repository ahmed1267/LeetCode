/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let res=tasks.length
    let freq=new Array(26).fill(0)
    for(let task of tasks){
        freq[task.charCodeAt(0)- 'A'.charCodeAt(0)]+=1
    }
    freq.sort((a,b)=>b-a)
    let idle= (freq[0]-1)*n

    for(let i=1;i<freq.length && freq[i]>0;i++){
        idle-=Math.min((freq[0]-1),freq[i])
    }

    return idle<=0 ? res :res+idle

}
