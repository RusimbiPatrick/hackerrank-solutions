function insertNodeAtHead(head, data) {
    if(head == null){
        head = new SinglyLinkedListNode(data);
        return head;
    } else {
        let node = new SinglyLinkedListNode(data);
        node.next = head;
        return node;
    }

}
