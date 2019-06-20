
const removeElements = function (head, val) {
    while (head !== null && head.val === val) {
        let delNode = head;
        head = head.next;
        delNode.next = null
    }

    if (head === null) {
        return null
    }

    let prev = head;
    while (prev.next !== null) {
        if (prev.next.val === val) {
            let delNode = prev.next;
            prev.next = delNode.next;
            delNode.next = null
        } else {
            prev = prev.next
        }
    }
    return head
}; 

const removeElements1 = function (head, val) { 
    if(!head) {
        return head;
    }

    let next = removeElements1(head.next, val);
    return head.val === val ? next : head;
}