/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // let left =0
    // let right= height.length-1
    // let leftM=0
    // let rightM=0
    // let water=0
    // while(left<=right){
    //     if(height[left]<=height[right]){
    //         if(height[left]>leftM){
    //             leftM=height[left]
    //         }else{
    //             water+=leftM-height[left]
    //         }
    //         left++
    //     }else if(height[right]<height[left]){
    //         if(height[right]>rightM){
    //             rightM=height[right]
    //         }else{
    //             water+=rightM-height[right]
    //         }
    //         right--
    //     }
    // }
    // return water
    let res=0
    let stack=[]
    for(let h of height){
        while(stack && stack[0]<= h){
            res+= (stack[0]-stack[stack.length-1])
            stack.pop()
        }
        stack.push(h)
    }
        while(stack && stack.length>2){
            if(stack[stack.length-1]>stack[stack.length-2]){
                l=stack.length
                res+=(stack[l-1]-stack[l-2])
                swap(stack,l-1,l-2)
            }
            stack.pop()
        }

    return res
};

var swap=function(stack,l1,l2){
   return [stack[l1],stack[l2]] = [stack[l2],stack[l1]]
}