/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    version1=version1.split('.')
    version2=version2.split('.')
    while(version1.length<version2.length) version1.push(0)
    while(version2.length<version1.length) version2.push(0)
    for(let i=0;i<version1.length;i++){
        if(Number(version1[i])>Number(version2[i])) return 1
        else if(Number(version1[i])<Number(version2[i])) return -1
    }
    return 0
};