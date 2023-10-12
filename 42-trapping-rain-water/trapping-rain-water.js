/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left =0
    let right= height.length-1
    let leftM=0
    let rightM=0
    let water=0
    while(left<=right){
        if(height[left]<=height[right]){
            if(height[left]>leftM){
                leftM=height[left]
            }else{
                water+=leftM-height[left]
            }
            left++
        }else if(height[right]<height[left]){
            if(height[right]>rightM){
                rightM=height[right]
            }else{
                water+=rightM-height[right]
            }
            right--
        }
    }
    return water
};