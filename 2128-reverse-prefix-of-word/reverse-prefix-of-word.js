/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    for(let i=0;i<word.length;i++){
        if(word[i]==ch){

           return word.substring(0, i+1).split('').reverse().join('')+word.substring(i+1);
        }
    }
    return word
};