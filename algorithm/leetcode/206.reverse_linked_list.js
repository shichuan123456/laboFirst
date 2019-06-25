const reverseList = function (head) {
    let pre = null, next = null;
    while(head) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }

    return pre;
};