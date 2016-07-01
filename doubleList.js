'use strict';

(function(){
    function Node(data){
        this.data = data;
    this.next=null;
    this.previous=null;
    }

function DoublyList(){
    this.head=null;
    this._length=0;
    this.tail =null;
}

DoublyList.prototype.add = function(val){
    var node =new Node(val);
        
    if(this._length!=0){
        this.tail.next =node;
        node.previous= this.tail;
        this.tail = node;
    }
    else{
        this.tail = node;
        this.head =node;
    }
    this._length++;
    return node;
}

DoublyList.prototype.searchNodeAt =function(position){
    var count = 1,
        length= this._length,
        currentNode = this.head,
        message= {failure : 'Failure: non-existent node in this list.'};
    
    if(position > length || position < 1 || length === 0){
        throw new Error(message.failure);
    }
    
    while(count < position){
        currentNode = currentNode.next;
        count++;
    }
    return currentNode;
};
DoublyList.prototype.remove = function(position){
      var count = 1,
        length= this._length,
        currentNode = this.head,
          beforeNodeToDelete=null,
          afterNodeToDelete =null,
          NodeToDelete=null,
          message= {failure : 'Failure: non-existent node in this list.'};
    
    if(position > length || position < 1 || length === 0){
        throw new Error(message.failure);
    }
    
    //case 2 , delete 1st node
    if(position === 1 ){
        this.head = currentNode.next;
        if(this.head!=null){
           this.head.previous= null;  
        }
        else { 
            this.tail = null;
             }      
    } // delete last node
    else if(position === this._length){
        
        this.tail = this.tail.previous;
        this.tail.next = null;
    }
    else{ //delete middle node
        while(count<position){
            
            currentNode = currentNode.next;
            count++;
        }
        beforeNodeToDelete= currentNode.previous;
        NodeToDelete= currentNode;
        afterNodeToDelete = currentNode.next;
        
        beforeNodeToDelete.next = afterNodeToDelete;
        afterNodeToDelete.previous = beforeNodeToDelete;
        
        
    } //delete middle node
    this._length--;
    return this ;
    
}
debugger;
})();