'use strict';

(function(){
    function Node(data){
        this.data = data;
        this.next = null;
    }   
    function SinglyList(){
        this._length =0;
        this.head = null;
    }
    SinglyList.prototype.add = function(val){
        var node = new Node(val);
        var currentNode;
        if(!this.head){
        this.head = node;      
        }
        else{
            currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
         
        this._length++;
        return node;
    };
    SinglyList.prototype.searchNodeAt =function(position){
        var currentNode= this.head,
            length= this._length,
            count=1,
            message={failure : 'Failure: non-existent node in this list.'};
        
        if(length === 0 || position < 0 || position > length){
            throw new Error(message.failure);
        }
        
        while(count != position){
            currentNode = currentNode.next;
            count++;
        }
         return currentNode;
    };
    SinglyList.prototype.remove =function(position){
        var currentNode= this.head,
            message = {failure: 'Failure: non-existent node in this list.'},
            beforeNodeToDelete= null,
            nodeToDelete = null,
            deletedNode=null,
            count=1,
            length = this._length;
        
        //Case 1
        if(position > length || position === 0){
            throw new Error(message.failure);
        }
        
        //Case 2: the first node is removed
        if(position === 1){
            deletedNode = currentNode;
            this.head = currentNode.next;
            currentNode = null;
            this._length--;
            return this;
            
        }
        //case 3 
        while(count < position){
            beforeNodeToDelete = currentNode;
            nodeToDelete = currentNode.next; 
             count++;     
        }
        currentNode = null;
        beforeNodeToDelete.next = nodeToDelete.next;
        this._length--;
        return this;
        
    }
    debugger;
})();