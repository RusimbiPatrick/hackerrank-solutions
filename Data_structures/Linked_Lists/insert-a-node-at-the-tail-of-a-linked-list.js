
/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
    let current = head;
    if(current == null ) {
        head = new SinglyLinkedListNode(data)
        return head;
    }
    while(current.next != null){
        current = current.next;
    }
    current.next = new SinglyLinkedListNode(data);
    return head;
}