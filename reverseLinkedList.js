let reverseList = (head) => {
    let max = head.length;
    let newList =[];
    for (let i=max-1 ; i>=0 ; i--){
        newList.push(head[i]);
    } 
    return newList;
};
let head = [1,2,3,4,5];
let data = reverseList(head);
console.log(data);

/*
let reverseList = (head) => {
    var prev = null;
    var current = head;
    var next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        head = prev;
        return head;
    } */