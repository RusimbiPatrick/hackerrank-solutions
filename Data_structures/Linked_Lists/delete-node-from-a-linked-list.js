
function deleteNode(llist, position) {
    // Write your code here
    if(position == 0) {
        return llist = llist.next;
    }
    llist.next = deleteNode(llist.next, position -1)
    return llist
}
