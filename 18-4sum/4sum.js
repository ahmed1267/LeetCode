/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let res=[]
    let quad=[]
    nums=nums.sort((a,b)=> a-b)
    var rec= function(k,start,target){
        if(k!=2){
            for(let i=start;i<nums.length-k+1;i++){
                if(i> start && nums[i] == nums[i-1]) continue;
                quad.push(nums[i])
                rec(k-1,i+1,target-nums[i])
                quad.pop()

                
            }
            return
        }
        let l=start
        let r=nums.length-1
        while(l<r){
            if(nums[l]+ nums[r]>target)r-=1
            else if(nums[l]+ nums[r]<target)l+=1
            else{

                res.push(quad.concat(nums[l],nums[r]))
                l+=1
                while(l<r && nums[l]==nums[l-1]) l+=1
            }
        }
    }

    rec(4,0,target)
    return res
};