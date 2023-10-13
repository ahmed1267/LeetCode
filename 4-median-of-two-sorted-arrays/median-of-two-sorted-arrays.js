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
    let r=min.length-1
    let half=Math.floor((min.length+max.length)/2)

    while(true){
        let i=Math.floor((l+r)/2)
        let j=half-i-2

        let leftA= i>=0 && i<min.length ? min[i] : -Infinity
        let rightA= (i+1)<min.length ? min[i+1] : Infinity
        let leftB= j>=0 && j<max.length? max[j] : -Infinity
        let rightB= (j+1)< max.length ? max[j+1] : Infinity
        if(leftA<= rightB && leftB<= rightA){
            if(((min.length+max.length)%2)==0){
                return ((Math.max(leftA,leftB)+ Math.min(rightA,rightB))/2)
            }else{
                return Math.min(rightB,rightA)
            }
        }else if(leftA>rightB){
            r=i-1
        }else{
            l=i+1
        }
    }

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