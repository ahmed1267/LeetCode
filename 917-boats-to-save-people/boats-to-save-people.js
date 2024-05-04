/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people= people.sort((a,b)=>a-b)
    if( people[0]== limit) return people.length
    let res=0
    let l=0, r=people.length-1
    while(l<=r){
        if(people[r]== limit){
            res+=1
            r--
            continue;
        }
        if((people[l]+people[r])<=limit){
            r--
            l++
            res++
        }else if(l==r){ 
            res +=1
            r--
        }
        else{
            r--
            res++
        }
    }
    return res
};