
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head == null) {
        return null;
    }

    let currentNode = head;
    let prevNode = currentNode;
    while(currentNode) {
        if(currentNode.val == val) {
            if(currentNode == head) {
                head = head.next;
                currentNode = head;
                if(currentNode == null)
                    return null;
                else
                    continue;
            } else if(currentNode.next == null) {
                prevNode.next = null;
                return head;
            } else {
                prevNode.next = currentNode.next;
                currentNode = currentNode.next;
                continue;
            }
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
    }

    return head;
};


var removeElements = function(head, val) {
    if(head !== null) {
        head.next = removeElements(head.next, val);
        if(head.val == val) {
            head = head.next;
        }
        return head;
    }
    return head;
};