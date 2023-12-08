/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let res=[]
    let quad=[]
    nums=nums.sort((a,b)=> a-b)
    function Nsum(N, start, target){
        if(N!=2){
            for(let i=start; i<nums.length-N+1;i++){
                if(i> start && nums[i]== nums[i-1]) continue;
                quad.push(nums[i])
                Nsum(N-1,i+1,target-nums[i])
                quad.pop(nums[i])

            }
            return
        }
        let l = start , r=nums.length-1
        while(l<r){
            if((nums[l]+nums[r])> target) r-=1
            else if((nums[l]+nums[r])< target) l+=1
            else if(nums[l] +nums[r]== target) {
                res.push(quad.concat([nums[l],nums[r]]))
                l+=1    
                while(l<r && nums[l]== nums[l-1]) l+=1
            }
        }
    }
    Nsum(4,0,target)
    return res
};