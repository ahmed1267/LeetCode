/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr=[]
    let i=0
    let j=0
    while(i<nums1.length && j<nums2.length){
        if(nums1[i]<nums2[j]){
            arr.push(nums1[i])
            i++
        }else{
            arr.push(nums2[j])
            j++
        }
    }

    while(i<nums1.length) {
        arr.push(nums1[i])
        i++
    }
    while(j<nums2.length) {
        arr.push(nums2[j])
        j++
    }

    let mid = Math.floor(arr.length/2)
    if((arr.length%2)==0) return (arr[mid-1]+arr[mid])/2
    else return arr[mid]
};