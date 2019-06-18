/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head == null) {
        return null;
    }
    if(n == 0) {
        return head;
    }

    let current = head;
    let number = 0;
    while(current!=null) {
        number++;
        current = current.next;
    }
    if(n == number) {
        return head.next;
    }
    current = head;
    let prev = current;
    if((0 < n) && (n < number)) {
        for(let i = 0; i < number - n; i++) {
            prev = current;
            current = current.next;
        }
        if(current.next != null) {
            prev.next = current.next;
        } else {
            prev.next = null;
        }
       return head;
    }
};