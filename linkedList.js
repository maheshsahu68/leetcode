class Node {
    constructor(data , next = null){
        this.data = data;
        this.next = next;
    }
}
class linkedList {
    constructor (){
        this.head = null ; 
        // this.tail = null ;
        this.size = 0 ;
    }
    //insert at first 
    insertFirst (data){
        this.head = new Node(data , this.head);
        this.size++;

    }

    //insert at end
    insertLast(data){
        let node = new Node(data);
        let current ;
        // if empty , make it head 
        if (!this.head){
            this.head = node ;
        } else {
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node ;
            this.size++;
        }

    }
            
    //Print LinkedList
    printAll () {
        let current = this.head ;
        while (current){
            console.log(current.data);
            current = current.next ;
            }
        
    }

}

let ll = new linkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.printAll();
