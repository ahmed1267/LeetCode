/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    function reverse(l){   
        let prev=null
        let curr=l
        while(curr){
            next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        return prev
    }
    let newL1= reverse(l1)
    let newL2= reverse(l2)
    console.log(newL1,newL2)
    let prev=null
    let carry=0
    let curr
    while(newL1 || newL2 || carry !=0){
        let sum=carry
        if(newL1){
            sum+= newL1.val
            newL1= newL1.next
        }
        if(newL2){
            sum+= newL2.val
            newL2= newL2.next
        }
        carry= Math.floor(sum/10)
        sum%=10
        let node= new ListNode(sum)
        node.next=prev
        prev=node        
    }
    return prev


};