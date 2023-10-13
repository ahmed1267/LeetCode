/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let min,max
    if(nums1.length<nums2.length){
        min =nums1
        max=nums2
    }else {
        min=nums2
        max=nums1
    }
    let l=0
    let r=min.length
    while(l<=r){
        let mid1= Math.floor((l+r)/2)
        let mid2= Math.floor((((min.length)+(max.length)+1)/2) - mid1)

        let maxL1= (mid1==0) ? -Infinity : min[mid1-1]
        let minR1= (mid1==min.length) ? Infinity : min[mid1]

        let maxL2= (mid2==0) ? -Infinity : max[mid2-1]
        let minR2= (mid2==max.length) ? Infinity : max[mid2]

        if(maxL1 <= minR2 && maxL2 <= minR1){
            if((((min.length)+(max.length))%2)==0){
                return ((Math.max(maxL1, maxL2)+ Math.min(minR1,minR2))/2)
            } else {
                return Math.max(maxL1, maxL2)
            }
        }else if (maxL1>minR2){
            r=mid1-1
        }else{
            l=mid1+1
        }
    }
    return -1

    // let arr=[]
    // let i=0
    // let j=0
    // while(i<nums1.length && j<nums2.length){
    //     if(nums1[i]<nums2[j]){
    //         arr.push(nums1[i])
    //         i++
    //     }else{
    //         arr.push(nums2[j])
    //         j++
    //     }
    // }

    // while(i<nums1.length){
    //     arr.push(nums1[i])
    //     i++
    // }   
    // while(j<nums2.length){
    //     arr.push(nums2[j])
    //     j++
    // }
    // let mid= Math.floor(arr.length/2)
    // if((arr.length%2)==0) return (arr[mid]+arr[mid-1])/2
    // else return arr[mid]
};