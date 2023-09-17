/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let n=nums.length
    let stack=[]
    let res= new Array(n).fill(-1)
    for(let i=n*2-1; i>=0;i--){
        while(stack.length&&stack[stack.length-1]<= nums[i%n]){
            stack.pop()
        }
        if(i<n) {
            res[i]=stack.length? stack[stack.length-1] : -1
        }
        stack.push(nums[i%n])
        }
        return res
    }