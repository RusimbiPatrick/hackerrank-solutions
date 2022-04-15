function insertNodeAtPosition(llist, data, position) {
    // Write your code here
    let newNode = new SinglyLinkedListNode(data);
    let head = llist;
    let current = head;
    
    if(position === 0) {
        newNode.next = current;
        head = newNode
        return head
    }
    let count, prev, temp;
    count = 0;
    while(count < position){
        prev = current;
        current = current.next;
        count++
    }
    
    temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    return head;
}
