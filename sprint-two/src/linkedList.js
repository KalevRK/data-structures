var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  // O(1)
  list.addToTail = function(value){
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      var newNode = Node(value);
      list.tail.next = newNode;
      newNode.previous = list.tail;
      list.tail = newNode;
    }
  };

  // O(1)
  list.addToHead = function(value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      var newHead = Node(value);
      newHead.next = list.head;
      list.head.previous = newHead;
      list.head = newHead;
    }
  };

  // O(1)
  list.removeHead = function(){
    if (list.head !== null) {
      var oldHead = list.head;
      list.head = list.head.next;
      list.head && (list.head.previous = null);
      return oldHead.value;
    }
  };

  // O(1)
  list.removeTail = function() {
    if (list.tail !== null) {
      var oldTail = list.tail;
      list.tail = list.tail.previous;
      list.tail && (list.tail.next = null);
      return oldTail.value;
    }
  };

  // O(n)
  list.contains = function(target){
    var node = list.head;
    while (node !== null) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
