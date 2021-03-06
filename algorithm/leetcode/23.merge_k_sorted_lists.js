/**
 * 把k个已经排好序的链表整合到一个链表中，并且这个链表是排了序的。
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
let mergeKLists = (lists) => {
  let res = [],
    list;
  for (let i = 0; i < lists.length; i++) {
    list = lists[i];
    while (list) {
      res.push(list.val);
      list = list.next;
    }
  }
  res.sort((a, b) => a - b);
  let dummyHead = new ListNode(-1),
    cur = dummyHead;
  res.forEach((val) => {
    cur.next = new ListNode(val);
    cur = cur.next;
  });
  return dummyHead.next;
};
