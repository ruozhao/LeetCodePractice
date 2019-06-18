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
var swapPairs = function(head) {
    let slow = head;
    let fast = head;

    if(head == null || head.next == null) {
        return head;
    }
    fast = head.next;
    while(slow != null && fast != null) {
        let tempValue = fast.val;
        fast.val = slow.val;
        slow.val = tempValue;

        fast = fast.next;
        slow = fast;
        if(fast != null)
            fast = fast.next;
    }
    return head;
};