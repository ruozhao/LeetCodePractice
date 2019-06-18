/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let slowPoint = head;
    let fastPoint = head;

    while(fastPoint != null) {
        if(fastPoint.val !== slowPoint.val) {
            slowPoint.next = fastPoint;
            slowPoint = fastPoint;
        }
        fastPoint = fastPoint.next;
        if((fastPoint == null) && (slowPoint.next != fastPoint)) {
            slowPoint.next = null;
        }
    }

    return head;
};