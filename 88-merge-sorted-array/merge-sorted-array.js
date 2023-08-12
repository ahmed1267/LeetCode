/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    for(let i=0;i<n;i++){
        nums1.push(nums2[i])
    }
    nums1.sort((a,b) => a-b)
    for(let i=0;i<nums1.length;i++){
        if(nums1[i]==0) {
                nums1.splice(i,n)
                break;
            }
    }

    // if(n==0) return
    // if(m==0) {
    //     nums1=[].concat(nums2)
    //     return
    //     }

    // nums1.splice(m+n-3,3)
    // while(nums2.length){
    //     let x=nums2.shift()
    //     for(let i=0;i<m;i++){
    //         if(x<=nums1[i]){
    //             nums1.splice(i,0,x)
    //             console.log(x,nums1)
    //             m++
    //             break;
    //         }
    //         else if(i==m-1)nums1.push(x)
    //     }
    // }

}