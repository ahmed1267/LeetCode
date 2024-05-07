/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function(head) {

    let curr=head
    let arr=[]
    while(curr){
        arr.push(curr.val)
        curr=curr.next
    }
    let carry=0
    let l=arr.length
    for(let i=l-1;i>=0;i-- ){
        carry+=2*arr[i]
        arr[i]=carry%10
        carry=Math.trunc(carry/10)
    }
    if(carry)arr.unshift(carry)
     head=new ListNode(arr[0])
    curr=head
    for(let i=1;i<arr.length;i++){

        curr.next=new ListNode(arr[i])
        curr=curr.next
    }
    return head

};