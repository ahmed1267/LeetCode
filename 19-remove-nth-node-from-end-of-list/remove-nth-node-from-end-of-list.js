/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head==null||head.next==null){
        return head.val=null
    }
    let current=head
    let counter=1
    while(current.next){
        counter++
        current=current.next
    }
    if(counter==n){
        return head.next
    }else counter-=n+1
    current=head
    for(let i=0;i<=counter;i++){
        if(i==counter){
            current.next=current.next.next
        }else(
            current=current.next
        )
    }
    return head
};