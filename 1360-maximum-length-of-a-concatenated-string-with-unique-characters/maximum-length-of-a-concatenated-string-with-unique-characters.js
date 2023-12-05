/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    function dfs(i, str, arr){
        if(i== arr.length) return isValid(str) ? str.length : 0
        let take= dfs(i+1, str + arr[i], arr)
        let leave = dfs(i+1, str,arr)
        return Math.max(take,leave)
    }

    function isValid(str){
        let map=new Map()
        for(let char of str){
            if(map.has(char)) return false
            map.set(char,true)
        }
        return true
    }
    return dfs(0,'',arr)
};