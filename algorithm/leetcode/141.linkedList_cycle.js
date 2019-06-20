const detectCycle = (head) => {
    if (!head) return null
    let fast = head,
        slow = head;
    while (fast && fast.next && fast.next.next) {
        fast = fast.next.next
        slow = slow.next
        if (slow === fast) {
            return true
        }
    }
    return false;
};
