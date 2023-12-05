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
        let set= new Set(str)
        if(set.size==str.length) return true
        return false
    }
    return dfs(0,'',arr)
};