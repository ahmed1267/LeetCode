/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length!= word2.length) return false
    let arr1= new Array(26).fill(0)
    let arr2= new Array(26).fill(0)
    for(let i=0;i<word1.length;i++){
        arr1[word1.charCodeAt(i)-'a'.charCodeAt(0)]+=1
        arr2[word2.charCodeAt(i)-'a'.charCodeAt(0)]+=1
    }
    arr1=arr1.sort((a,b)=>b-a)
    arr2=arr2.sort((a,b)=>b-a)
    console.log(arr1,arr2)
    for(let i=0;i<26;i++){
        if(arr1[i]!=arr2[i]) return false
    }
    let set=new Set(word1)
    for(let i=0;i<word2.length;i++){
        if(!set.has(word2[i])) return false
    }
    return true
};